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
      autoplay: {
        delay: 5000
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    })
  }
})
</script>

<template>
  <section id="testimonials" class="testimonials section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>What our patients and partners say about us</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper" ref="swiperEl">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>Medicio provided excellent care and attention throughout my treatment. The staff was compassionate
                  and truly committed to my recovery journey.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
              <h3>Saul Goodman</h3>
              <h4>CEO &amp; Founder</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>Our collaboration with Medicio’s research team was outstanding. Their professionalism and
                  innovative approach brought measurable results to our clinical study.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>The doctors at Medicio are knowledgeable and caring. They explained everything in detail and made
                  sure I was comfortable throughout my visits.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>Impressed by the state-of-the-art facilities and the warm, welcoming environment. I’d highly
                  recommend Medicio for any health concern.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>The team was attentive and responsive to every question I had. Their support helped me feel
                  confident and well cared for throughout my treatment.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
