<template>
  <div class="page-city">
    <NormalHeader
      :title="`当前城市-${curCityName}`"
      :showRight="false"
    ></NormalHeader>

    <div class="city-main">
      <div class="left" ref="scrollLeft">
        <div
          class="city-index-section"
          v-for="item in cityList"
          :key="item.py"
          :ref="`section-${item.py}`"
        >
          <p>{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :key="city.cityId"
              @click="handleClick(city)"
            >
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in indexs" :key="item" @click="handleIndex(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NormalHeader from '../../components/NormlHeader'
import { mapMutations, mapGetters } from 'vuex'

import { getCityList } from '@/api/city'
export default {
  name: 'City',

  components: {
    NormalHeader
  },
  data () {
    return {
      cities: []
    }
  },
  computed: {
    ...mapGetters('city', ['curCityName']),
    cityList () {
      // 最终结果收集
      const result = []
      this.cities.forEach(item => {
        // 获取当前城市的首字母
        const py = item.pinyin.substr(0, 1).toUpperCase()

        // 判断 当前 py 是否已经在 result 中存在，如果存在这个 py 在 result 中的下标是多少呢？
        const index = result.findIndex(item => item.py === py)
        if (index > -1) {
          // 存在
          result[index].list.push(item)
        } else {
          // 不存在
          result.push({
            py,
            list: [item]
          })
        }
        // 1. [{ py: 'B', list: [北京-item] }]
        // 2. 保定 [{ py: 'B', list: [北京item] }, { py: 'B', list: [保定-item]}]
        // 想要 [{ py: 'B', list: [北京-item, 保定-item] }]
      })
      return result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    },

    indexs () {
      return this.cityList.map(item => item.py)
    }
  },
  methods: {
    // 调用  第一个参数是模块名字
    ...mapMutations('city', ['SET_CURCITY']),
    getCityList () {
      getCityList()
        .then(res => {
          const data = res.data
          if (data.status === 0) {
            this.cities = data.data.cities
          } else {
            alert(data.msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    handleIndex (py) {
      // ref标记是，如果标记在 v-for上，那么得到的是一个数组
      // 根据 py 获取左侧对应的元素的 DOM对象
      const targetEl = this.$refs[`section-${py}`][0]
      // 计算这个元素距离 左侧顶部的距离
      const offsetTop = targetEl.offsetTop
      // 修改左侧滚动元素的  scrollTop 属性的值
      this.$refs.scrollLeft.scrollTop = offsetTop
    },
    handleClick (city) {
      // 1. 改变仓库
      this.SET_CURCITY(city)
      // 2. 回到之前要去的页面
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },
  created () {
    this.getCityList()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixins.scss";

.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;

  .city-main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .left {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    position: relative;
    // background: pink;
    .city-index-section {
      @include border-bottom;
      padding-left: 15px;
      p {
        @include border-bottom;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
      li {
        @include border-bottom;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 20px;
    height: 100%;
    // background: powderblue;
    li {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
