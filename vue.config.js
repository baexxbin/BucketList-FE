const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타겟 디렉토리(백엔드 부분: spring-boot 프로젝트의 resource/static 경로)
  outputDir: "../bucketlist/src/main/resources/static",

  /**
   * npm run server 개발 진행시 포트가 다르므로 프록시 설정
   * target: 백엔드 port
   * changeOrigin : true >> cros 문제 해결
   */
  devServer: {
    proxy: {
      '/api': {  // main페이지 열릴 때 연결되는 경로
        target: "http://localhost:8080",
        changeOrigin: true,
      }
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },


  // 웹팩 설정 조작을 위해 웹팩의 내부 API 사용
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // modify the options...
          return options
        })
  }

})


