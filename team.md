---
layout: page
title: 团队成员
description: Open Three 开源组织的核心团队成员
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const contributors = [
      {
    avatar: 'https://avatars.githubusercontent.com/u/56536031?v=4',
    name: 'Nico',
    title: 'Three.js  Cesium.js ',
    desc: '热爱 Three.js 和 Cesium.js',
    links: [
      { icon: 'github', link: 'https://github.com/Nicolas-zn' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/72586973?s=96&v=4',
    name: '优雅永不过时',
    title: '专注于三维可视化',
    desc: '专业快速低成本定制三维可视化编辑器，提供企业级解决方案',
    links: [
      { icon: 'github', link: 'https://github.com/z2586300277' },
      { icon: 'twitter', link: 'https://z2586300277.github.io' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/20716499?v=4',
    name: 'JWL',
    title: 'Cesium 开发专家',
    desc: '人生如逆旅，我亦是行人',
    links: [
      { icon: 'github', link: 'https://github.com/jiawanlong' },
      { icon: 'twitter', link: 'https://jiawanlong.github.io/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/22094990?v=4',
    name: '攻城师不浪',
    title: '前端工程师',
    desc: '砥砺前行，fighting',
    links: [
      { icon: 'github', link: 'https://github.com/tingyuxuan2302' },
    ],
  },
  {
    avatar: 'https://z2586300277.github.io/three-cesium-examples/files/author/FFMMCC.jpg',
    name: 'CoderFMC',
    title: '三维开发工程师',
    desc: '专注于创意三维交互',
    links: [
      { icon: 'github', link: 'https://github.com/CoderFMC' },
    ],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/172246978?v=4',
    name: 'code like',
    title: 'Three.js 开发工程师',
    desc: '创新动效实现专家',
    links: [
      { icon: 'github', link: 'https://github.com/g2657' },
    ],
  }
]
</script>

<div class="team-page-container">

  <div class="team-section">
    <h2>团队成员 <span class="subtitle">Contributors</span></h2>
    <div class="members-container">
      <VPTeamMembers size="medium" :members="contributors" />
    </div>
  </div>
  
  <div class="join-section">
    <div class="join-content">
      <h2>加入我们</h2>
      <p>Open Three 是一个开放的技术社区，我们欢迎各类对三维可视化感兴趣的开发者加入。</p>
      <p>无论你是经验丰富的专家，还是刚刚入门的新手，都可以在这里找到属于自己的位置。</p>
      <div class="button-group">
        <a href="https://github.com/OpenThree" class="primary-button" target="_blank">
          <svg class="icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z"/>
          </svg>
          GitHub 组织
        </a>
        <a href="https://github.com/OpenThree" class="secondary-button">
          <svg class="icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          联系我们
        </a>
      </div>
    </div>
  </div>
</div>

<style>
:root {
  --team-primary: #3eaf7c;
  --team-primary-dark: #369a6e;
  --team-gradient-start: rgba(62, 175, 124, 0.8);
  --team-gradient-end: rgba(25, 119, 242, 0.8);
}

.dark:root {
  --team-card-bg: rgba(36, 36, 36, 0.7);
  --team-section-bg: rgba(30, 30, 30, 0.5);
}

.team-page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
}

.team-header {
  position: relative;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;
  border-radius: 12px;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--team-gradient-start), var(--team-gradient-end));
  opacity: 0.1;
  z-index: -1;
}

.header-content {
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(to right, var(--team-primary), #1977f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lead-text {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.team-section {
  margin-bottom: 60px;
  padding: 30px 20px;
  border-radius: 12px;
  background-color: var(--team-section-bg, rgba(247, 247, 247, 0.5));
}

.team-section h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
}

.subtitle {
  font-size: 16px;
  opacity: 0.6;
  margin-left: 12px;
  font-weight: 400;
}

.section-desc {
  color: var(--vp-c-text-2);
  margin-bottom: 30px;
  font-size: 16px;
  max-width: 800px;
}

.members-container :deep(.vp-member-item) {
  padding: 0;
}

.members-container :deep(.vp-member-info) {
  background-color: var(--team-card-bg, white);
  border-radius: 10px;
  padding: 24px;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.members-container :deep(.vp-member-info:hover) {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.members-container :deep(.vp-member-avatar) {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  transition: transform 0.5s ease;
  border: 3px solid var(--team-primary);
}

.members-container :deep(.vp-member-info:hover .vp-member-avatar) {
  transform: scale(1.05);
}

.members-container :deep(.vp-member-name) {
  font-size: 20px;
  font-weight: 600;
  margin: 16px 0 8px;
}

.members-container :deep(.vp-member-title) {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.members-container :deep(.vp-member-desc) {
  margin-top: 10px;
  font-size: 14px;
  color: var(--vp-c-text-3);
  flex-grow: 1;
}

.members-container :deep(.vp-member-links) {
  margin-top: 16px;
}

.join-section {
  background: linear-gradient(135deg, rgba(62, 175, 124, 0.1), rgba(25, 119, 242, 0.1));
  border-radius: 12px;
  padding: 50px 30px;
  text-align: center;
  margin-top: 60px;
}

.join-content {
  max-width: 700px;
  margin: 0 auto;
}

.join-section h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: var(--team-primary);
}

.join-section p {
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.6;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;
}

.primary-button, .secondary-button {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
  text-decoration: none;
}

.primary-button {
  background-color: var(--team-primary);
  color: white;
}

.primary-button:hover {
  background-color: var(--team-primary-dark);
  text-decoration: none;
  color: white;
}

.secondary-button {
  border: 1px solid var(--team-primary);
  color: var(--team-primary);
}

.secondary-button:hover {
  background-color: rgba(62, 175, 124, 0.1);
  text-decoration: none;
}

.icon {
  margin-right: 8px;
}

@media (max-width: 768px) {
  .team-header {
    padding: 40px 16px;
  }
  
  h1 {
    font-size: 32px;
  }
  
  .lead-text {
    font-size: 16px;
  }
  
  .team-section {
    padding: 20px 16px;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .members-container :deep(.vp-member-avatar) {
    width: 100px;
    height: 100px;
  }
}
</style>
