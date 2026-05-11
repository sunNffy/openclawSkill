<template>
  <div class="topic-detail">
    <div v-if="topic" class="topic-header">
      <h1 class="topic-title">{{ topic.title }}</h1>
      <div class="topic-info">
        <span class="author">作者: {{ topic.author }}</span>
        <span class="separator">|</span>
        <router-link :to="`/category/${topic.category.id}`" class="category">
          {{ topic.category.icon }} {{ topic.category.name }}
        </router-link>
        <span class="separator">|</span>
        <span class="views">浏览: {{ topic.views }}</span>
        <span class="separator">|</span>
        <span class="replies">回复: {{ topic.replies }}</span>
      </div>
      <div class="topic-tags">
        <router-link 
          v-for="tag in topic.tags" 
          :key="tag.id" 
          :to="`/tag/${tag.id}`" 
          class="tag"
        >
          #{{ tag.name }}
        </router-link>
      </div>
    </div>
    
    <div class="topic-content">
      <div class="content-body">
        <p>这是话题的详细内容区域。用户可以在这里阅读完整的帖子内容。</p>
        <p>帖子内容可能包含代码示例、图片、链接和其他丰富的格式。</p>
        <pre><code>// 代码示例
function hello() {
  console.log('Hello OpenClaw!');
}
</code></pre>
      </div>
    </div>
    
    <div class="reply-section">
      <h3 class="reply-title">评论 ({{ topic?.replies || 0 }})</h3>
      
      <div class="reply-list">
        <div v-for="(reply, index) in replies" :key="index" class="reply-item">
          <div class="reply-header">
            <span class="reply-author">{{ reply.author }}</span>
            <span class="reply-time">{{ reply.time }}</span>
          </div>
          <div class="reply-content">{{ reply.content }}</div>
          <div class="reply-actions">
            <button class="action-btn">点赞</button>
            <button class="action-btn">回复</button>
          </div>
        </div>
      </div>
      
      <div class="reply-form">
        <h4>发表评论</h4>
        <el-form :model="replyForm">
          <el-form-item>
            <el-textarea 
              v-model="replyForm.content" 
              rows="4" 
              placeholder="写下你的评论..."
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitReply">发表评论</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { topics } from '../data/mockData'

const route = useRoute()
const topicId = computed(() => Number(route.params.id))

const topic = computed(() => topics.find(t => t.id === topicId.value))

const replies = ref([
  { author: '用户K', time: '5分钟前', content: '感谢分享，很有帮助！' },
  { author: '用户L', time: '10分钟前', content: '这个方法确实有效，我试过了。' },
  { author: '用户M', time: '15分钟前', content: '请问还有更多详细教程吗？' }
])

const replyForm = ref({
  content: ''
})

const submitReply = () => {
  if (replyForm.value.content.trim()) {
    replies.value.push({
      author: '当前用户',
      time: '刚刚',
      content: replyForm.value.content
    })
    replyForm.value.content = ''
    if (topic.value) {
      topic.value.replies++
    }
  }
}
</script>

<style scoped>
.topic-detail {
  width: 100%;
}

.topic-header {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.topic-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
}

.topic-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.author, .views, .replies {
  font-size: 14px;
  color: #666;
}

.separator {
  color: #ddd;
}

.category {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #667eea;
  text-decoration: none;
}

.category:hover {
  text-decoration: underline;
}

.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  background: #f5f7fa;
  color: #666;
  border-radius: 16px;
  font-size: 12px;
  text-decoration: none;
}

.tag:hover {
  background: #667eea;
  color: white;
}

.topic-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.content-body {
  line-height: 1.8;
  color: #333;
}

.content-body pre {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
}

.content-body code {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
}

.reply-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.reply-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.reply-list {
  margin-bottom: 24px;
}

.reply-item {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.reply-item:last-child {
  border-bottom: none;
}

.reply-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.reply-author {
  font-weight: 600;
  color: #333;
}

.reply-time {
  font-size: 12px;
  color: #999;
}

.reply-content {
  color: #666;
  line-height: 1.6;
}

.reply-actions {
  margin-top: 12px;
  display: flex;
  gap: 16px;
}

.action-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}

.action-btn:hover {
  color: #667eea;
}

.reply-form {
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.reply-form h4 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
}
</style>
