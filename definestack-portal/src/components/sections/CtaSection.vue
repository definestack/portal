<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-banner">
        <div class="cta-content">
          <div class="cta-icon-wrapper flex-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
          <div class="cta-text">
            <h2 class="cta-title">Have an idea worth building?</h2>
            <p class="cta-desc">
              Let's discuss how we can define, build and deliver it together.
            </p>
          </div>
        </div>
        <div class="cta-action">
          <BaseButton to="/contact" variant="primary">Start a conversation</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: var(--space-xl) 0 var(--space-4xl) 0;
  background-color: var(--color-white);
}

.cta-banner {
  background: linear-gradient(135deg, #fff5f1 0%, #fffbf9 100%);
  border: 1px solid rgba(255, 92, 31, 0.15);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl) var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px -5px rgba(255, 92, 31, 0.05);
}

@media (min-width: 992px) {
  .cta-banner {
    flex-direction: row;
    padding: var(--space-2xl) var(--space-3xl);
  }
}

/* Background elements decoration */
.cta-banner::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  border-radius: var(--radius-full);
  background-color: rgba(255, 92, 31, 0.04);
  pointer-events: none;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  text-align: center;
}

@media (min-width: 768px) {
  .cta-content {
    flex-direction: row;
    text-align: left;
    gap: var(--space-xl);
  }
}

.cta-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  background-color: var(--color-white);
  color: var(--color-primary);
  box-shadow: 0 8px 20px rgba(255, 92, 31, 0.1);
  flex-shrink: 0;
  transition: all var(--transition-normal);
}

.cta-banner:hover .cta-icon-wrapper {
  transform: rotate(-10deg) scale(1.05);
  background-color: var(--color-primary);
  color: var(--color-white);
}

.cta-title {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-text-heading);
  margin-bottom: 4px;
}

.cta-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  font-weight: 500;
}

.cta-action {
  flex-shrink: 0;
}
</style>
