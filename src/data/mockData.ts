import type { Topic, Category, Tag, Skill } from '../types'

export const categories: Category[] = [
  { id: 12, name: '综合交流大区', icon: '🐋', description: '综合讨论区', topicCount: 156 },
  { id: 4, name: '技术交流', icon: '🎐', description: '技术讨论区', topicCount: 89 },
  { id: 2, name: 'OpenClaw交流', icon: '🦞', description: 'OpenClaw技能讨论', topicCount: 234 }
]

export const tags: Tag[] = [
  { id: 1, name: '经验分享', topicCount: 45 },
  { id: 2527, name: 'AI资讯', topicCount: 123 },
  { id: 2540, name: '避坑吐槽', topicCount: 32 },
  { id: 2537, name: '求助讨论', topicCount: 89 },
  { id: 2541, name: '闲聊吹水', topicCount: 67 },
  { id: 2535, name: '使用心得', topicCount: 54 },
  { id: 355, name: 'claude code怎么用', topicCount: 23 },
  { id: 206, name: 'claude code教程', topicCount: 18 },
  { id: 338, name: 'openclaw skill推荐', topicCount: 42 },
  { id: 339, name: 'openclaw技能怎么安装', topicCount: 31 }
]

export const topics: Topic[] = [
  {
    id: 5488,
    title: 'cpa反代也能生图，api-image一键调用 gpt image 2',
    author: '用户A',
    replies: 0,
    views: 120,
    category: { id: 4, name: '技术交流', icon: '🎐' },
    tags: [{ id: 1, name: '经验分享' }],
    lastActive: '1 分钟'
  },
  {
    id: 5443,
    title: '教育科技的门槛，一夜之间没了',
    author: '用户B',
    replies: 5,
    views: 256,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 2527, name: 'AI资讯' }],
    lastActive: '2 分钟'
  },
  {
    id: 5486,
    title: 'cursor最近用Claude Code 4.6 Opus感觉变笨了，是掺水了吗',
    author: '用户C',
    replies: 1,
    views: 89,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 2540, name: '避坑吐槽' }],
    lastActive: '2 分钟'
  },
  {
    id: 4309,
    title: 'GPT官网首页现在长啥样了？听说GPT4o下架了，有点懵',
    author: '用户D',
    replies: 15,
    views: 567,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 2527, name: 'AI资讯' }],
    lastActive: '2 分钟'
  },
  {
    id: 5478,
    title: '问下过了kyc能解除gpt-image-2的限制不',
    author: '用户E',
    replies: 2,
    views: 145,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 2537, name: '求助讨论' }],
    lastActive: '2 分钟'
  },
  {
    id: 5452,
    title: 'claude code桌面版能不登录直接用吗',
    author: '用户F',
    replies: 6,
    views: 312,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 2541, name: '闲聊吹水' }],
    lastActive: '2 分钟'
  },
  {
    id: 5483,
    title: '怎么把 gpt 免费版网页聊天给弄成 api?',
    author: '用户G',
    replies: 1,
    views: 98,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 2537, name: '求助讨论' }],
    lastActive: '4 分钟'
  },
  {
    id: 5471,
    title: 'vibe coding搞大项目容易乱，有啥好法子？',
    author: '用户H',
    replies: 2,
    views: 167,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 2535, name: '使用心得' }],
    lastActive: '4 分钟'
  },
  {
    id: 4070,
    title: '说句冒犯的话， DeepSeek V4 Pro 让我有点破防！',
    author: '用户I',
    replies: 17,
    views: 890,
    category: { id: 12, name: '综合交流大区', icon: '🐋' },
    tags: [{ id: 355, name: 'claude code怎么用' }, { id: 206, name: 'claude code教程' }],
    lastActive: '6 分钟'
  },
  {
    id: 3034,
    title: 'OpenClaw技能不用手动搜索怎么获取？OpenClaw全网自动搜技能安装方法分享',
    author: '用户J',
    replies: 5,
    views: 445,
    category: { id: 2, name: 'OpenClaw交流', icon: '🦞' },
    tags: [{ id: 338, name: 'openclaw skill推荐' }, { id: 339, name: 'openclaw技能怎么安装' }],
    lastActive: '36 分钟'
  }
]

export const skills: Skill[] = [
  { id: 1, name: 'GPT-4 智能助手', description: '强大的GPT-4驱动智能助手，支持多轮对话', author: '开发者A', downloads: 12580, rating: 4.9, category: 'AI助手' },
  { id: 2, name: '代码生成器', description: '根据自然语言描述自动生成代码', author: '开发者B', downloads: 8920, rating: 4.7, category: '开发工具' },
  { id: 3, name: '图片生成器', description: '基于GPT Image API的图片生成工具', author: '开发者C', downloads: 6750, rating: 4.8, category: '创意工具' },
  { id: 4, name: '文档翻译', description: '支持多种语言的文档翻译工具', author: '开发者D', downloads: 5430, rating: 4.6, category: '翻译工具' },
  { id: 5, name: '数据可视化', description: '将数据转换为精美图表', author: '开发者E', downloads: 4120, rating: 4.5, category: '数据工具' },
  { id: 6, name: '代码审查', description: '自动审查代码质量和安全问题', author: '开发者F', downloads: 3890, rating: 4.7, category: '开发工具' }
]
