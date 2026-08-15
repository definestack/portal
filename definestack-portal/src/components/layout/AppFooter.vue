<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-brand-col">
        <router-link to="/" class="logo-link">
          <img src="/logo.png" alt="DefineStack Logo" class="logo-img" />
        </router-link>
        <p class="brand-desc">
          Building products and developer tools with passion and purpose.
        </p>
        <p class="copyright">
          © {{ new Date().getFullYear() }} DefineStack. All rights reserved.
        </p>
      </div>

      <div class="footer-links-grid">
        <div class="links-col">
          <h4 class="col-title">Products</h4>
          <ul class="links-list">
            <li><router-link to="#" class="footer-link">StickyDo</router-link></li>
            <li><router-link to="#" class="footer-link">Warranty Tracker</router-link></li>
            <li><router-link to="/products" class="footer-link">All Products</router-link></li>
          </ul>
        </div>

        <div class="links-col">
          <h4 class="col-title">Company</h4>
          <ul class="links-list">
            <li><router-link to="/about" class="footer-link">About Us</router-link></li>
            <li><router-link to="/about#approach" class="footer-link">Our Approach</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
          </ul>
        </div>

        <div class="links-col">
          <h4 class="col-title">Resources</h4>
          <ul class="links-list">
            <li><router-link to="/" class="footer-link">Blog</router-link></li>
            <li><a href="https://github.com" target="_blank" rel="noopener" class="footer-link">GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
  padding: var(--space-3xl) 0 var(--space-xl) 0;
  color: var(--color-text-muted);
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
}

@media (min-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 2fr;
  }
}

.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.logo-img {
  height: 40px;
  object-fit: contain;
}

.brand-desc {
  font-size: var(--font-size-base);
  max-width: 320px;
  line-height: 1.6;
}

.copyright {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-top: auto;
}

.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

@media (min-width: 480px) {
  .footer-links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.col-title {
  color: var(--color-text-heading);
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-md);
}

.links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
}

.footer-link:hover {
  color: var(--color-primary);
}
</style>
