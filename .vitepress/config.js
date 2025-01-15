import { defineConfig, loadEnv } from 'vitepress'

const env = loadEnv(process.env.VITE_MODE?process.env.VITE_MODE:"development",process.cwd())
export default defineConfig({
  title: "OPEN THREE",
  base:  env.VITE_ALIYUN+ 'three-cesium-links',
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://z2586300277.github.io/three-cesium-examples/files/site/logo.svg',
    nav: [
      { text: '开源案例🍃', link: 'https://z2586300277.github.io/three-cesium-examples/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [

        ]
      }
    ],

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
    server:{
      proxy:{
        '/avatars': {
          target: 'http://nicowebgl.cn:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/avatars/, '/avatars')
        }
      }
    }
  }
})
