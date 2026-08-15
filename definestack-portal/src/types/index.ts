export interface Product {
  id: string
  title: string
  description: string
  category: string
  iconType: 'stickynotes' | 'shield' | 'generic'
  status?: 'Coming Soon' | 'Active'
  linkText?: string
  linkUrl?: string
}

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  iconType: 'notes' | 'database' | 'shield-clock' | 'nodes'
}

export interface Feature {
  id: string
  title: string
  description: string
  iconType: 'lightbulb' | 'code' | 'rocket'
}

export interface ProcessStep {
  stepNumber: number
  title: string
  description: string
}
