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
              <img :src="img.src" class="img-fluid" :alt="$t(img.alt)" @error="handleImageError" />
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Define the images array with type safety
const images = ref([
  { src: '/img/gallery/gallery-1.jpg', alt: 'gallery.alt1' },
  { src: '/img/gallery/gallery-2.jpg', alt: 'gallery.alt2' },
  { src: '/img/gallery/gallery-3.jpg', alt: 'gallery.alt3' },
  { src: '/img/gallery/gallery-4.jpg', alt: 'gallery.alt4' },
  { src: '/img/gallery/gallery-5.jpg', alt: 'gallery.alt5' },
  { src: '/img/gallery/gallery-6.jpg', alt: 'gallery.alt6' },
  { src: '/img/gallery/gallery-7.jpg', alt: 'gallery.alt7' },
  { src: '/img/gallery/gallery-8.jpg', alt: 'gallery.alt8' },
]);

// Swiper element ref
const swiperEl = ref(null);
let swiperInstance = null;

// Handle image loading errors
const handleImageError = (event) => {
  console.warn('Image failed to load:', event.target.src);
  // Optionally set a fallback image
  event.target.src = '/img/gallery/fallback.jpg';
};

// Initialize Swiper
onMounted(() => {
  if (!swiperEl.value) {
    console.error('Swiper element not found');
    return;
  }

  try {
    swiperInstance = new Swiper(swiperEl.value, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1200: { slidesPerView: 5, spaceBetween: 20 },
      },
    });
  } catch (error) {
    console.error('Failed to initialize Swiper:', error);
  }
});

// Cleanup Swiper instance on component unmount
onUnmounted(() => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
});
</script>

<style scoped>
/* Ensure the swiper container takes full width */
.swiper {
  width: 100%;
}

/* Ensure images are responsive */
.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Optional: Add hover effect for gallery images */
.swiper-slide a:hover img {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
</style>