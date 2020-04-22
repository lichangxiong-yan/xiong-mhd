<template>
  <div class="page-classify">
    <NormalHeader title="分页"></NormalHeader>

    <HederType :types="types"></HederType>

    <div class="classify-main">
      <cartoon-list></cartoon-list>
    </div>
  </div>
</template>
<script>
import NormalHeader from '@/components/NormlHeader'
import HederType from '@/components/HederType'
import CartoonList from '@/components/CartoonList'
import { getTypes } from '@/api/cartoon'
import { unformat } from '../../utils/apiHeader'

export default {
  name: 'Classify',
  components: {
    NormalHeader,
    HederType,
    CartoonList
  },
  data () {
    return {
      types: []
    }
  },
  methods: {
    getTypes () {
      getTypes().then(res => {
        if (res.code === 200) {
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    }
  },
  created () {
    this.getTypes()
    console.log(unformat('xKN0pYL6M22yUj6FOQT74hVyjxFcMmtfESOqVr+v0/qL6sKcwCKIfRGywZe3s8Zg'))
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
