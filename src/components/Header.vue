<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <span class="logo-icon">🦞</span>
        <span class="logo-text">OpenClaw Skill</span>
      </div>
      <nav class="nav">
        <router-link to="/" class="nav-link" :class="{ active: currentRoute === '/' }">首页</router-link>
        <router-link to="/skill-store" class="nav-link" :class="{ active: currentRoute === '/skill-store' }">Skill商店</router-link>
        <router-link to="/safe-tools" class="nav-link" :class="{ active: currentRoute === '/safe-tools' }">安全工具</router-link>
        <a href="https://www.molili.com.cn/" target="_blank" class="nav-link">Molili龙虾</a>
        <a href="https://apkclaw.ai/" target="_blank" class="nav-link">ApkClaw</a>
      </nav>
      <div class="search-box">
        <el-input 
          v-model="searchKeyword" 
          placeholder="搜索话题..." 
          class="search-input"
          @keyup.enter="handleSearch"
        />
        <el-button @click="handleSearch" icon="Search" circle />
      </div>
      <div class="user-actions">
        <el-button type="primary" @click="showLoginModal = true">登录</el-button>
        <el-button @click="showSignupModal = true">注册</el-button>
      </div>
    </div>
    
    <el-dialog title="登录" v-model="showLoginModal" width="400px">
      <el-form :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="loginForm.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    
    <el-dialog title="注册" v-model="showSignupModal" width="400px">
      <el-form :model="signupForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="signupForm.username" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="signupForm.email" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="signupForm.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSignup">注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.path)

const searchKeyword = ref('')
const showLoginModal = ref(false)
const showSignupModal = ref(false)

const loginForm = ref({
  username: '',
  password: ''
})

const signupForm = ref({
  username: '',
  email: '',
  password: ''
})

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    alert(`搜索: ${searchKeyword.value}`)
  }
}

const handleLogin = () => {
  alert('登录功能演示')
  showLoginModal.value = false
}

const handleSignup = () => {
  alert('注册功能演示')
  showSignupModal.value = false
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-input {
  width: 250px;
}

.user-actions {
  display: flex;
  gap: 10px;
}
</style>
