import { defineConfig, loadEnv } from 'vitepress'

const env = loadEnv(process.env.VITE_MODE?process.env.VITE_MODE:"development",process.cwd())
export default defineConfig({
  title: "开源 3D",
  base:  env.VITE_ALIYUN+ 'three-cesium-links',
  description: "专注于三维可视化的开源组织，开发者抱团取暖，分享知识，接活盈利，让自己更有底气。",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '📝留言', link: 'https://z2586300277.github.io/message.html' },
      { text: '🐘优雅永不过时', link: 'https://z2586300277.github.io' },
      { text: '🌐贾宛龙', link: 'https://jiawanlong.github.io' },
      { text: '👬团队', link: '/team'},
      { text: '🐧QQ群', link: 'https://qm.qq.com/q/QdsKkzo2gI' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [

    //     ]
    //   }
    // ],

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
