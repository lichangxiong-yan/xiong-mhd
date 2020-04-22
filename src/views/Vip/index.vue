<template>
  <div class="page-vip">
    <NormalHeader title="vip专区"></NormalHeader>

    <HederType></HederType>

    <div class="vip-main">
      <cartoon-list></cartoon-list>
    </div>
  </div>
</template>
<script>
import NormalHeader from '@/components/NormlHeader'
import HederType from '@/components/HederType'
import CartoonList from '@/components/CartoonList'

export default {
  name: 'Vip',
  components: {
    NormalHeader,
    HederType,
    CartoonList
  }
}
</script>
<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
