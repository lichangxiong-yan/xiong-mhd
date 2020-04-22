// 专门处理 漫画相关的 接口请求

// 引入封装好的  axios 的实例
import request from '@/utils/request'
/**
 * 获取轮播图
 */
export const getBanner = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url:
      '/api/comic_v2/getproad', // 这个地址是 轮播图的请求地址
    methods: 'GET', // 这个是请求方式
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 123
    }

  })
}
/**
 * 获取首页推荐数据
 */
// https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
export const getIndexRecommend = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url:
      '/api/comic_v2/customerview', // 这个地址是 主体数据
    methods: 'GET', // 这个是请求方式
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      viewtype: 1
    }
  })
}
