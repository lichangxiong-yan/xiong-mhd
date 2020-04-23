// 专门处理 漫画相关的 接口请求

// 引入封装好的  axios 的实例
import request from '@/utils/request'

// 引入 ApiHeader
import { format } from '@/utils/apiHeader'

/**
 * 获取轮播图
 */
export const getBanner = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/getproad', // 这个地址是 轮播图的请求地址
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
    url: '/api/comic_v2/customerview', // 这个地址是 主体数据
    methods: 'GET', // 这个是请求方式
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      viewtype: 1
    }
  })
}

/**
 * 获取分类类型
 */
export const getTypes = () => {
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 125
    }
  })
}

/**
 * 获取分类数据
 * @param {String} subject 分类Id
 * @param {Number} pageno 当前页码
 * @param {Number} pagesize 每页显示条数
 */
export const getTypeList = (subject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    // U26gHqCVIoAlThDANwSON1ymMzJ7zhCawvOXuOR+PUsm/QnfuvytxstXRqxFTAgt
    // =>
    // {
    //   subject: e,
    //   pageno: 1,
    //   pagesize: 20
    // }
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}
