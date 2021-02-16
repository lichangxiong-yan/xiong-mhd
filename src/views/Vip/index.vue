<template>
  <div class="page-vip">
    <NormalHeader title="vip专区"></NormalHeader>

    <div class="vip-main">
      <cartoon-list :list="cartoonList"></cartoon-list>
    </div>
  </div>
</template>
<script>
import NormalHeader from '@/components/NormlHeader'

import CartoonList from '@/components/CartoonList'
import { getVIPList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHeader'
export default {
  name: 'Vip',
  components: {
    NormalHeader,
    CartoonList
  },

  data () {
    return {
      VIPList: []
    }
  },
  computed: {
    cartoonList () {
      return this.VIPList.map(item => {
        return {
          id: item.bigbook_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    getVIPList () {
      getVIPList().then(res => {
        if (res.code === 200) {
          // 解码与解析
          const info = JSON.parse(unformat(res.info))
          this.VIPList = info.comicsList
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
    // const obj = unformat('60P3rkydkWQtGGFaEXA6VXndgfVtz7WswIy520lpgbkXfjeBKiHrgQ8HsU8Mec14')
    // console.log(obj)
    this.getVIPList()
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
