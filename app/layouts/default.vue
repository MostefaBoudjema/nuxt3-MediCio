<template>
  <div>
    <!-- Header -->
    <HeaderSection />
    <!-- Main content -->
    <main class="main-content">
      <slot />
    </main>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>
<script setup>
import FooterSection from '~/components/shared/FooterSection.vue';
import HeaderSection from '~/components/shared/HeaderSection.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

useHead({
  // title: 'Home - MediCio',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  link: [
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
    { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/vendor/aos/aos.css' },
    { rel: 'stylesheet', href: '/vendor/fontawesome-free/css/all.min.css' },
    { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
    { rel: 'stylesheet', href: '/vendor/swiper/swiper-bundle.min.css' },
    { rel: 'stylesheet', href: '/css/main.css' }
  ],
  script: [
    { src: '/vendor/php-email-form/validate.js', body: true },
    { src: '/vendor/aos/aos.js', body: true },
    { src: '/vendor/glightbox/js/glightbox.min.js', body: true },
    { src: '/vendor/purecounter/purecounter_vanilla.js', body: true },
    { src: '/js/main.js', body: true }
  ]
})

// onMounted(() => {
//   AOS.init({
//     duration: 1000, // Animation duration
//     easing: 'ease-in-out', // Animation easing
//     once: true, // Whether animation should happen only once
//     mirror: false, // Whether elements should animate out while scrolling past them
//   });
// });
</script>