// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value
      //      key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },

      '/maizuo': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maizuo': ''
        }
      },
      '/migu': {
        // 目标地址
        target: 'http://www.migu.cn',
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          '^/migu': ''
        }
      }
    }
  }
}
