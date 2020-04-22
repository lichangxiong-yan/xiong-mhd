<template>
  <div class="page-ranking">
    <NormalHeader title="排行榜"></NormalHeader>

    <HederType></HederType>

    <div class="ranking-main">
      <cartoon-list></cartoon-list>
    </div>
  </div>
</template>
<script>
import NormalHeader from '@/components/NormlHeader'
import HederType from '@/components/HederType'
import CartoonList from '@/components/CartoonList'

export default {
  name: 'Ranking',
  components: {
    NormalHeader,
    HederType,
    CartoonList
  }
}
</script>
<style lang="scss" scoped>
.page-ranking {
  display: flex;
  flex-direction: column;
  height: 100%;

  .ranking-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
