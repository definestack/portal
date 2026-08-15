<script setup lang="ts">
import { processStepsData } from '@/data/mockData'
</script>

<template>
  <section class="process-section">
    <div class="container">
      <div class="text-center header-wrapper">
        <span class="section-tag">How We Work</span>
        <h2 class="section-title centered">A simple process. Real outcomes.</h2>
      </div>

      <div class="process-timeline-container">
        <!-- Connecting Line for Desktop -->
        <div class="desktop-line"></div>

        <div class="process-steps">
          <div 
            v-for="step in processStepsData" 
            :key="step.stepNumber"
            class="step-item"
          >
            <div class="step-num-container flex-center">
              <div class="step-number flex-center">{{ step.stepNumber }}</div>
            </div>
            
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  padding: var(--space-3xl) 0;
  background-color: var(--color-light);
  overflow: hidden;
}

.header-wrapper {
  margin-bottom: var(--space-4xl);
}

.process-timeline-container {
  position: relative;
  width: 100%;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  position: relative;
  z-index: 2;
}

@media (min-width: 768px) {
  .process-steps {
    flex-direction: row;
    justify-content: space-between;
    gap: var(--space-xl);
  }
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  position: relative;
}

/* Step Number styling */
.step-num-container {
  position: relative;
  margin-bottom: var(--space-md);
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: var(--font-size-xl);
  font-weight: 800;
  border: 4px solid var(--color-light-alt);
  box-shadow: 0 0 0 4px var(--color-white);
  transition: all var(--transition-normal);
}

.step-item:hover .step-number {
  transform: scale(1.15);
  background-color: var(--color-primary-hover);
  box-shadow: 0 0 20px rgba(255, 92, 31, 0.4);
}

/* Desktop Connecting Line */
.desktop-line {
  display: none;
}

@media (min-width: 768px) {
  .desktop-line {
    display: block;
    position: absolute;
    top: 25px;
    left: 10%;
    right: 10%;
    height: 2px;
    background-image: linear-gradient(to right, var(--color-primary) 50%, transparent 50%);
    background-size: 15px 2px;
    background-repeat: repeat-x;
    z-index: 1;
    opacity: 0.5;
  }
}

/* Vertical line for mobile */
@media (max-width: 767px) {
  .step-item:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50%;
    width: 2px;
    height: calc(100% + var(--space-md));
    background-image: linear-gradient(to bottom, var(--color-primary) 50%, transparent 50%);
    background-size: 2px 10px;
    background-repeat: repeat-y;
    transform: translateX(-50%);
    opacity: 0.5;
  }
}

.step-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--color-text-heading);
}

.step-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  max-width: 280px;
  line-height: 1.6;
}
</style>
