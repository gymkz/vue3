/**
 * Create By Meng
 * Desc: 
 */
// const path = require('path')
// const host = 'http://47.116.70.58:8004/';
const target = 'http://47.116.70.58:8004/';

module.exports = {
  publicPath: './',
  assetsDir: './',
  productionSourceMap: false,
  devServer: {
    port: '8090',
    open: true,
    disableHostCheck: true,
    proxy: {
      '/axio': {
        target,
        changeOrigin: true,
        pathRewrite: {
          '^/axio': ''
        }
      },
      '/down': {
        target,
        changeOrigin: true,
        pathRewrite: {
          '^/down': ''
        }
      }
    }
  }
}
/**
 * proxy: {
      '/api': { //代理接口前缀为 /api
        target, // 对应代理的请求的地址
        ws: true, // 是否启用websockets
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端
        pathRewrite: {
          '^/api': 'XXX' // 替换规则 '/api' -> 最终为target + 'XXX' + 具体请求路径
        }
      }
    }
 */
 