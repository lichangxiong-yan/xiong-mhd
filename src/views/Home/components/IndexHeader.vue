<template>
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
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="scss">
  @import "@/assets/style/mixins.scss";

  .index-header {
    @include border-bottom;
    display: flex;
    justify-content: space-between; // 两端对齐
    align-items: center; // 上下居中
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;
    position: relative;
    // border-bottom: 1px solid #dbd9dc;

    .user-btn {
      width: 25px;
      height: 25px;
      background: url("~@/assets/icon/123.png") no-repeat; // 不让他重复
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("~@/assets/icon/234.png") no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 98px;
      height: 28px;
      background: url("~@/assets/111.png") no-repeat;
      background-size: 100%;
    }
  }

</style>
