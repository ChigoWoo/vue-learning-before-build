const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
    transpileDependencies: true,
    publicPath: './',
    //webpack配置
    configureWebpack: {
      //关闭 webpack 的性能提示
      performance: {
        hints: "warning", // 枚举
        // hints: "error", // 性能提示中抛出错误
        // hints: false, // 关闭性能提示
        maxAssetSize: 200000, // 整数类型（以字节为单位）
        maxEntrypointSize: 400000, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
          // 提供资源文件名的断言函数
          return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
      }
    }
  }
)
