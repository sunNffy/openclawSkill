import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TopicDetail from '../views/TopicDetail.vue'
import CategoryPage from '../views/CategoryPage.vue'
import TagPage from '../views/TagPage.vue'
import SkillStore from '../views/SkillStore.vue'
import SafeTools from '../views/SafeTools.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/topic/:id', name: 'TopicDetail', component: TopicDetail },
  { path: '/category/:id', name: 'Category', component: CategoryPage },
  { path: '/tag/:id', name: 'Tag', component: TagPage },
  { path: '/skill-store', name: 'SkillStore', component: SkillStore },
  { path: '/safe-tools', name: 'SafeTools', component: SafeTools }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
