<template>
  <section id="hero" class="hero section">
    <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
      <div class="carousel-item active"> 
        <img src="/img/hero-carousel/hero-carousel-1.jpg" class="d-block w-100" alt="">
        <div class="container">
          <h2>Welcome to Medicio</h2>
          <p>We provide top-tier medical services...</p>
          <a href="#about" class="btn-get-started">Read More</a>
        </div>
      </div>

      <div class="carousel-item">
        <img src="/img/hero-carousel/hero-carousel-2.jpg" class="d-block w-100" alt="">
        <div class="container">
          <h2>Advanced Care, Trusted Professionals</h2>
          <p>Our team of experienced doctors...</p>
          <a href="#about" class="btn-get-started">Read More</a>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/hero-carousel/hero-carousel-3.jpg" class="d-block w-100" alt="">
        <div class="container">
          <h2>Your Health, Our Priority</h2>
          <p>From preventive check-ups to complex surgeries...</p>
          <a href="#about" class="btn-get-started">Read More</a>
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

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  if (process.client) {
    const { Carousel }=await import('bootstrap')
    const el=document.querySelector('#hero-carousel')
    if (el) {
      new Carousel(el, {
        interval: 5000,
        ride: 'carousel',
        pause: false,
        wrap: true
      })
    }
  }
})
</script>
<style scoped>

</style>