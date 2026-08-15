<script setup lang="ts">
import { productsData } from '@/data/mockData'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="products-section">
    <div class="container">
      <div class="text-center header-wrapper">
        <span class="section-tag">Featured Products</span>
        <h2 class="section-title centered">Products we build and maintain</h2>
      </div>

      <div class="products-grid">
        <BaseCard 
          v-for="product in productsData" 
          :key="product.id"
          class="product-card"
          padding="lg"
        >
          <div class="product-layout">
            <div class="product-visual flex-center">
              <!-- StickyDo Visual -->
              <div v-if="product.iconType === 'stickynotes'" class="icon-3d-sticky">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Bottom note -->
                  <rect x="15" y="25" width="60" height="60" rx="8" fill="#bae6fd" transform="rotate(-6 45 55)" />
                  <!-- Middle note -->
                  <rect x="20" y="20" width="60" height="60" rx="8" fill="#7dd3fc" transform="rotate(-3 50 50)" />
                  <!-- Top note -->
                  <rect x="25" y="15" width="60" height="60" rx="8" fill="#38bdf8" />
                  <!-- Lines on top note -->
                  <line x1="37" y1="30" x2="73" y2="30" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
                  <line x1="37" y1="42" x2="65" y2="42" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
                  <line x1="37" y1="54" x2="73" y2="54" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
                  <!-- Checkmark overlay -->
                  <circle cx="75" cy="70" r="14" fill="#0284c7" />
                  <path d="M69 70L73 74L81 66" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <!-- Warranty Tracker Visual -->
              <div v-else-if="product.iconType === 'shield'" class="icon-3d-shield">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Shield outer -->
                  <path d="M50 15C50 15 80 20 80 45C80 70 50 85 50 85C50 85 20 70 20 45C20 20 50 15 50 15Z" fill="#ffedd5" stroke="#f59e0b" stroke-width="4" stroke-linejoin="round" />
                  <!-- Shield inner -->
                  <path d="M50 23C50 23 72 27 72 45C72 63 50 75 50 75C50 75 28 63 28 45C28 27 50 23 50 23Z" fill="#f59e0b" fill-opacity="0.2" />
                  <!-- Checkmark -->
                  <path d="M38 48L46 56L62 38" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <div class="product-info">
              <div class="meta-row">
                <BaseBadge variant="info">{{ product.category }}</BaseBadge>
                <div v-if="product.status === 'Coming Soon'" class="badge-coming-soon flex-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Coming Soon</span>
                </div>
              </div>

              <h3 class="product-title">{{ product.title }}</h3>
              <p class="product-desc">{{ product.description }}</p>

              <div class="product-action">
                <BaseButton v-if="product.status === 'Active'" :to="product.linkUrl" variant="text">
                  {{ product.linkText }}
                </BaseButton>
                <span v-else class="coming-soon-placeholder">Launching soon on iOS & Android</span>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>

      <div class="view-all-wrapper text-center">
        <BaseButton to="/products" variant="secondary">View all products</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-section {
  padding: var(--space-3xl) 0;
  background-color: var(--color-white);
}

.header-wrapper {
  margin-bottom: var(--space-3xl);
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product-card {
  height: 100%;
}

.product-layout {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  height: 100%;
}

@media (min-width: 576px) {
  .product-layout {
    flex-direction: row;
    align-items: center;
  }
}

.product-visual {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: var(--radius-md);
  background-color: var(--color-light);
  border: 1px solid var(--color-border);
}

.product-info {
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
  gap: 4px;
}

.product-title {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  margin-bottom: var(--space-sm);
  color: var(--color-text-heading);
}

.product-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.product-action {
  margin-top: auto;
}

.coming-soon-placeholder {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
}

.view-all-wrapper {
  margin-top: var(--space-3xl);
}

/* 3D Animations on card hovers */
.product-card:hover .icon-3d-sticky {
  animation: float-notes 1.5s ease-in-out infinite alternate;
}

.product-card:hover .icon-3d-shield {
  animation: pulse-shield 1.5s ease-in-out infinite alternate;
}

@keyframes float-notes {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-8px) rotate(2deg); }
}

@keyframes pulse-shield {
  0% { transform: scale(1); }
  100% { transform: scale(1.08) rotate(3deg); }
}
</style>
