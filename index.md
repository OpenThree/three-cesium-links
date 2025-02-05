---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Open Three"
  text: "开源 三维"
  tagline: 专注于三维可视化的开源组织，开发者抱团取暖，分享知识，接活盈利，让自己更有底气。
  image:
    src: https://z2586300277.github.io/three-cesium-examples/files/site/logo.svg
# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
</script>

<VPTeamMembers :members="[
   {
    avatar: 'https://nicowebgl.cn/file_airport/openthree_group/Nicolas-zn/avatar.jpg',
    name: 'Nico',
    title: '热爱Three.js 和 Cesium.js 的开发者',
    links: [
      { icon: 'github', link: 'https://github.com/Nicolas-zn' },
      { icon: 'twitter', link: 'https://nicowebgl.cn/portfolio/index.html#/my_resume' },
    ]
  },
  {
    avatar: 'https://nicowebgl.cn/file_airport/openthree_group/z2586300277/avatar.jpg',
    name: '优雅永不过时',
    title: '致力于可视化前端的开发者',
    links: [
      { icon: 'github', link: 'https://github.com/z2586300277' },
      { icon: 'twitter', link: 'https://z2586300277.github.io' },
    ]
  },
  {
    avatar: 'https://nicowebgl.cn/file_airport/openthree_group/jiawanlong/avatar.jpg',
    name: 'JWL',
    title: '人生如逆旅，我亦是行人',
    links: [
      { icon: 'github', link: 'https://github.com/jiawanlong' },
      { icon: 'twitter', link: 'https://jiawanlong.github.io/' },
    ]
  },
    {
    avatar: 'https://nicowebgl.cn/file_airport/openthree_group/tingyuxuan2302/avatar.jpg',
    name: '攻城师不浪',
    title: '砥砺前行，fighting',
    links: [
      { icon: 'github', link: 'https://github.com/tingyuxuan2302' },
    ],
  },
  {
    avatar: 'https://nicowebgl.cn/file_airport/openthree_group/KZ137onethe/avatar.jpg',
    name: 'KZ137onethe',
    title: 'KZ137onethe',
    links: [
      { icon: 'github', link: 'https://github.com/KZ137onethe' },
    ],
  },
   {
    avatar: 'https://nicowebgl.cn/file_airport/openthree_group/g2657/avatar.jpg',
    name: 'code like',
    title: 'Three.js developer',
    links: [
      { icon: 'github', link: 'https://github.com/g2657' },
    ],
  }
]" />
