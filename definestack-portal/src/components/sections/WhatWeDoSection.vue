<script setup lang="ts">
import { featuresData } from '@/data/mockData'
import BaseCard from '@/components/ui/BaseCard.vue'
</script>

<template>
  <section class="what-we-do">
    <div class="container">
      <div class="text-center">
        <span class="section-tag">What We Do</span>
        <h2 class="section-title centered">We turn ideas into reliable software</h2>
      </div>

      <div class="grid-3 cards-container">
        <BaseCard 
          v-for="feature in featuresData" 
          :key="feature.id"
          class="feature-card"
          padding="lg"
        >
          <div class="icon-wrapper flex-center">
            <!-- Lightbulb Icon -->
            <svg v-if="feature.iconType === 'lightbulb'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <line x1="9" y1="18" x2="15" y2="18"></line>
              <line x1="10" y1="22" x2="14" y2="22"></line>
            </svg>
            
            <!-- Code Icon -->
            <svg v-else-if="feature.iconType === 'code'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            
            <!-- Rocket Icon -->
            <svg v-else-if="feature.iconType === 'rocket'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L16.5 6.5 17.5 7.5 6.5 18.5M22 2l-7.5 7.5M16.5 6.5l1-1M12 12L2 22"></path>
              <path d="M12 2l3.5 3.5L8.5 12 5 8.5z"></path>
            </svg>
          </div>

          <h3 class="card-title">{{ feature.title }}</h3>
          <p class="card-desc">{{ feature.description }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.what-we-do {
  padding: var(--space-3xl) 0;
  background-color: var(--color-light);
}

.section-title {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--space-3xl);
}

.cards-container {
  margin-top: var(--space-xl);
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  background-color: rgba(255, 92, 31, 0.1);
  color: var(--color-primary);
  margin-bottom: var(--space-lg);
  transition: all var(--transition-normal);
}

.feature-card:hover .icon-wrapper {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: rotate(10deg) scale(1.05);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--color-text-heading);
}

.card-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
