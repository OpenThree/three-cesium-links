import { defineConfig, loadEnv } from 'vitepress'

const env = loadEnv(process.env.VITE_MODE?process.env.VITE_MODE:"development",process.cwd())
export default defineConfig({
  title: "OPEN THREE",
  base:  env.VITE_ALIYUN+ 'three-cesium-links',
  description: "专注于三维可视化的开源组织，开发者抱团取暖，分享知识，接活盈利，让自己更有底气。",
  themeConfig: {
    logo: 'https://z2586300277.github.io/three-cesium-examples/files/site/logo.svg',
    nav: [
      { text: '📗简介', link: 'https://nicowebgl.cn/openthree/home/' },
      { text: 'Three 案例🍃', link: 'https://z2586300277.github.io/three-cesium-examples/' },
      { text: 'Cesium 案例🍀', link: 'https://jiawanlong.github.io/Cesium-Examples/examples/cesiumEx/examples.html#mapping' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [

        ]
      }
    ],

    footer: {
        copyright: `版权所有 ©2019-2025 OpenThree All Rights`,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenThree' }
    ]
  },
  vite:{
    define:{
            // 注入全局常量
            'process.env': {
              BASE_URL: env.VITE_BASE || '',
              MODE: env.VITE_MODE || 'development',
            }
    },
    // server:{
    //   proxy:{
    //     '/openthree_group': {
    //       target: 'http://nicowebgl.cn/file_airport',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/openthree_group/, "/openthree_group")
    //     }
    //   }
    // }
  }
})
