<template>
  <!-- Faq Section -->
  <section id="faq" class="faq section light-background">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('faq.title', 'Frequently Asked Questions') }}</h2>
      <p>{{ $t('faq.description', 'Answers to common questions.') }}</p>
    </div>
    <!-- End Section Title -->

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div class="faq-container">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="faq-item"
              :class="{ 'faq-active': activeIndex === index }"
            >
              <div
                class="d-flex align-items-center justify-content-between"
                @click="toggle(index)"
              >
                <h3>{{ $t(item.question) }}</h3>
                <i class="faq-toggle bi" :class="activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
              </div>
              <div v-show="activeIndex === index" class="faq-content">
                <p>{{ $t(item.answer) }}</p>
              </div>
            </div>
            <!-- End Faq item -->
          </div>
        </div>
        <!-- End Faq Column-->
      </div>
    </div>
  </section>
  <!-- /Faq Section -->
</template>

<script setup>
import { ref } from 'vue'

const faqItems = ref([
  { question: 'faq.q1.question', answer: 'faq.q1.answer' },
  { question: 'faq.q2.question', answer: 'faq.q2.answer' },
  { question: 'faq.q3.question', answer: 'faq.q3.answer' },
  { question: 'faq.q4.question', answer: 'faq.q4.answer' },
  { question: 'faq.q5.question', answer: 'faq.q5.answer' },
  { question: 'faq.q6.question', answer: 'faq.q6.answer' }
])

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  cursor: pointer;
}

.faq-toggle {
  font-size: 1.25rem;
}

.faq-content {
  margin-top: 0.75rem;
  color: #555;
}

.faq-active {
  background: #f9f9f9;
}
</style>
