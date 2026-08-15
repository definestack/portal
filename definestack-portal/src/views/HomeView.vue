<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import WhatWeDoSection from '@/components/sections/WhatWeDoSection.vue'
import ProductsSection from '@/components/sections/ProductsSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <main class="home-view">
    <HeroSection />
    <WhatWeDoSection />
    <ProductsSection />
    <ProcessSection />
    <BlogSection />
    <CtaSection />
  </main>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
}
</style>
