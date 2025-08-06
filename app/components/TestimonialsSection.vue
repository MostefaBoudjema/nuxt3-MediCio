<template>
  <section id="testimonials" class="testimonials section">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('testimonials.title') }}</h2>
      <p>{{ $t('testimonials.subtitle') }}</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper" ref="swiperEl">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, i) in testimonials" :key="i">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>{{ $t(item.text) }}</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img :src="item.image" class="testimonial-img" alt="">
              <h3>{{ $t(item.name) }}</h3>
              <h4>{{ $t(item.role) }}</h4>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiperEl = ref(null)

onMounted(() => {
  if (swiperEl.value) {
    new Swiper(swiperEl.value, {
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 40 },
        1200: { slidesPerView: 3, spaceBetween: 20 }
      }
    })
  }
})

const testimonials = [
  {
    text: 'testimonials.items.0.text',
    name: 'testimonials.items.0.name',
    role: 'testimonials.items.0.role',
    image: '/img/testimonials/testimonials-1.jpg'
  },
  {
    text: 'testimonials.items.1.text',
    name: 'testimonials.items.1.name',
    role: 'testimonials.items.1.role',
    image: '/img/testimonials/testimonials-2.jpg'
  },
  {
    text: 'testimonials.items.2.text',
    name: 'testimonials.items.2.name',
    role: 'testimonials.items.2.role',
    image: '/img/testimonials/testimonials-3.jpg'
  },
  {
    text: 'testimonials.items.3.text',
    name: 'testimonials.items.3.name',
    role: 'testimonials.items.3.role',
    image: '/img/testimonials/testimonials-4.jpg'
  },
  {
    text: 'testimonials.items.4.text',
    name: 'testimonials.items.4.name',
    role: 'testimonials.items.4.role',
    image: '/img/testimonials/testimonials-5.jpg'
  }
]
</script>
