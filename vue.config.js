// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // 目标地址
        target: "http://www.migu.cn",
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
