<template>
  <section id="hero" class="hero section">
    <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
      <!-- Slide 1 -->
      <div class="carousel-item active">
        <img src="/img/hero-carousel/hero-carousel-1.jpg" class="d-block w-100" alt="" />
        <div class="container text-center" :class="textDirection">
          <h2>{{ $t('hero.slide1.title') }}</h2>
          <p>{{ $t('hero.slide1.text') }}</p>
          <a href="#about" class="btn-get-started">{{ $t('hero.readMore') }}</a>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <img src="/img/hero-carousel/hero-carousel-2.jpg" class="d-block w-100" alt="" />
        <div class="container text-center" :class="textDirection">
          <h2>{{ $t('hero.slide2.title') }}</h2>
          <p>{{ $t('hero.slide2.text') }}</p>
          <a href="#about" class="btn-get-started">{{ $t('hero.readMore') }}</a>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="carousel-item">
        <img src="/img/hero-carousel/hero-carousel-3.jpg" class="d-block w-100" alt="" />
        <div class="container text-center" :class="textDirection">
          <h2>{{ $t('hero.slide3.title') }}</h2>
          <p>{{ $t('hero.slide3.text') }}</p>
          <a href="#about" class="btn-get-started">{{ $t('hero.readMore') }}</a>
        </div>
      </div>

      <!-- Controls -->
      <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2"></button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { locale, locales, localeProperties } = useI18n();

const textDirection = computed(() => (localeProperties.value.dir === 'rtl' ? 'text-end' : 'text-start'));
</script>

<style scoped>
/* RTL styles for Arabic locale */
* {
  direction: ltr;
}

/* Example: Reverse alignment for text */
.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

/* Add more styles as needed */

</style>