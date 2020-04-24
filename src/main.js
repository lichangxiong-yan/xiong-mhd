import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'

// import { Notify } from "vant";

// 引入scss
import './assets/style/base.scss'

Vue.config.productionTip = false

// 选项配置
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载高度，图片在这个配置的高度内的化会自动去加载真实需要的图片地址
  error: require('./assets/111.png'), // 当加载真实图片出错时，显示的替代图片
  loading: require('./assets/111.png'), // 加载真实图片地址之前的一个替代图片
  attempt: 1 // 尝试加载真实图片的次数  这个可以改
})

// Vue.use(Notify);

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
