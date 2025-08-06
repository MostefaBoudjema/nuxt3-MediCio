<template>
  <section id="gallery" class="gallery section">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('gallery.title') }}</h2>
      <p>{{ $t('gallery.description') }}</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper" ref="swiperEl">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide" v-for="(img, index) in images" :key="index">
            <a class="glightbox" :href="img.src" data-gallery="images-gallery">
              <img :src="img.src" class="img-fluid" :alt="$t(img.alt)" />
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const swiperEl=ref(null)

const images=[
  { src: '/img/gallery/gallery-1.jpg', alt: 'gallery.alt1' },
  { src: '/img/gallery/gallery-2.jpg', alt: 'gallery.alt2' },
  { src: '/img/gallery/gallery-3.jpg', alt: 'gallery.alt3' },
  { src: '/img/gallery/gallery-4.jpg', alt: 'gallery.alt4' },
  { src: '/img/gallery/gallery-5.jpg', alt: 'gallery.alt5' },
  { src: '/img/gallery/gallery-6.jpg', alt: 'gallery.alt6' },
  { src: '/img/gallery/gallery-7.jpg', alt: 'gallery.alt7' },
  { src: '/img/gallery/gallery-8.jpg', alt: 'gallery.alt8' },
]

onMounted(() => {
  if (window.Swiper&&swiperEl.value) {
    new window.Swiper(swiperEl.value, {
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1200: { slidesPerView: 5, spaceBetween: 20 }
      }
    })
  }
})
</script>
