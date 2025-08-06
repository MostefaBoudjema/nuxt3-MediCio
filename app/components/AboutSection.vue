<template>
  <section id="about" class="about section">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('about.title') }}</h2>
      <p>{{ $t('about.subtitle') }}</p>
    </div>
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
          <img src="/img/about.jpg" class="img-fluid" :alt="$t('about.imageAlt')">
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a>
        </div>
        <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
          <h3>{{ $t('about.heading') }}</h3>
          <p class="fst-italic">
            {{ $t('about.mission') }}
          </p>
          <ul>
            <li><i class="bi bi-check2-all"></i> <span>{{ $t('about.point1') }}</span></li>
            <li><i class="bi bi-check2-all"></i> <span>{{ $t('about.point2') }}</span></li>
            <li><i class="bi bi-check2-all"></i> <span>{{ $t('about.point3') }}</span></li>
          </ul>
          <p>
            {{ $t('about.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
