<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
</script>

<template>
  <main class="about-view">
    <!-- Header banner -->
    <section class="page-header dot-grid">
      <div class="container text-center">
        <span class="section-tag">About Us</span>
        <h1 class="page-title">We turn complexity into simplicity</h1>
        <p class="page-desc centered">
          DefineStack is a small team of engineers and designers who build high-performance software.
        </p>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="about-content-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text-col">
            <h2 class="about-subtitle">Our Philosophy</h2>
            <p class="about-paragraph">
              We believe software should be fast, beautiful, and serve a clear purpose. We start by analyzing problems from first principles, ensuring we understand the absolute core requirements before writing any code.
            </p>
            <p class="about-paragraph">
              Whether building local-first applications or scaling cloud infrastructures, we focus on durability, clean architectures, and delightful user experiences.
            </p>
          </div>

          <div class="about-stats-col">
            <BaseCard padding="lg" :hoverLift="false">
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">3+</div>
                  <div class="stat-label">Products Maintained</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">99.9%</div>
                  <div class="stat-label">Uptime Architecture</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">100%</div>
                  <div class="stat-label">TypeScript & Type-Safe</div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section id="approach" class="approach-section">
      <div class="container">
        <div class="text-center header-wrapper">
          <span class="section-tag">Our Approach</span>
          <h2 class="section-title centered">How we build software</h2>
        </div>

        <div class="grid-3">
          <BaseCard padding="md" class="approach-card">
            <div class="approach-number">01</div>
            <h3 class="approach-title">First-Principles Thinking</h3>
            <p class="approach-desc">
              We decompose complex challenges into basic truths and construct solutions from the ground up, avoiding bloated templates and standard tech hypes.
            </p>
          </BaseCard>

          <BaseCard padding="md" class="approach-card">
            <div class="approach-number">02</div>
            <h3 class="approach-title">Craftsmanship</h3>
            <p class="approach-desc">
              Every detail matters. From clean semantic markup to robust backend pipelines, we engineer software that stands the test of time.
            </p>
          </BaseCard>

          <BaseCard padding="md" class="approach-card">
            <div class="approach-number">03</div>
            <h3 class="approach-title">Extreme Speed</h3>
            <p class="approach-desc">
              Performance is a feature. We prioritize lightweight payloads, optimized state management, and smooth transitions to keep load times near-zero.
            </p>
          </BaseCard>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-view {
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

.about-content-section {
  padding: var(--space-4xl) 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

@media (min-width: 992px) {
  .about-grid {
    grid-template-columns: 1.2fr 1fr;
  }
}

.about-text-col {
  text-align: left;
}

.about-subtitle {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-lg);
}

.about-paragraph {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  text-align: center;
}

@media (min-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.1;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  font-weight: 600;
}

.approach-section {
  padding: var(--space-3xl) 0;
  background-color: var(--color-light);
}

.header-wrapper {
  margin-bottom: var(--space-3xl);
}

.approach-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.approach-number {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: rgba(255, 92, 31, 0.15);
  margin-bottom: var(--space-md);
}

.approach-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--color-text-heading);
}

.approach-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
