export interface Topic {
  id: number
  title: string
  author: string
  replies: number
  views: number
  category: {
    id: number
    name: string
    icon: string
  }
  tags: Array<{
    id: number
    name: string
  }>
  lastActive: string
}

export interface Category {
  id: number
  name: string
  icon: string
  description: string
  topicCount: number
}

export interface Tag {
  id: number
  name: string
  topicCount: number
}

export interface Skill {
  id: number
  name: string
  description: string
  author: string
  downloads: number
  rating: number
  category: string
}
