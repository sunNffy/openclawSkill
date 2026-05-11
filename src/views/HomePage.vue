<template>
  <div class="home-page">
    <div class="welcome-section">
      <h1 class="welcome-title">欢迎来到 OpenClaw AI社区！</h1>
      <p class="welcome-desc">一起讨论分享养OpenClaw龙虾的乐趣，讨论赚钱、部署、玩法、Skill技能等...</p>
      <div class="quick-access">
        <router-link to="/skill-store" class="access-btn primary">
          <span class="btn-icon">🛒</span>
          Skill商店
        </router-link>
        <router-link to="/safe-tools" class="access-btn">
          <span class="btn-icon">🛡️</span>
          安全工具
        </router-link>
      </div>
    </div>
    
    <div class="topics-section">
      <div class="section-header">
        <h2>所有最新话题</h2>
        <div class="sort-options">
          <el-button 
            v-for="option in sortOptions" 
            :key="option.value"
            @click="currentSort = option.value"
            :class="{ active: currentSort === option.value }"
          >
            {{ option.label }}
          </el-button>
        </div>
      </div>
      
      <div class="topics-table">
        <table>
          <thead>
            <tr>
              <th class="th-topic">话题</th>
              <th class="th-author">发帖人</th>
              <th class="th-replies">回复</th>
              <th class="th-views">浏览量</th>
              <th class="th-activity">活动</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="topic in sortedTopics" :key="topic.id" class="topic-row">
              <td class="topic-cell">
                <router-link :to="`/topic/${topic.id}`" class="topic-title">{{ topic.title }}</router-link>
                <div class="topic-meta">
                  <router-link :to="`/category/${topic.category.id}`" class="category-tag">
                    <span>{{ topic.category.icon }}</span>
                    {{ topic.category.name }}
                  </router-link>
                  <router-link 
                    v-for="tag in topic.tags" 
                    :key="tag.id" 
                    :to="`/tag/${tag.id}`" 
                    class="tag-link"
                  >
                    {{ tag.name }}
                  </router-link>
                </div>
              </td>
              <td class="author-cell">{{ topic.author }}</td>
              <td class="replies-cell">
                <el-badge :value="topic.replies" class="badge" />
              </td>
              <td class="views-cell">{{ topic.views }}</td>
              <td class="activity-cell">{{ topic.lastActive }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="topics.length"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { topics } from '../data/mockData'

const currentSort = ref('latest')
const currentPage = ref(1)
const pageSize = ref(10)

const sortOptions = [
  { label: '最新', value: 'latest' },
  { label: '热门', value: 'hot' },
  { label: '回复', value: 'replies' },
  { label: '浏览', value: 'views' }
]

const sortedTopics = computed(() => {
  const sorted = [...topics]
  switch (currentSort.value) {
    case 'hot':
      return sorted.sort((a, b) => (b.replies + b.views) - (a.replies + a.views))
    case 'replies':
      return sorted.sort((a, b) => b.replies - a.replies)
    case 'views':
      return sorted.sort((a, b) => b.views - a.views)
    default:
      return sorted
  }
})

const handleSizeChange = (val: number) => {
  pageSize.value = val
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
</script>

<style scoped>
.home-page {
  width: 100%;
}

.welcome-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 24px;
  text-align: center;
  color: white;
}

.welcome-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
}

.welcome-desc {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 24px;
}

.quick-access {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.access-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
}

.access-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.access-btn.primary {
  background: white;
  color: #667eea;
}

.access-btn.primary:hover {
  background: rgba(255, 255, 255, 0.9);
}

.btn-icon {
  font-size: 18px;
}

.topics-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.sort-options {
  display: flex;
  gap: 8px;
}

.sort-options .el-button {
  padding: 6px 16px;
  font-size: 14px;
}

.sort-options .el-button.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.topics-table {
  overflow-x: auto;
}

.topics-table table {
  width: 100%;
  border-collapse: collapse;
}

.topics-table th,
.topics-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.topics-table th {
  font-weight: 600;
  color: #666;
  font-size: 14px;
}

.th-topic {
  width: 50%;
}

.th-author,
.th-replies,
.th-views,
.th-activity {
  width: 12.5%;
  text-align: center;
}

.topic-row:hover {
  background: #fafafa;
}

.topic-cell {
  padding: 16px 12px;
}

.topic-title {
  font-size: 15px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
}

.topic-title:hover {
  color: #667eea;
}

.topic-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f0f5ff;
  color: #667eea;
  border-radius: 4px;
  font-size: 12px;
  text-decoration: none;
}

.tag-link {
  padding: 4px 10px;
  background: #f5f7fa;
  color: #666;
  border-radius: 16px;
  font-size: 12px;
  text-decoration: none;
}

.tag-link:hover {
  background: #667eea;
  color: white;
}

.author-cell,
.replies-cell,
.views-cell,
.activity-cell {
  text-align: center;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}

.badge {
  --el-badge-font-size: 12px;
}

.pagination {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
</style>
