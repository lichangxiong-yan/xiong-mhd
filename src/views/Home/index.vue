<template>
  <div class="page-home">
    <!--  首页头部 begin -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!--  首页头部 end -->
    <!-- 轮播图 begin-->
    <Swiper class="my-swiper" @change="onChange">
      <SwiperItem>
        <img src="http://img.manhuadao.cn/upload/AdGroup201906/9315f7dd68b346928219f29bd9c89e60.jpg" alt="">
      </SwiperItem>
      <SwiperItem>
        <img src="http://img.manhuadao.cn/upload/AdGroup201903/22b43c03a0f943cda001c5338fe0ddd9.jpg" alt="">
      </SwiperItem>
      <SwiperItem>
        <img src="http://img.manhuadao.cn/upload/AdGroup202003/dda50e4233e34186910fd490aea1cd91.jpg" alt="">
      </SwiperItem>

    </Swiper>
    <!-- 轮播图 end-->

    <!-- <nav class="index-nav">
      <a href="classify.html?cpid=0">
        <div class="nav-item">
          <div class="nav-pic pic-1"></div>
          <p class="nav-text font-24">分类</p>
        </div>
      </a>
      <a href="ranking.html?cpid=0">
        <div class="nav-item">
          <div class="nav-pic pic-2"></div>
          <p class="nav-text font-24">排行</p>
        </div>
      </a>
      <a href="vip.html?cpid=0">
        <div class="nav-item">
          <div class="nav-pic pic-3"></div>
          <p class="nav-text font-24">VIP专区</p>
        </div>
      </a>
      <a href="history.html?cpid=0">
        <div class="nav-item">
          <div class="nav-pic pic-4"></div>
          <p class="nav-text font-24">历史</p>
        </div>
      </a>
    </nav>-->
    <!-- <section class="index-recommend">
      <div class="recommend-divide"></div>
      <div class="recommend-title">
        <div class="title-group">
          <img class="title-icon" src="https://img.manhuadao.cn/upload/icon/180208/ic_rexue.png">
        <span class="title-text font-36">燃烧吧热血</span>
        </div>
      </div>
      <div class="recommend-type-1"></div>
    </section>-->
  </div>
</template>

<script>
// 使用 ../ 相对路劲时，如果当前组件位置发生变化
// 那么相对路径也需要去修改，如果使用 @ 别名的方式，就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
import { Swiper, SwiperItem } from '../../components/Swiper'

export default {
  name: 'Home',

  components: {
    Swiper: Swiper,
    SwiperItem: SwiperItem
  },
  methods: {
    onChange (index) {
      console.log('hello', index)
    }
  }
  // // 等正实dom 挂载到页面才能用 这里用 mounted
  // mounted () {
  //   // 这里不能直接 new  所以可以把这个代码注释掉 就不会报错
  //   /* eslint-disable */
  //   new Swiper(".swiper-container", {
  //     // 如果需要分页器
  //     pagination: {
  //       el: ".swiper-pagination"
  //     }
  //   });
  //   /* eslint-enable */
  // }
}
</script>
<style lang='scss' scoped>
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column; // 上下布局

  .index-header {
    display: flex;
    justify-content: space-between; // 两端对齐
    align-items: center; // 上下居中
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/123.png") no-repeat; // 不让他重复
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/234.png") no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 98px;
      height: 28px;
      background: url("../../assets/111.png") no-repeat;
      background-size: 100%;
    }
  }
}
.my-swiper img {
  width: 100%
}
.index-nav {
  height: 100px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;

  .nav-item .pic-1 {
    width: 55px;
    height: 55px;
    background: url("../../assets/img/333.png") no-repeat;
    background-size: 100%;
  }
  .nav-text {
    font-size: 12px;
    color: #8d8d8d;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
  }
  .nav-item .pic-2 {
    width: 55px;
    height: 55px;
    background: url("../../assets/img/334.png") no-repeat;
    background-size: 100%;
  }
  .nav-item .pic-3 {
    width: 55px;
    height: 55px;
    background: url("../../assets/img/335.png") no-repeat;
    background-size: 100%;
  }
  .nav-item .pic-4 {
    width: 55px;
    height: 55px;
    background: url("../../assets/img/336.png") no-repeat;
    background-size: 100%;
  }
}
.index-recommend .recommend-divide {
  width: 10rem;
  height: 0.26666667rem;
  background-color: #f4f4f4;
}
.recommend-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  .title-group {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;

    .title-icon {
      width: 22px;
      height: 22px;
    }
    .title-text {
      color: #3a3a3a;
      font-weight: 500;
    }
    .font-36 {
      font-size: 18px;
    }
  }
}
</style>
