<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3 class="section-title">社区导航</h3>
      <ul class="nav-list">
        <li v-for="cat in categories" :key="cat.id">
          <router-link :to="`/category/${cat.id}`" class="nav-item">
            <span class="nav-icon">{{ cat.icon }}</span>
            <span class="nav-name">{{ cat.name }}</span>
            <span class="nav-count">{{ cat.topicCount }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3 class="section-title">热门标签</h3>
      <div class="tag-list">
        <router-link 
          v-for="tag in hotTags" 
          :key="tag.id" 
          :to="`/tag/${tag.id}`" 
          class="tag-item"
        >
          {{ tag.name }}
          <span class="tag-count">{{ tag.topicCount }}</span>
        </router-link>
      </div>
    </div>
    
    <div class="sidebar-section">
      <h3 class="section-title">快捷链接</h3>
      <ul class="quick-links">
        <li>
          <a href="https://hub.cocoloop.cn/" target="_blank" class="quick-link">
            <span class="link-icon">🛒</span>
            Skill商店
          </a>
        </li>
        <li>
          <a href="https://hub.cocoloop.cn/safe" target="_blank" class="quick-link">
            <span class="link-icon">🛡️</span>
            安全工具
          </a>
        </li>
        <li>
          <a href="https://www.molili.com.cn/" target="_blank" class="quick-link">
            <span class="link-icon">🦐</span>
            Molili龙虾
          </a>
        </li>
        <li>
          <a href="https://apkclaw.ai/" target="_blank" class="quick-link">
            <span class="link-icon">📱</span>
            ApkClaw
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { categories, tags } from '../data/mockData'

const hotTags = computed(() => tags.slice(0, 6))
</script>

<style scoped>
.sidebar {
  width: 240px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  margin-right: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.sidebar-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.nav-list {
  list-style: none;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #666;
  transition: all 0.3s;
}

.nav-item:hover {
  background: #f5f5f5;
  color: #667eea;
}

.nav-icon {
  font-size: 18px;
  margin-right: 10px;
}

.nav-name {
  flex: 1;
  font-size: 14px;
}

.nav-count {
  font-size: 12px;
  color: #999;
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 10px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f5f7fa;
  border-radius: 16px;
  font-size: 12px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s;
}

.tag-item:hover {
  background: #667eea;
  color: white;
}

.tag-item:hover .tag-count {
  background: rgba(255, 255, 255, 0.2);
}

.tag-count {
  font-size: 11px;
  background: #e8eaed;
  padding: 1px 6px;
  border-radius: 10px;
}

.quick-links {
  list-style: none;
  padding: 0;
}

.quick-link {
  display: flex;
  align-items: center;
  padding: 10px 0;
  text-decoration: none;
  color: #666;
  font-size: 14px;
  transition: color 0.3s;
}

.quick-link:hover {
  color: #667eea;
}

.link-icon {
  margin-right: 10px;
  font-size: 16px;
}
</style>
