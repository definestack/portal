<script setup lang="ts">
import { blogPostsData } from '@/data/mockData'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="blog-section">
    <div class="container">
      <div class="header-row">
        <div class="header-left">
          <span class="section-tag">From The Blog</span>
          <h2 class="section-title">Insights on architecture, engineering and products</h2>
        </div>
        <div class="header-right">
          <BaseButton to="#" variant="text">View all posts</BaseButton>
        </div>
      </div>

      <div class="blog-grid">
        <BaseCard 
          v-for="post in blogPostsData" 
          :key="post.id"
          class="blog-card"
          padding="md"
        >
          <div class="blog-card-layout">
            <div :class="['blog-icon-wrapper', `icon-${post.iconType}`]">
              <!-- Notes/Notebook Icon -->
              <svg v-if="post.iconType === 'notes'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>

              <!-- Database Icon -->
              <svg v-else-if="post.iconType === 'database'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
              </svg>

              <!-- Shield-Clock Icon -->
              <svg v-else-if="post.iconType === 'shield-clock'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <circle cx="12" cy="11" r="4" fill="white" fill-opacity="0.2"></circle>
                <polyline points="12 9 12 11 13.5 12"></polyline>
              </svg>

              <!-- Nodes/Network Icon -->
              <svg v-else-if="post.iconType === 'nodes'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <circle cx="19" cy="5" r="3"></circle>
                <circle cx="5" cy="19" r="3"></circle>
                <circle cx="19" cy="19" r="3"></circle>
                <circle cx="5" cy="5" r="3"></circle>
                <line x1="17" y1="7" x2="14" y2="10"></line>
                <line x1="7" y1="17" x2="10" y2="14"></line>
                <line x1="17" y1="17" x2="14" y2="14"></line>
                <line x1="7" y1="7" x2="10" y2="10"></line>
              </svg>
            </div>

            <div class="blog-info">
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-desc">{{ post.description }}</p>
              
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="meta-dot">•</span>
                <span class="blog-read-time">{{ post.readTime }}</span>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-section {
  padding: var(--space-3xl) 0;
  background-color: var(--color-white);
}

.header-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-3xl);
  gap: var(--space-md);
}

@media (min-width: 768px) {
  .header-row {
    flex-direction: row;
    align-items: flex-end;
  }
}

.section-title {
  margin-bottom: 0;
  max-width: 650px;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 640px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.blog-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  transition: transform var(--transition-normal);
}

.blog-card:hover .blog-icon-wrapper {
  transform: scale(1.1);
}

/* Icon specific theme color sets */
.icon-notes {
  background-color: #fef3c7;
  color: #d97706;
}

.icon-database {
  background-color: #e0f2fe;
  color: #0284c7;
}

.icon-shield-clock {
  background-color: #ffedd5;
  color: var(--color-primary);
}

.icon-nodes {
  background-color: #e2e8f0;
  color: var(--color-dark);
}

.blog-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.blog-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--color-text-heading);
  line-height: 1.4;
}

.blog-card:hover .blog-title {
  color: var(--color-primary);
}

.blog-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: 1.5;
  margin-bottom: var(--space-lg);
  flex-grow: 1;
}

.blog-meta {
  display: flex;
  align-items: center;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin-top: auto;
}

.meta-dot {
  margin: 0 var(--space-xs);
}
</style>
