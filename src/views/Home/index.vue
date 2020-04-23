<template>
  <div class="page-home">
    <!--  首页头部 begin -->
    <IndexHeader></IndexHeader>
    <!--  首页头部 end -->

    <!-- 轮播图 begin-->
    <!-- v-if='bannerList.length > 0  可以解决异步  就是当他里面有数据的时候在渲染 长度为空的时候不显示  这个可以解决轮播图的异步操作 -->
    <div class="index-main">
      <Swiper class="my-swiper" @change="onChange" v-if="bannerList.length > 0">
        <SwiperItem v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" alt="" />
        </SwiperItem>
      </Swiper>

      <!-- index-nav -->
      <IndexNav></IndexNav>

      <IndexRecommend v-for="item in recommendList" :key="item.specialid" :info="item"></IndexRecommend>

    </div>
  </div>

</template>

<script>
// 使用 ../ 相对路劲时，如果当前组件位置发生变化
// 那么相对路径也需要去修改，如果使用 @ 别名的方式，就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
import { Swiper, SwiperItem } from '../../components/Swiper'
import IndexHeader from './components/IndexHeader'
import IndexNav from './components/IndexNav'
import IndexRecommend from './components/IndexRecommend'
import { getBanner, getIndexRecommend } from '@/api/cartoon'
export default {
  name: 'Home',

  // props: {
  //   // 外层组件上 recommendList 中的每一项元素
  //   info: {
  //     type: Object,
  //     required: true
  //   }
  // },
  components: {
    Swiper: Swiper,
    SwiperItem: SwiperItem,
    IndexHeader: IndexHeader,
    IndexNav: IndexNav,
    IndexRecommend: IndexRecommend
  },
  data () {
    return {
      // 需要一个数据，考虑哪些点？
      // 1. 数据放在那里，data? props? computed? state? getter?
      // 2. 数据格式，string? object? number? array? ...
      bannerList: [],
      recommendList: []
    }
  },
  methods: {
    onChange (index) {
      console.log('hello', index)
    },
    getBanner () {
      getBanner()
        .then(res => {
          // 漫画岛项目的每个接口都有 code 字段
          // 这个字段如何是 200 。这个接口才是OK的

          // OK
          this.bannerList = res.info
        })
    },
    getIndexRecommend () {
      getIndexRecommend()
        .then(res => {
          // 漫画岛项目的每个接口都有 code 字段
          // 这个字段如何是 200 。这个接口才是OK的
          if (res.code === 200) {
            // OK
            this.recommendList = res.info
            console.log('recommendList:', this.recommendList)
          } else {
            // 不OK, 就报错
            // TODO, 目前先使用丑陋的 alert。后面可以去用一下 vant 组件库中的组件
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
  },

  created () {
    this.getBanner()
    this.getIndexRecommend()
  }
}
</script>
<style lang="scss" scoped>
// 引入公用的mixins.scss
// @import "../../assets/styles/mixins.scss";
// 使用 @ 别名时，需要加一个 ~ 符号
// !!!! @vue/cli 4.3.1 不需要加 ~
@import "@/assets/style/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  .my-swiper img {
    width: 100%;
  }

}
</style>
