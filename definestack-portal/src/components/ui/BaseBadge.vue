<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'warning' | 'info'
  }>(),
  {
    variant: 'info'
  }
)

const badgeClass = computed(() => ['badge', `badge-${props.variant}`])
</script>

<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  font-size: var(--font-size-xs);
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.badge-primary {
  background-color: rgba(255, 92, 31, 0.1);
  color: var(--color-primary);
}

.badge-secondary {
  background-color: rgba(255, 179, 0, 0.1);
  color: var(--color-secondary-hover);
}

.badge-warning {
  background-color: #fef3c7;
  color: #d97706;
}

.badge-info {
  background-color: #e0f2fe;
  color: #0284c7;
}
</style>
