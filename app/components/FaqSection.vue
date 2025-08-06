<template>
  <section id="faq" class="faq section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('faq.title') }}</h2>
      <p>{{ $t('faq.description') }}</p>
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
              @click="toggle(index)"
            >
              <h3>{{ $t(item.question) }}</h3>
              <div class="faq-content" v-if="activeIndex === index">
                <p>{{ $t(item.answer) }}</p>
              </div>
              <i
                class="faq-toggle bi"
                :class="activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'"
              ></i>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqItems = [
  { question: 'faq.q1.question', answer: 'faq.q1.answer' },
  { question: 'faq.q2.question', answer: 'faq.q2.answer' },
  { question: 'faq.q3.question', answer: 'faq.q3.answer' },
  { question: 'faq.q4.question', answer: 'faq.q4.answer' },
  { question: 'faq.q5.question', answer: 'faq.q5.answer' },
  { question: 'faq.q6.question', answer: 'faq.q6.answer' }
]
</script>


<style scoped>
.faq-item {
  cursor: pointer;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  transition: all 0.3s ease;
}
.faq-item h3 {
  margin: 0;
  font-size: 1.1rem;
}
.faq-content {
  margin-top: 0.5rem;
}
.faq-toggle {
  position: absolute;
  right: 1rem;
  top: 1.2rem;
}
.faq-item.active {
  background: #f9f9f9;
}
</style>
