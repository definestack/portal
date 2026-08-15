<script setup lang="ts">
import { ref, reactive } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const validateForm = () => {
  let isValid = true
  
  // Name validation
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  } else {
    errors.name = ''
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  } else {
    errors.email = ''
  }

  // Subject validation
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  } else {
    errors.subject = ''
  }

  // Message validation
  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
    isValid = false
  } else {
    errors.message = ''
  }

  return isValid
}

const handleSubmit = () => {
  if (!validateForm()) return

  isSubmitting.value = true

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 1200)
}
</script>

<template>
  <main class="contact-view">
    <!-- Header banner -->
    <section class="page-header dot-grid">
      <div class="container text-center">
        <span class="section-tag">Contact Us</span>
        <h1 class="page-title">Let's build together</h1>
        <p class="page-desc centered">
          Get in touch with us to discuss your ideas, product roadmap, or engineering challenges.
        </p>
      </div>
    </section>

    <!-- Main Contact Layout -->
    <section class="contact-form-section">
      <div class="container">
        <div class="contact-grid">
          
          <!-- Contact details column -->
          <div class="contact-info-col">
            <h2 class="col-title">Start a conversation</h2>
            <p class="col-desc">
              Have an application idea, need architectural review, or looking to hire dedicated engineers? Drop us a line.
            </p>

            <div class="info-list">
              <div class="info-item">
                <div class="info-icon flex-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="info-text">
                  <div class="info-label">Email Us</div>
                  <a href="mailto:hello@definestack.com" class="info-value">hello@definestack.com</a>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon flex-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div class="info-text">
                  <div class="info-label">GitHub</div>
                  <a href="https://github.com" target="_blank" rel="noopener" class="info-value">github.com/definestack</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Form column -->
          <div class="contact-form-col">
            <BaseCard padding="lg" :hoverLift="false">
              <!-- Success Banner -->
              <div v-if="isSubmitted" class="success-banner text-center">
                <div class="success-icon-wrapper flex-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 class="success-title">Message Sent Successfully!</h3>
                <p class="success-desc">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <BaseButton @click="isSubmitted = false" variant="secondary">Send another message</BaseButton>
              </div>

              <!-- Form elements -->
              <form v-else @submit.prevent="handleSubmit" class="contact-form" novalidate>
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    :class="['form-input', { 'input-error': errors.name }]"
                    placeholder="John Doe"
                  />
                  <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
                </div>

                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    :class="['form-input', { 'input-error': errors.email }]"
                    placeholder="john@example.com"
                  />
                  <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject" 
                    :class="['form-input', { 'input-error': errors.subject }]"
                    placeholder="Project Inquiry"
                  />
                  <span v-if="errors.subject" class="error-msg">{{ errors.subject }}</span>
                </div>

                <div class="form-group">
                  <label for="message">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    v-model="form.message" 
                    :class="['form-textarea', { 'input-error': errors.message }]"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
                </div>

                <div class="form-action">
                  <BaseButton type="submit" variant="primary" :disabled="isSubmitting">
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </BaseButton>
                </div>
              </form>
            </BaseCard>
          </div>

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
}

.contact-form-section {
  padding: var(--space-4xl) 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
}

@media (min-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr 1.2fr;
    align-items: flex-start;
  }
}

.contact-info-col {
  text-align: left;
}

.col-title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
}

.col-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-2xl);
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.info-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.info-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: rgba(255, 92, 31, 0.1);
  color: var(--color-primary);
  flex-shrink: 0;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: var(--font-size-xs);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-light);
  letter-spacing: 0.05em;
}

.info-value {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-heading);
}

.info-value:hover {
  color: var(--color-primary);
}

/* Contact Form styling */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form-group label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-heading);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-light);
  outline: none;
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-primary);
  background-color: var(--color-white);
  box-shadow: 0 0 0 3px rgba(255, 92, 31, 0.1);
}

.input-error {
  border-color: #ef4444;
}

.input-error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-msg {
  font-size: var(--font-size-xs);
  color: #ef4444;
  font-weight: 500;
}

.form-action {
  margin-top: var(--space-sm);
}

/* Success Banner styling */
.success-banner {
  padding: var(--space-xl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.success-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  background-color: #d1fae5;
  color: #10b981;
  margin-bottom: var(--space-sm);
}

.success-title {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-text-heading);
}

.success-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  max-width: 320px;
  line-height: 1.6;
  margin-bottom: var(--space-md);
}
</style>
