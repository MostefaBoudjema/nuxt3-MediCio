<template>
  <section id="faq" class="faq section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('faq.title', 'Frequently Asked Questions') }}</h2>
      <p>{{ $t('faq.description', 'Answers to common questions.') }}</p>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div class="faq-container">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="faq-item"
              :class="{ active: activeIndex === index }"
              role="button"
              tabindex="0"
              :aria-expanded="activeIndex === index"
              :aria-controls="`faq-content-${index}`"
              @click="toggle(index)"
              @keyup.enter="toggle(index)"
              @keyup.space.prevent="toggle(index)"
            >
              <h3>{{ $t(item.question, item.question) }}</h3>
              <div
                v-if="activeIndex === index"
                :id="`faq-content-${index}`"
                class="faq-content"
              >
                <p>{{ $t(item.answer, item.answer) }}</p>
              </div>
              <span
                class="faq-toggle bi"
                :class="activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Reactive FAQ items
const faqItems = ref([
  { question: 'faq.q1.question', answer: 'faq.q1.answer' },
  { question: 'faq.q2.question', answer: 'faq.q2.answer' },
  { question: 'faq.q3.question', answer: 'faq.q3.answer' },
  { question: 'faq.q4.question', answer: 'faq.q4.answer' },
  { question: 'faq.q5.question', answer: 'faq.q5.answer' },
  { question: 'faq.q6.question', answer: 'faq.q6.answer' },
]);

// Active FAQ item index
const activeIndex = ref(null);

// Toggle FAQ item
const toggle = (index) => {
  console.log('Toggling FAQ item:', index); // Debugging
  if (index < 0 || index >= faqItems.value.length) {
    console.warn('Invalid FAQ index:', index);
    return;
  }
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.faq-item {
  cursor: pointer;
  padding: 1rem 2.5rem 1rem 1rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  transition: background-color 0.3s ease;
}

.faq-item h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.faq-content {
  margin-top: 0.75rem;
  color: #555;
}

.faq-toggle {
  position: absolute;
  right: 1rem;
  top: 1.2rem;
  font-size: 1.2rem;
}

.faq-item.active {
  background: #e9ecef;
}

.faq-item:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .faq-item h3 {
    font-size: 1rem;
  }
  .faq-toggle {
    font-size: 1rem;
  }
}
</style>