<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    closeMobileMenu()
  }
}

watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <div class="container header-container">
      <!-- Logo -->
      <router-link to="/" class="logo-link" @click="closeMobileMenu">
        <div class="logo-wrapper">
          <img src="/logo.png" alt="DefineStack Logo" class="logo-img" />
          <div class="logo-text-container">
            <span class="logo-brand"><strong>Define</strong>Stack</span>
            <span class="logo-tagline">DEFINE <span class="tagline-dot">•</span> BUILD <span class="tagline-dot">•</span> DELIVER</span>
          </div>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="nav-menu">
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>

      <!-- CTA -->
      <div class="header-cta">
        <BaseButton to="/contact" variant="primary">Let's Connect</BaseButton>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        type="button"
        :class="['mobile-menu-toggle', { 'is-open': isMobileMenuOpen }]"
        aria-label="Toggle menu"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Nav Panel -->
    <div :class="['mobile-nav', { 'is-open': isMobileMenuOpen }]">
      <div class="mobile-nav-inner">
        <router-link to="/products" class="mobile-nav-link" @click="closeMobileMenu">Products</router-link>
        <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">About</router-link>
        <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</router-link>

        <BaseButton to="/contact" variant="primary" class="mobile-cta" @click="closeMobileMenu">
          Let's Connect
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-normal);
}

.header-scrolled {
  box-shadow: var(--shadow-md);
  background-color: rgba(255, 255, 255, 0.98);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  transition: height var(--transition-normal);
}

.header-scrolled .header-container {
  height: 70px;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  height: 48px;
  gap: 12px;
}

.logo-img {
  height: 100%;
  object-fit: contain;
}

.logo-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-brand {
  font-size: 1.5rem;
  color: var(--color-dark);
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.logo-brand strong {
  font-weight: 800;
}

.logo-tagline {
  font-size: 0.55rem;
  font-weight: 700;
  color: var(--color-dark);
  letter-spacing: 2px;
  margin-top: 2px;
}

.tagline-dot {
  color: var(--color-primary);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav-link {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text);
  padding: var(--space-sm) 0;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  cursor: pointer;
  background: none;
  border: none;
}

.nav-link:hover,
.router-link-active {
  color: var(--color-primary);
}

/* Mobile Menu Toggle Button */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.mobile-menu-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-dark);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.mobile-menu-toggle.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-toggle.is-open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  .nav-menu,
  .header-cta {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-nav {
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-border);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }

  .mobile-nav.is-open {
    display: block;
  }

  .mobile-nav-inner {
    display: flex;
    flex-direction: column;
    padding: var(--space-sm) var(--space-lg) var(--space-xl);
    gap: var(--space-xs);
  }

  .mobile-nav-link {
    width: 100%;
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text);
    padding: var(--space-md) 0;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    text-align: left;
    cursor: pointer;
  }

  .mobile-cta {
    margin-top: var(--space-md);
    width: 100%;
  }
}
</style>
