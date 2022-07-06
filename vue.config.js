const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = (dirname) => path.join(__dirname, dirname)

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  /**
   * 设置全局less变量文件
   */
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/style/variable.less')]
    }
  }
})
