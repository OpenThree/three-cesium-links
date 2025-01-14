import { defineConfig } from 'vitepress'
let base_front = ''
if (process.env.VITE_MODE == 'development') {
  base_front = '/openthree'
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OPEN THREE",
  base:  base_front+ '/three-cesium-links',
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
  }
})
