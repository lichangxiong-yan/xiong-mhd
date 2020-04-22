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
      <nav class="index-nav">
        <a href="classify.html?cpid=0">
          <div class="nav-item">
            <i class="iconfont icon-icon_addmessage">&#xe644;</i>
            <p class="nav-text font-24">分类</p>
          </div>
        </a>
        <a href="ranking.html?cpid=0">
          <div class="nav-item">
            <i class="iconfont icon-icon_addmessage">&#xe644;</i>
            <p class="nav-text font-24">排行</p>
          </div>
        </a>
        <a href="vip.html?cpid=0">
          <div class="nav-item">
            <i class="iconfont icon-icon_addmessage">&#xe644;</i>
            <p class="nav-text font-24">VIP专区</p>
          </div>
        </a>
        <a href="history.html?cpid=0">
          <div class="nav-item">
            <i class="iconfont icon-icon_addmessage">&#xe644;</i>
            <p class="nav-text font-24">历史</p>
          </div>
        </a>
      </nav>

      <section
        class="index-recommend"
        v-for="item in recommendList"
        :key="item.specialid"
      >
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" :src="item.icon" />
            <span class="title-text font-36">{{ item.name }}</span>
          </div>
          <span class="title-more font-24">更多 &gt;</span>
        </div>
        <!-- 一行二个 -->
        <div v-if="item.comicsviewtype === 1" class="recommend-type-1">
          <div
            class="item"
            v-for="childItem in item.comicslist"
            :key="childItem.bigbook_id"
          >
            <img
              class="item-pic"
              :src="JSON.parse(childItem.extension).xsyzfx"
            />
            <p class="item-name font-28">{{ childItem.bigbook_name }}</p>
            <p class="item-text font-24">
              {{ JSON.parse(childItem.extension).recommendwords }}
            </p>
          </div>
        </div>
        <!-- 一行三个 -->
        <div v-if="item.comicsviewtype === 5" class="recommend-type-5">
          <div
            class="item"
            v-for="childItem in item.comicslist"
            :key="childItem.bigbook_id"
          >
            <img class="item-pic" :src="childItem.coverurl" />
            <p class="item-name font-28">{{ childItem.bigbook_name }}</p>
            <p class="item-text font-24">{{ childItem.key_name }}</p>
          </div>
        </div>
        <!-- 一行一个 -->
        <div v-if="item.comicsviewtype === 3" class="recommend-type-3">
          <div
            class="item"
            v-for="(childItem, childIndex) in item.comicslist"
            :key="childItem.bigbook_id"
          >
            <img
              class="item-pic"
              :src="JSON.parse(childItem.extension).scfk344_202"
            />
            <div class="ranking-group">
              <div
                class="item-ranking"
                :class="`item-ranking-${childIndex + 1}`"
              ></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">{{ childItem.bigbook_name }}</p>
              <p class="item-hot font-24">
                人气：
                <!-- 123123123123 => 1.12亿 -->
                <span class="hot-hot">{{ childItem.bigbookview }}</span>
              </p>
              <p class="item-text font-24">{{ childItem.brief }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- 轮播图 end-->
  </div>
</template>

<script>
// 使用 ../ 相对路劲时，如果当前组件位置发生变化
// 那么相对路径也需要去修改，如果使用 @ 别名的方式，就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
import { Swiper, SwiperItem } from '../../components/Swiper'
import IndexHeader from './components/IndexHeader'
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
    IndexHeader: IndexHeader
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
          if (res.code === 200) {
            // OK
            this.bannerList = res.info
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
  .index-nav {
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100px;
    .nav-item {
      .iconfont {
        font-size: 52px;
        line-height: 1.2;
      }
      .nav-text {
        color: #8d8d8d;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  .index-recommend {
    .recommend-divide {
      height: 10px;
      background-color: #f4f4f4;
    }
    .recommend-title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-top: 20px;
      margin-bottom: 18px;
      .title-group {
        display: flex;
        align-items: center;
        .title-icon {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
        .title-text {
          color: #3a3a3a;
          font-weight: 500;
        }
      }
      .title-more {
        color: #b0b0b0;
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .recommend-type-1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      .item {
        width: 174px;
        height: 218px;
        margin-bottom: 16px;
        .item-pic {
          width: 174px;
          height: 174px;
          margin-bottom: 4px;
          position: relative;
        }
        .item-name {
          max-width: 100%;
          margin-bottom: 2px;
          color: #3a3a3a;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .item-text {
          max-width: 100%;
          color: #8d8d8d;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .recommend-type-3 {
      padding: 0 10px;
      box-sizing: border-box;
      .item {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 16px;
        position: relative;
        .item-pic {
          width: 154px;
          height: 90px;
        }
        .text-group {
          width: 158px;
          margin-left: 42px;
          .item-name {
            margin-bottom: 4px;
            color: #3a3a3a;
            font-weight: 500;
          }
          .item-hot {
            color: #b0b0b0;
            margin-bottom: 15px;
            .hot-hot {
              color: red;
            }
          }
          .item-text {
            color: #8d8d8d;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .ranking-group {
          .item-ranking {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-position: top;
            background-size: 100%;
            position: absolute;
            top: 4px;
            left: 168px;
          }
          .item-ranking-other {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-position: top;
            background-size: 100%;
            position: absolute;
            top: 6px;
            left: 168px;
          }
          .item-ranking-1 {
            background-image: url("~@/assets/icon/rank-1.png");
          }
          .item-ranking-2 {
            background-image: url("~@/assets/icon/rank-2.png");
          }
          .item-ranking-3 {
            background-image: url("~@/assets/icon/rank-3.png");
          }
          .item-ranking-4 {
            background-image: url("~@/assets/icon/rank-4.png");
          }
          .item-ranking-5 {
            background-image: url("~@/assets/icon/rank-5.png");
          }
        }
      }
    }

     .recommend-type-5 {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-align-content: center;
      align-content: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      padding: 0 0.29333333rem;
       .item {
      width: 2.96rem;
      margin: 0 0 0.42666667rem;
       .item-pic {
      width: 2.96rem;
      height: 3.94666667rem;
      margin: 0 0 0.13333333rem;
    }
    }

    .index-recommend .recommend-type-5 .item .item-title {
      max-width: 100%;
      margin: 0 0 0.10666667rem;
      color: #3a3a3a;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

     .item .item-text {
      max-width: 100%;
      color: #8d8d8d;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  }
}
</style>
