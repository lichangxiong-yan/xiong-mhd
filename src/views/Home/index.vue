<template>
  <div class="page-home">
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
    <section class="swiper-container">

    </section>
    <nav class="index-nav">
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
</nav>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
  .page-home {
    height: 100%;
    display: flex;
    flex-direction: column; // 上下布局

    .index-header {
      display: flex;
      justify-content: space-between;  // 两端对齐
      align-items: center; // 上下居中
      padding: 0 20px;
      height: 44px;
      box-sizing: border-box;
      .user-btn {
        width: 25px;
        height: 25px;
        background: url('../../assets/ico/123.png') no-repeat;  // 不让他重复
        background-size: 100%;
      }
      .header-search {
        width: 25px;
        height: 25px;
        background: url('../../assets/ico/234.png') no-repeat;
        background-size: 100%;
      }
      .header-logo {
        width: 98px;
        height: 28px;
        background: url('../../assets/111.png') no-repeat;
        background-size: 100%;
      }
    }
  }
  .swiper-container {
    height: 180px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }
  .index-nav {
    height: 100px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    .pic-1 {
      background: url('')
    }
  }
</style>
