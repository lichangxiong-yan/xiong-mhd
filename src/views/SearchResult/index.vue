<template>
  <div class="page-search-result">
    <normal-header :title="keyword" :showRight="false"></normal-header>

    <div class="search-result-main">
      <cartoon-list :list="cartoonList"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormlHeader'
import CartoonList from '@/components/CartoonList'

import { getSerachResult } from '@/api/cartoon'

export default {
  name: 'SearchResult',

  components: {
    NormalHeader,
    CartoonList
  },
  data () {
    return {
      keyword: this.$route.query.keyword,

      list: []
    }
  },

  computed: {
    cartoonList () {
      return this.list.map(item => {
        return {
          id: item.id,
          coverurl: item.coverurl,
          name: item.name,
          author: item.author,
          view: item.lastpartname
        }
      })
    }
  },
  methods: {
    getSerachResult (name) {
      getSerachResult(name)
        .then(res => {
          if (res.code === 200) {
            this.list = res.info
          } else {
            console.log(res.code_msg)
            alert('错误')
          }
        })
        .catch(err => {
          console.log(err)
          alert('请求错误')
        })
    }
  },

  created () {
    // 调用请求数据
    this.getSerachResult(this.keyword)
  }
}
</script>

<style lang="scss" scoped>
.page-search-result {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-result-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
