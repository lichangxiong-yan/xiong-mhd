<template>
  <div class="header-type">
    <div
      class="item "
      :class="{ active: index === activeIndex }"
      v-for="(item,index) in types"
      :key="item.id"
      @click="handleClick(item,index)"
    >
      {{ item.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HederType',

  props: {
    types: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 当前选中的下标
      activeIndex: 0
    }
  },
  methods: {
    handleClick (type, index) {
      // 当前点击的高亮
      this.activeIndex = index
      // 通知父组件
      this.$emit('click', { type, index })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.header-type {
  @include border-bottom;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 10rem;
  margin: 0 auto;
  padding: 0.26666667rem 0;
}

.header-type .item {
  width: 20%;
  font-size: 0.37333333rem;
  line-height: 0.66666667rem;
  text-align: center;
}

.header-type .item.active {
  color: #e7370c;
}
</style>
