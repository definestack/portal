<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'text'
    to?: string
    href?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false
  }
)

const isRouterLink = computed(() => !!props.to)
const isExternalLink = computed(() => !!props.href)

const buttonClass = computed(() => [
  'btn',
  `btn-${props.variant}`,
  { 'btn-disabled': props.disabled }
])
</script>

<template>
  <router-link v-if="isRouterLink" :to="to!" :class="buttonClass">
    <span class="btn-content">
      <slot />
      <span v-if="variant === 'text' || variant === 'primary'" class="arrow">→</span>
    </span>
  </router-link>

  <a v-else-if="isExternalLink" :href="href" target="_blank" rel="noopener" :class="buttonClass">
    <span class="btn-content">
      <slot />
      <span v-if="variant === 'text' || variant === 'primary'" class="arrow">→</span>
    </span>
  </a>

  <button v-else :type="type" :disabled="disabled" :class="buttonClass">
    <span class="btn-content">
      <slot />
      <span v-if="variant === 'text' || variant === 'primary'" class="arrow">→</span>
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: var(--font-size-base);
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-normal);
  border: 2px solid transparent;
  outline: none;
  user-select: none;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.arrow {
  transition: transform var(--transition-fast);
}

/* Primary Button Styling */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 92, 31, 0.25);
}

.btn-primary:hover:not(:disabled) .arrow {
  transform: translateX(4px);
}

/* Secondary Button Styling */
.btn-secondary {
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 92, 31, 0.15);
}

/* Text Button Styling */
.btn-text {
  background: transparent;
  color: var(--color-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 0;
  font-size: var(--font-size-base);
}

.btn-text:hover:not(:disabled) {
  color: var(--color-primary-hover);
}

.btn-text:hover:not(:disabled) .arrow {
  transform: translateX(4px);
}

/* Disabled State */
.btn-disabled,
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}
</style>
