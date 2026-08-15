<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    hoverLift?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
    border?: boolean
  }>(),
  {
    hoverLift: true,
    padding: 'md',
    border: true
  }
)

const cardClass = computed(() => [
  'card',
  `padding-${props.padding}`,
  {
    'hover-lift': props.hoverLift,
    'has-border': props.border
  }
])
</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  transition: all var(--transition-normal);
  overflow: hidden;
}

.has-border {
  border: 1px solid var(--color-border);
}

/* Padding Options */
.padding-none { padding: 0; }
.padding-sm { padding: var(--space-md); }
.padding-md { padding: var(--space-xl); }
.padding-lg { padding: var(--space-2xl); }

/* Lift Hover Animation */
.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.12);
  border-color: rgba(255, 92, 31, 0.15);
}
</style>
