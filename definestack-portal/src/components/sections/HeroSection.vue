<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="hero dot-grid">
    <div class="container hero-container">
      <div class="hero-content">
        <span class="section-tag">Define • Build • Deliver</span>
        <h1 class="hero-title">
          We <span class="highlight orange">define</span> ideas.<br />
          We <span class="highlight yellow">build</span> products.<br />
          We <span class="highlight dark">deliver</span> value.
        </h1>
        <p class="hero-desc">
          DefineStack builds thoughtful software products and tools that solve real problems and create lasting impact.
        </p>
        <div class="hero-actions">
          <BaseButton to="/products" variant="primary">Explore Products</BaseButton>
          <BaseButton to="/about" variant="secondary">Learn More</BaseButton>
        </div>
      </div>

      <div class="hero-graphic">
        <!-- Text graphic from the right part of Define Stack.png -->
        <div class="logo-text-graphic">
          <h1 class="logo-text-main">Define<span class="text-orange">Stack</span></h1>
          <div class="logo-text-sub">
            DEFINE <span class="dot-orange">•</span> BUILD <span class="dot-orange">•</span> DELIVER
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--space-4xl) 0;
  overflow: hidden;
  background-color: var(--color-white);
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1.1fr 1.1fr;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-title {
  font-size: var(--font-size-4xl);
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  font-weight: 800;
  letter-spacing: -0.03em;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: var(--font-size-6xl);
  }
}

.highlight {
  position: relative;
  font-weight: 900;
}

.highlight.orange {
  color: var(--color-primary);
}

.highlight.yellow {
  color: var(--color-secondary-hover);
}

.highlight.dark {
  color: var(--color-dark);
}

.hero-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  max-width: 540px;
  line-height: 1.7;
  margin-bottom: var(--space-2xl);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

/* Logo Text Graphic Styling */
.hero-graphic {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-2xl) 0;
  width: 100%;
}

.logo-text-graphic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  max-width: 100%;
}

@media (min-width: 768px) {
  .logo-text-graphic {
    transform: scale(1.1);
  }
}

.logo-text-main {
  font-size: clamp(2.25rem, 11vw, 5.5rem);
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -2.5px;
  margin: 0;
  line-height: 1;
  white-space: nowrap;
}

.text-orange {
  color: #ff5c1f;
}

.logo-text-sub {
  font-size: clamp(0.65rem, 2.8vw, 1.35rem);
  font-weight: 600;
  color: #0f172a;
  letter-spacing: clamp(4px, 2vw, 12px);
  margin-top: 1rem;
  text-transform: uppercase;
  margin-left: clamp(4px, 2vw, 12px); /* Offset to center due to trailing letter-spacing */
  white-space: nowrap;
}

.dot-orange {
  color: #ff5c1f;
  margin: 0 4px;
}
</style>
