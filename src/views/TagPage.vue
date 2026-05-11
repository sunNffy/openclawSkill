<template>
  <div class="tag-page">
    <div class="tag-header">
      <h1 class="tag-title">#{{ currentTag?.name }}</h1>
      <p class="tag-desc">共有 {{ currentTag?.topicCount }} 个话题使用此标签</p>
    </div>
    
    <div class="related-tags">
      <h3>相关标签</h3>
      <div class="tags-list">
        <router-link 
          v-for="tag in relatedTags" 
          :key="tag.id" 
          :to="`/tag/${tag.id}`" 
          class="tag-item"
        >
          {{ tag.name }}
          <span class="count">{{ tag.topicCount }}</span>
        </router-link>
      </div>
    </div>
    
    <div class="topics-section">
      <h3>相关话题</h3>
      <div class="topics-list">
        <div v-for="topic in tagTopics" :key="topic.id" class="topic-card">
          <router-link :to="`/topic/${topic.id}`" class="topic-title">{{ topic.title }}</router-link>
          <div class="topic-meta">
            <span class="author">{{ topic.author }}</span>
            <span class="separator">·</span>
            <span class="time">{{ topic.lastActive }}</span>
            <span class="separator">·</span>
            <router-link :to="`/category/${topic.category.id}`" class="category">
              {{ topic.category.name }}
            </router-link>
          </div>
          <div class="topic-stats">
            <span class="stat">回复 {{ topic.replies }}</span>
            <span class="stat">浏览 {{ topic.views }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { tags, topics } from '../data/mockData'

const route = useRoute()
const tagId = computed(() => Number(route.params.id))

const currentTag = computed(() => tags.find(t => t.id === tagId.value))

const tagTopics = computed(() => {
  return topics.filter(t => t.tags.some(tag => tag.id === tagId.value))
})

const relatedTags = computed(() => {
  return tags.filter(t => t.id !== tagId.value).slice(0, 8)
})
</script>

<style scoped>
.tag-page {
  width: 100%;
}

.tag-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
}

.tag-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
}

.tag-desc {
  font-size: 16px;
  opacity: 0.9;
}

.related-tags {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.related-tags h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #f5f7fa;
  color: #666;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
}

.tag-item:hover {
  background: #667eea;
  color: white;
}

.count {
  font-size: 12px;
  opacity: 0.7;
}

.topics-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.topics-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.topics-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.topic-card {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.topic-card:last-child {
  border-bottom: none;
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
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.author, .time {
  font-size: 13px;
  color: #999;
}

.separator {
  color: #ddd;
}

.category {
  font-size: 13px;
  color: #667eea;
  text-decoration: none;
}

.category:hover {
  text-decoration: underline;
}

.topic-stats {
  display: flex;
  gap: 16px;
}

.stat {
  font-size: 13px;
  color: #999;
}
</style>
