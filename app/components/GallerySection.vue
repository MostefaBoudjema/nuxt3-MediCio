<script setup>
import { onMounted, ref } from 'vue'
let swiperInstance = null
const swiperConfig = {
  loop: true,
  speed: 600,
  autoplay: { delay: 5000 },
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 0 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1200: { slidesPerView: 5, spaceBetween: 20 }
  }
}
const swiperEl = ref(null)
onMounted(() => {
  if (window.Swiper && swiperEl.value) {
    swiperInstance = new window.Swiper(swiperEl.value, swiperConfig)
  }
})
</script>
<template>
  <section id="gallery" class="gallery section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Gallery</h2>
      <p>Explore photos of our facility, modern equipment, and patient-friendly environment. See why families trust us with their care.</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper init-swiper" ref="swiperEl">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-1.jpg">
              <img src="/img/gallery/gallery-1.jpg" class="img-fluid" alt="Reception area">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-2.jpg">
              <img src="/img/gallery/gallery-2.jpg" class="img-fluid" alt="Modern examination room">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-3.jpg">
              <img src="/img/gallery/gallery-3.jpg" class="img-fluid" alt="Patient waiting lounge">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-4.jpg">
              <img src="/img/gallery/gallery-4.jpg" class="img-fluid" alt="Advanced diagnostic equipment">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-5.jpg">
              <img src="/img/gallery/gallery-5.jpg" class="img-fluid" alt="Laboratory setup">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-6.jpg">
              <img src="/img/gallery/gallery-6.jpg" class="img-fluid" alt="Doctor consultation room">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-7.jpg">
              <img src="/img/gallery/gallery-7.jpg" class="img-fluid" alt="Operating theatre">
            </a>
          </div>
          <div class="swiper-slide">
            <a class="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-8.jpg">
              <img src="/img/gallery/gallery-8.jpg" class="img-fluid" alt="Clinic exterior view">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
