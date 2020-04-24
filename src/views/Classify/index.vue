<template>
  <div class="page-classify">
    <!-- <router-link to="/city"> 当前城市： {{ curCityName }} </rputer-link> -->
    <router-link to="/city"> 当前城市： {{ curCityName }} </router-link>
    <NormalHeader title="分类"></NormalHeader>

    <HederType :types="types" @click="onTypeChange"></HederType>

    <div class="classify-main">
      <cartoon-list :list="cartoonList"></cartoon-list>
    </div>
  </div>
</template>
<script>
import NormalHeader from '@/components/NormlHeader'
import HederType from '@/components/HederType'
import CartoonList from '@/components/CartoonList'
import { getTypes, getTypeList } from '@/api/cartoon'
import { unformat } from '../../utils/apiHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'Classify',
  components: {
    NormalHeader,
    HederType,
    CartoonList
  },
  data () {
    return {
      types: [],
      // 分类数据
      classifyList: []
    }
  },
  computed: {
    ...mapGetters('city', ['curCityName']),
    cartoonList () {
      // [{bigbook_id, bigbook_name, }] => [{id, name}]
      return this.classifyList.map(item => {
        return {
          id: item.bigbook_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    a () {
      return getTypes().then(res => {
        this.types = res.info
      })
    },

    b (subject) {
      getTypeList(subject).then(res => {
        // 对 res.info 做解密, 并解析成 JSON
        const info = JSON.parse(unformat(res.info))
        console.log(info)
        this.classifyList = info.comicsList
      })
    },

    /**
     * 切换分类类型时，触发
     */
    // subject 这个是要给b的参数
    onTypeChange (payload) {
      console.log(payload)
      // 取出 payload 中的 type 中的 targetargument
      const subject = payload.type.targetargument
      // 从新发送 B 接口请求
      this.b(subject)
    }

  },
  async created () {
    await this.a()
    // console.log(unformat('xKN0pYL6M22yUj6FOQT74hVyjxFcMmtfESOqVr+v0/qL6sKcwCKIfRGywZe3s8Zg'))
    // A B 两个接口，B 接口的参数需要从 A 接口的返回值中去获取。要如何办？
    this.b(this.types[0].targetargument)
  }
}
</script>
<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
