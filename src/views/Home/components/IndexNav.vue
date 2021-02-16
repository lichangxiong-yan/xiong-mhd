<template>
   <nav class="index-nav">
    <router-link to="/classify">
      <div class="nav-item">
        <i class="iconfont icon-icon-test"></i>
        <p class="nav-text font-24">分类</p>
      </div>
    </router-link>
    <router-link to="/ranking">
      <div class="nav-item">
        <i class="iconfont icon-icon-test1"></i>
        <p class="nav-text font-24">排行</p>
      </div>
    </router-link>
    <router-link to="/vip">
      <div class="nav-item">
        <i class="iconfont icon-icon-test2"></i>
        <p class="nav-text font-24">VIP专区</p>
      </div>
    </router-link>
    <router-link to="/hello/history">
      <div class="nav-item">
        <i class="iconfont icon-icon-test3"></i>
        <p class="nav-text font-24">历史</p>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'IndexNav'
}
</script>

<style lang="scss">
// 引入公用的mixins.scss
@import "@/assets/style/mixins.scss";
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
</style>
