<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
</script>

<template>
  <main class="contact-view">
    <!-- Header banner -->
    <section class="page-header dot-grid">
      <div class="container text-center">
        <span class="section-tag">Contact Us</span>
        <h1 class="page-title">Let's build together</h1>
        <p class="page-desc">
          Get in touch with us to discuss your ideas, product roadmap, or engineering challenges.
        </p>
      </div>
    </section>

    <!-- Direct contact channels -->
    <section class="channels-section">
      <div class="container">
        <div class="grid-2 channels-grid">
          <a href="mailto:definestack@gmail.com" class="channel-link">
            <BaseCard padding="lg" class="channel-card">
              <div class="channel-icon flex-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="channel-text">
                <div class="channel-label">Email Us</div>
                <div class="channel-value">definestack@gmail.com</div>
                <p class="channel-hint">We typically reply within 24 hours.</p>
              </div>
              <span class="channel-arrow">→</span>
            </BaseCard>
          </a>

          <a href="http://github.com/definestack" target="_blank" rel="noopener" class="channel-link">
            <BaseCard padding="lg" class="channel-card">
              <div class="channel-icon flex-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div class="channel-text">
                <div class="channel-label">GitHub</div>
                <div class="channel-value">github.com/definestack</div>
                <p class="channel-hint">Browse our open-source apps and tools.</p>
              </div>
              <span class="channel-arrow">→</span>
            </BaseCard>
          </a>
        </div>
      </div>
    </section>

    <!-- What we can help with -->
    <section class="help-section">
      <div class="container">
        <div class="text-center header-wrapper">
          <span class="section-tag">How We Can Help</span>
          <h2 class="section-title centered">We're here to help</h2>
        </div>

        <div class="grid-3">
          <BaseCard padding="lg" class="help-card">
            <div class="help-icon flex-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <line x1="9" y1="18" x2="15" y2="18"></line>
                <line x1="10" y1="22" x2="14" y2="22"></line>
              </svg>
            </div>
            <h3 class="help-title">Have an idea</h3>
            <p class="help-desc">
              Tell us about the application or product you want to build, and we'll help you scope it out.
            </p>
          </BaseCard>

          <BaseCard padding="lg" class="help-card">
            <div class="help-icon flex-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 class="help-title">Need a review</h3>
            <p class="help-desc">
              Get an architectural review of your existing codebase or infrastructure from our engineers.
            </p>
          </BaseCard>

          <BaseCard padding="lg" class="help-card">
            <div class="help-icon flex-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="help-title">Hire engineers</h3>
            <p class="help-desc">
              Looking to grow your team? We offer dedicated engineering resources for your projects.
            </p>
          </BaseCard>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-view {
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
  margin-left: auto;
  margin-right: auto;
}

.channels-section {
  padding: var(--space-4xl) 0;
}

.channels-grid {
  max-width: 900px;
  margin: 0 auto;
}

.channel-link {
  display: block;
}

.channel-card {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  text-align: left;
  height: 100%;
}

.channel-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background-color: rgba(255, 92, 31, 0.1);
  color: var(--color-primary);
  flex-shrink: 0;
  transition: all var(--transition-normal);
}

.channel-card:hover .channel-icon {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: rotate(10deg) scale(1.05);
}

.channel-text {
  flex-grow: 1;
}

.channel-label {
  font-size: var(--font-size-xs);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-light);
  letter-spacing: 0.05em;
}

.channel-value {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-heading);
  margin-top: var(--space-xs);
}

.channel-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-xs);
}

.channel-arrow {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.channel-card:hover .channel-arrow {
  color: var(--color-primary);
  transform: translateX(4px);
}

.help-section {
  padding: var(--space-3xl) 0;
  background-color: var(--color-light);
}

.header-wrapper {
  margin-bottom: var(--space-3xl);
}

.section-title.centered {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.help-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.help-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background-color: rgba(255, 92, 31, 0.1);
  color: var(--color-primary);
  margin-bottom: var(--space-lg);
  transition: all var(--transition-normal);
}

.help-card:hover .help-icon {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: rotate(10deg) scale(1.05);
}

.help-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--color-text-heading);
}

.help-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
