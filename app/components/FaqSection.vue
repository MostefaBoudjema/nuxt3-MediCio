<template>
  <section id="faq" class="faq section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to common questions about appointments, services, and patient support.</p>
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
              <h3>{{ item.question }}</h3>
              <div class="faq-content" v-if="activeIndex === index">
                <p>{{ item.answer }}</p>
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
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment online through our website, by calling us directly, or by visiting our clinic during working hours.'
  },
  {
    question: 'Do I need a referral to see a specialist?',
    answer: 'No referral is needed for most of our services. However, some insurance providers may require a referral for coverage purposes.'
  },
  {
    question: 'What should I bring to my first visit?',
    answer: 'Please bring your ID, any medical records, a list of medications you\'re taking, and your insurance information if applicable.'
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer: 'Yes. You can reschedule or cancel your appointment up to 24 hours in advance by calling our front desk or using our online system.'
  },
  {
    question: 'Do you accept walk-ins?',
    answer: 'We recommend booking in advance, but we do accept walk-ins based on availability. Priority is given to those with appointments.'
  },
  {
    question: 'Which insurance plans do you accept?',
    answer: 'We accept most major insurance providers. Please contact us or check our insurance page for a full list of accepted plans.'
  }
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
