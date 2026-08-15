import type { Feature, Product, ProcessStep, BlogPost } from '@/types'

export const featuresData: Feature[] = [
  {
    id: 'product-thinking',
    title: 'Product Thinking',
    description: 'We start with the right questions and define solutions that matter.',
    iconType: 'lightbulb'
  },
  {
    id: 'engineering-excellence',
    title: 'Engineering Excellence',
    description: 'Clean architecture, best practices, and modern technologies.',
    iconType: 'code'
  },
  {
    id: 'purposeful-delivery',
    title: 'Purposeful Delivery',
    description: 'We ship, iterate, and support products that users love.',
    iconType: 'rocket'
  }
]

export const productsData: Product[] = [
  {
    id: 'stickydo',
    title: 'StickyDo',
    description: 'Smart sticky notes with local sync, reminders, categories and rich text support.',
    category: 'Mobile App',
    iconType: 'stickynotes',
    status: 'Active',
    linkText: 'Learn More',
    linkUrl: '#'
  },
  {
    id: 'warranty-tracker',
    title: 'Warranty Tracker',
    description: 'Track warranties, set reminders before expiry and store important documents securely.',
    category: 'Mobile App',
    iconType: 'shield',
    status: 'Coming Soon'
  }
]

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Define',
    description: 'We understand the problem, research and define the right solution.'
  },
  {
    stepNumber: 2,
    title: 'Build',
    description: 'We design and build with clean architecture and test as we progress.'
  },
  {
    stepNumber: 3,
    title: 'Deliver',
    description: 'We deliver quality software, support it and iterate with feedback.'
  }
]

export const blogPostsData: BlogPost[] = [
  {
    id: 'local-first-notes',
    title: 'Building a Local-First Notes App',
    description: 'Key decisions, data models and sync strategies.',
    date: 'May 12, 2024',
    readTime: '6 min read',
    iconType: 'notes'
  },
  {
    id: 'mmkv-vs-sqlite',
    title: 'MMKV vs SQLite for Mobile Apps',
    description: 'Performance, trade-offs and when to use what.',
    date: 'Apr 28, 2024',
    readTime: '7 min read',
    iconType: 'database'
  },
  {
    id: 'lightweight-warranty-tracker',
    title: 'Designing a Lightweight Warranty Tracker',
    description: 'Features, data model and reminder engine.',
    date: 'Apr 14, 2024',
    readTime: '5 min read',
    iconType: 'shield-clock'
  },
  {
    id: 'pragmatic-microservices',
    title: 'Pragmatic Microservices with .NET',
    description: 'Architecture, tooling and deployment patterns.',
    date: 'Mar 30, 2024',
    readTime: '8 min read',
    iconType: 'nodes'
  }
]
