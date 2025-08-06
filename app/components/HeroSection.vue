<template>
  <section id="hero" class="hero section">
    <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
      
      <div class="carousel-item active"> 
        <img src="/img/hero-carousel/hero-carousel-1.jpg" class="d-block w-100" alt="">
        <div class="container">
          <h2>{{ $t('hero.slide1.title') }}</h2>
          <p>{{ $t('hero.slide1.text') }}</p>
          <a href="#about" class="btn-get-started">{{ $t('hero.readMore') }}</a>
        </div>
      </div>

      <div class="carousel-item">
        <img src="/img/hero-carousel/hero-carousel-2.jpg" class="d-block w-100" alt="">
        <div class="container">
          <h2>{{ $t('hero.slide2.title') }}</h2>
          <p>{{ $t('hero.slide2.text') }}</p>
          <a href="#about" class="btn-get-started">{{ $t('hero.readMore') }}</a>
        </div>
      </div>

      <div class="carousel-item">
        <img src="/img/hero-carousel/hero-carousel-3.jpg" class="d-block w-100" alt="">
        <div class="container">
          <h2>{{ $t('hero.slide3.title') }}</h2>
          <p>{{ $t('hero.slide3.text') }}</p>
          <a href="#about" class="btn-get-started">{{ $t('hero.readMore') }}</a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

      <div class="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2"></button>
      </div>

    </div>
  </section>
</template>
