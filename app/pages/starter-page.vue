<template>
  <div>
    
    <HeaderSection />
    <main class="main">
      <div class="page-title">
        <div class="heading">
          <div class="container">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-lg-8">
                <h1 class="heading-title">Starter Page</h1>
                <p class="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
                  odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
                  debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
                  ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav class="breadcrumbs">
          <div class="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li class="current">Starter Page</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="starter-section" class="starter-section section">
        <div class="container" data-aos="fade-up">
          <p>Use this page as a starter for your own custom pages.</p>
        </div>
      </section>
    </main>
    
    <FooterSection />
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    <!-- <div id="preloader"></div> -->
  </div>
</template>

<script setup>
import FooterSection from '~/components/shared/FooterSection.vue';
import HeaderSection from '~/components/shared/HeaderSection.vue';
useHead({
  title: 'Starter Page - Medicio Bootstrap Template',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  link: [
    // { rel: 'icon', href: '/favicon.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap' },
    { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/vendor/bootstrap-icons/bootstrap-icons.css' },
    { rel: 'stylesheet', href: '/vendor/aos/aos.css' },
    { rel: 'stylesheet', href: '/vendor/fontawesome-free/css/all.min.css' },
    { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
    { rel: 'stylesheet', href: '/vendor/swiper/swiper-bundle.min.css' },
    { rel: 'stylesheet', href: '/css/main.css' }
  ],
  script: [
    { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
    { src: '/vendor/php-email-form/validate.js', body: true },
    { src: '/vendor/aos/aos.js', body: true },
    { src: '/vendor/glightbox/js/glightbox.min.js', body: true },
    { src: '/vendor/purecounter/purecounter_vanilla.js', body: true },
    { src: '/vendor/swiper/swiper-bundle.min.js', body: true },
    { src: '/js/main.js', body: true }
  ]
})
</script> 