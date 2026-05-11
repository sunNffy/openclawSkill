<template>
  <div class="skill-store">
    <div class="store-header">
      <h1 class="store-title">🛒 Skill商店</h1>
      <p class="store-desc">发现和下载各种强大的OpenClaw技能插件</p>
    </div>
    
    <div class="filter-bar">
      <div class="category-filter">
        <el-button 
          v-for="cat in categories" 
          :key="cat"
          @click="currentCategory = cat"
          :class="{ active: currentCategory === cat }"
        >
          {{ cat }}
        </el-button>
      </div>
      <div class="search-box">
        <el-input 
          v-model="searchKeyword" 
          placeholder="搜索技能..." 
          class="search-input"
        />
      </div>
    </div>
    
    <div class="skills-grid">
      <div v-for="skill in filteredSkills" :key="skill.id" class="skill-card">
        <div class="skill-icon">⚡</div>
        <h3 class="skill-name">{{ skill.name }}</h3>
        <p class="skill-desc">{{ skill.description }}</p>
        <div class="skill-meta">
          <span class="author">{{ skill.author }}</span>
          <span class="category">{{ skill.category }}</span>
        </div>
        <div class="skill-stats">
          <div class="stat">
            <span class="icon">⬇️</span>
            <span>{{ formatNumber(skill.downloads) }}</span>
          </div>
          <div class="stat rating">
            <span class="icon">⭐</span>
            <span>{{ skill.rating }}</span>
          </div>
        </div>
        <el-button type="primary" class="install-btn" @click="installSkill(skill)">
          安装
        </el-button>
      </div>
    </div>
    
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[6, 12, 24]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="filteredSkills.length"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { skills } from '../data/mockData'
import type { Skill } from '../types'

const categories = ['全部', 'AI助手', '开发工具', '创意工具', '翻译工具', '数据工具']
const currentCategory = ref('全部')
const searchKeyword = ref('')
const currentPage = ref(1)
const pageSize = ref(6)

const filteredSkills = computed(() => {
  return skills.filter(skill => {
    const matchCategory = currentCategory.value === '全部' || skill.category === currentCategory.value
    const matchSearch = skill.name.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
                       skill.description.toLowerCase().includes(searchKeyword.value.toLowerCase())
    return matchCategory && matchSearch
  })
})

const formatNumber = (num: number) => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + 'w'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

const installSkill = (skill: Skill) => {
  alert(`正在安装: ${skill.name}\n\n描述: ${skill.description}\n作者: ${skill.author}`)
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
</script>

<style scoped>
.skill-store {
  width: 100%;
}

.store-header {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 24px;
  text-align: center;
  color: white;
}

.store-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
}

.store-desc {
  font-size: 16px;
  opacity: 0.9;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.category-filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.category-filter .el-button {
  padding: 8px 16px;
}

.category-filter .el-button.active {
  background: #f5576c;
  color: white;
  border-color: #f5576c;
}

.search-box {
  min-width: 250px;
}

.search-input {
  width: 100%;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.skill-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.skill-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.skill-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
  height: 48px;
  overflow: hidden;
}

.skill-meta {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
}

.author, .category {
  font-size: 12px;
  color: #999;
  background: #f5f5f5;
  padding: 4px 10px;
  border-radius: 12px;
}

.skill-stats {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #666;
}

.stat.rating {
  color: #f5a623;
  font-weight: 600;
}

.icon {
  font-size: 16px;
}

.install-btn {
  width: 100%;
  padding: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
}
</style>
