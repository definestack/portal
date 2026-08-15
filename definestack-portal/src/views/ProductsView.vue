<script setup lang="ts">
import { productsData } from '@/data/mockData'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <main class="products-view">
    <!-- Header banner -->
    <section class="page-header dot-grid">
      <div class="container text-center">
        <span class="section-tag">Our Products</span>
        <h1 class="page-title">Thoughtfully built software</h1>
        <p class="page-desc centered">
          We design, develop and maintain tools and applications that solve real developer and consumer problems.
        </p>
      </div>
    </section>

    <!-- Products list -->
    <section class="products-list-section">
      <div class="container">
        <div class="products-container">
          <div 
            v-for="product in productsData" 
            :key="product.id"
            class="product-row"
          >
            <BaseCard class="row-card" padding="lg">
              <div class="row-layout">
                <div class="row-visual flex-center">
                  <!-- StickyDo Visual -->
                  <div v-if="product.iconType === 'stickynotes'" class="icon-3d-wrapper">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="25" width="60" height="60" rx="8" fill="#bae6fd" transform="rotate(-6 45 55)" />
                      <rect x="20" y="20" width="60" height="60" rx="8" fill="#7dd3fc" transform="rotate(-3 50 50)" />
                      <rect x="25" y="15" width="60" height="60" rx="8" fill="#38bdf8" />
                      <line x1="37" y1="30" x2="73" y2="30" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
                      <line x1="37" y1="42" x2="65" y2="42" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
                      <line x1="37" y1="54" x2="73" y2="54" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
                      <circle cx="75" cy="70" r="14" fill="#0284c7" />
                      <path d="M69 70L73 74L81 66" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  <!-- Warranty Tracker Visual -->
                  <div v-else-if="product.iconType === 'shield'" class="icon-3d-wrapper">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 15C50 15 80 20 80 45C80 70 50 85 50 85C50 85 20 70 20 45C20 20 50 15 50 15Z" fill="#ffedd5" stroke="#f59e0b" stroke-width="4" stroke-linejoin="round" />
                      <path d="M50 23C50 23 72 27 72 45C72 63 50 75 50 75C50 75 28 63 28 45C28 27 50 23 50 23Z" fill="#f59e0b" fill-opacity="0.2" />
                      <path d="M38 48L46 56L62 38" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>

                <div class="row-info">
                  <div class="meta-row">
                    <BaseBadge variant="info">{{ product.category }}</BaseBadge>
                    <span v-if="product.status === 'Coming Soon'" class="badge-coming-soon">Coming Soon</span>
                  </div>

                  <h2 class="product-title">{{ product.title }}</h2>
                  <p class="product-desc">{{ product.description }}</p>
                  
                  <div class="features-list">
                    <div class="feature-item">
                      <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Designed for high performance and speed</span>
                    </div>
                    <div class="feature-item">
                      <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Privacy-first architecture with local sync</span>
                    </div>
                    <div class="feature-item">
                      <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Polished user experience with interactive states</span>
                    </div>
                  </div>

                  <div class="row-action">
                    <BaseButton v-if="product.status === 'Active'" :to="product.linkUrl" variant="primary">
                      Open Application
                    </BaseButton>
                    <BaseButton v-else to="/contact" variant="secondary">
                      Get Notified
                    </BaseButton>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.products-view {
  background-color: var(--color-white);
  padding-bottom: var(--space-4xl);
}

.page-header {
  padding: var(--space-4xl) 0;
  background-color: var(--color-light);
  border-bottom: 1px solid var(--color-border);
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
  letter-spacing: -0.02em;
}

.page-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  max-width: 600px;
}

.products-list-section {
  padding: var(--space-4xl) 0;
}

.products-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.product-row {
  width: 100%;
}

.row-card {
  width: 100%;
}

.row-layout {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

@media (min-width: 768px) {
  .row-layout {
    flex-direction: row;
    align-items: flex-start;
  }
}

.row-visual {
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  border-radius: var(--radius-lg);
  background-color: var(--color-light);
  border: 1px solid var(--color-border);
  box-shadow: inset 0 2px 8px rgba(15, 23, 42, 0.02);
}

.row-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.badge-coming-soon {
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: #d97706;
  background-color: #fef3c7;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: var(--color-text-heading);
  margin-bottom: var(--space-sm);
}

.product-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-base);
  color: var(--color-text);
}

.check-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}

.row-action {
  margin-top: auto;
}
</style>
