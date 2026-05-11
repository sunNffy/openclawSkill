<template>
  <div class="safe-tools">
    <div class="tools-header">
      <h1 class="tools-title">🛡️ 安全工具</h1>
      <p class="tools-desc">保护您的OpenClaw使用安全，提供全方位的安全防护工具</p>
    </div>
    
    <div class="tools-overview">
      <div class="overview-card">
        <div class="overview-icon">🔐</div>
        <div class="overview-info">
          <h3>安全检测</h3>
          <p>检测您的OpenClaw配置是否存在安全风险</p>
        </div>
        <el-button type="primary" @click="runSecurityCheck">立即检测</el-button>
      </div>
      
      <div class="overview-card">
        <div class="overview-icon">🛡️</div>
        <div class="overview-info">
          <h3>隐私保护</h3>
          <p>保护您的数据隐私，防止敏感信息泄露</p>
        </div>
        <el-button type="primary" @click="openPrivacySettings">设置</el-button>
      </div>
      
      <div class="overview-card">
        <div class="overview-icon">🔑</div>
        <div class="overview-info">
          <h3>密钥管理</h3>
          <p>安全管理您的API密钥和敏感凭证</p>
        </div>
        <el-button type="primary" @click="openKeyManager">管理</el-button>
      </div>
    </div>
    
    <div class="tools-section">
      <h2>安全工具列表</h2>
      <div class="tools-grid">
        <div v-for="tool in tools" :key="tool.id" class="tool-card">
          <div class="tool-icon">{{ tool.icon }}</div>
          <h3 class="tool-name">{{ tool.name }}</h3>
          <p class="tool-desc">{{ tool.description }}</p>
          <div class="tool-tags">
            <span v-for="tag in tool.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <el-button @click="useTool(tool)" class="tool-btn">
            {{ tool.action }}
          </el-button>
        </div>
      </div>
    </div>
    
    <div class="security-tips">
      <h2>安全小贴士</h2>
      <div class="tips-list">
        <div v-for="(tip, index) in tips" :key="index" class="tip-item">
          <span class="tip-number">{{ index + 1 }}</span>
          <div class="tip-content">
            <h4>{{ tip.title }}</h4>
            <p>{{ tip.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Tool {
  id: number
  icon: string
  name: string
  description: string
  tags: string[]
  action: string
}

interface Tip {
  title: string
  desc: string
}

const tools = ref<Tool[]>([
  {
    id: 1,
    icon: '🔍',
    name: '安全扫描器',
    description: '全面扫描您的OpenClaw配置，检测潜在安全风险',
    tags: ['扫描', '安全', '检测'],
    action: '开始扫描'
  },
  {
    id: 2,
    icon: '🚫',
    name: '恶意插件检测',
    description: '检测并隔离可能存在安全风险的插件',
    tags: ['检测', '插件', '防护'],
    action: '检测插件'
  },
  {
    id: 3,
    icon: '🔒',
    name: '加密工具',
    description: '加密您的敏感数据，保护隐私安全',
    tags: ['加密', '隐私', '数据'],
    action: '打开加密'
  },
  {
    id: 4,
    icon: '📝',
    name: '日志审计',
    description: '查看和审计OpenClaw的操作日志',
    tags: ['日志', '审计', '监控'],
    action: '查看日志'
  },
  {
    id: 5,
    icon: '🔄',
    name: '安全更新',
    description: '检查并更新到最新安全版本',
    tags: ['更新', '版本', '安全'],
    action: '检查更新'
  },
  {
    id: 6,
    icon: '📊',
    name: '安全报告',
    description: '生成详细的安全状态报告',
    tags: ['报告', '分析', '状态'],
    action: '生成报告'
  }
])

const tips = ref<Tip[]>([
  {
    title: '定期检查安全设置',
    desc: '建议每周至少检查一次安全设置，确保所有配置都是最新的。'
  },
  {
    title: '使用强密码',
    desc: '为您的OpenClaw账户设置强密码，并定期更换。'
  },
  {
    title: '谨慎安装插件',
    desc: '只从可信来源安装插件，避免安装未知来源的技能。'
  },
  {
    title: '启用双因素认证',
    desc: '如果支持，请启用双因素认证以增强账户安全性。'
  }
])

const runSecurityCheck = () => {
  alert('正在进行安全检测...\n\n检测完成！\n您的OpenClaw配置安全。')
}

const openPrivacySettings = () => {
  alert('打开隐私设置页面')
}

const openKeyManager = () => {
  alert('打开密钥管理器')
}

const useTool = (tool: Tool) => {
  alert(`正在使用: ${tool.name}\n\n${tool.description}`)
}
</script>

<style scoped>
.safe-tools {
  width: 100%;
}

.tools-header {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 24px;
  text-align: center;
  color: white;
}

.tools-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
}

.tools-desc {
  font-size: 16px;
  opacity: 0.9;
}

.tools-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.overview-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.overview-icon {
  font-size: 36px;
}

.overview-info {
  flex: 1;
}

.overview-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.overview-info p {
  font-size: 14px;
  color: #666;
}

.tools-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.tools-section h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.tool-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.tool-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.tool-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.tool-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 12px;
}

.tool-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tag {
  padding: 3px 10px;
  background: #e8eaed;
  color: #666;
  border-radius: 12px;
  font-size: 12px;
}

.tool-btn {
  width: 100%;
}

.security-tips {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.security-tips h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.tips-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.tip-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
}

.tip-number {
  width: 24px;
  height: 24px;
  background: #4facfe;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.tip-content h4 {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.tip-content p {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}
</style>
