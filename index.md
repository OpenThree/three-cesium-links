---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Open Three"
  text: "开源 - 三维"
  tagline: 一个专注于前端可视化的开源组织，三维可视化开发者抱团取暖，开源分享知识，接活盈利，让自己更有底气，加入请联系
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
    avatar: 'https://avatars.githubusercontent.com/u/56536031?v=4',
    name: 'Nico',
    title: '热爱Three.js 和 Cesium.js 的开发者',
    links: [
      { icon: 'github', link: 'https://github.com/Nicolas-zn' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/72586973?s=96&v=4',
    name: '优雅永不过时',
    title: '致力于可视化前端的开发者',
    links: [
      { icon: 'github', link: 'https://github.com/z2586300277' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/20716499?v=4',
    name: 'JWL',
    title: '人生如逆旅，我亦是行人',
    links: [
      { icon: 'github', link: 'https://github.com/jiawanlong' },
    ]
  }
]" />
