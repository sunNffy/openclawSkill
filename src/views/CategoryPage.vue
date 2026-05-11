<template>
  <div class="category-page">
    <div class="category-header">
      <h1 class="category-title">
        <span class="category-icon">{{ currentCategory?.icon }}</span>
        {{ currentCategory?.name }}
      </h1>
      <p class="category-desc">{{ currentCategory?.description }}</p>
      <div class="category-stats">
        <span class="stat-item">话题数: {{ currentCategory?.topicCount }}</span>
        <span class="stat-item">今日新增: 12</span>
      </div>
    </div>
    
    <div class="category-filter">
      <el-button 
        v-for="filter in filters" 
        :key="filter.value"
        @click="currentFilter = filter.value"
        :class="{ active: currentFilter === filter.value }"
      >
        {{ filter.label }}
      </el-button>
    </div>
    
    <div class="topics-list">
      <div v-for="topic in filteredTopics" :key="topic.id" class="topic-card">
        <div class="topic-main">
          <router-link :to="`/topic/${topic.id}`" class="topic-title">{{ topic.title }}</router-link>
          <div class="topic-meta">
            <span class="author">{{ topic.author }}</span>
            <span class="time">{{ topic.lastActive }}</span>
          </div>
          <div class="topic-tags">
            <router-link 
              v-for="tag in topic.tags" 
              :key="tag.id" 
              :to="`/tag/${tag.id}`" 
              class="tag"
            >
              {{ tag.name }}
            </router-link>
          </div>
        </div>
        <div class="topic-stats">
          <div class="stat replies">
            <span class="stat-value">{{ topic.replies }}</span>
            <span class="stat-label">回复</span>
          </div>
          <div class="stat views">
            <span class="stat-value">{{ topic.views }}</span>
            <span class="stat-label">浏览</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="filteredTopics.length"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { categories, topics } from '../data/mockData'

const route = useRoute()
const categoryId = computed(() => Number(route.params.id))

const currentCategory = computed(() => categories.find(c => c.id === categoryId.value))

const filteredTopics = computed(() => {
  return topics.filter(t => t.category.id === categoryId.value)
})

const filters = [
  { label: '最新', value: 'latest' },
  { label: '热门', value: 'hot' },
  { label: '精华', value: 'essence' }
]

const currentFilter = ref('latest')
const currentPage = ref(1)
const pageSize = ref(10)

const handleSizeChange = (val: number) => {
  pageSize.value = val
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
</script>

<style scoped>
.category-page {
  width: 100%;
}

.category-header {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.category-icon {
  font-size: 32px;
}

.category-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.category-stats {
  display: flex;
  gap: 24px;
}

.stat-item {
  font-size: 14px;
  color: #666;
}

.category-filter {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.category-filter .el-button {
  padding: 8px 20px;
}

.category-filter .el-button.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.topics-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.topic-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.topic-card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.topic-main {
  flex: 1;
}

.topic-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
}

.topic-title:hover {
  color: #667eea;
}

.topic-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
}

.author, .time {
  font-size: 12px;
  color: #999;
}

.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 3px 10px;
  background: #f5f7fa;
  color: #666;
  border-radius: 12px;
  font-size: 12px;
  text-decoration: none;
}

.tag:hover {
  background: #667eea;
  color: white;
}

.topic-stats {
  display: flex;
  gap: 24px;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.stat-label {
  font-size: 12px;
  color: #999;
}

.pagination {
  display: flex;
  justify-content: center;
}
</style>
