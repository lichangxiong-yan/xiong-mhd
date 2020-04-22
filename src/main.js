import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入scss
import './assets/style/base.scss'

Vue.config.productionTip = false

// 全局定义一个过滤器 formatYi
Vue.filter('formatYi', (value) => {
  // console.log('value:', value)
  return `${(parseInt(value) / 100000000).toFixed(2)}亿`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
