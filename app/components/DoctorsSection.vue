<template>
  <section id="doctors" class="doctors section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('doctors.title') }}</h2>
      <p>{{ $t('doctors.subtitle') }}</p>
    </div>
    <div class="container">
      <div class="row gy-4">

        <!-- Doctor 1 -->
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
          <div class="team-member">
            <div class="member-img">
              <img src="/img/doctors/doctors-1.jpg" class="img-fluid" :alt="$t('doctors.walter.name')" />
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>{{ $t('doctors.walter.name') }}</h4>
              <span>{{ $t('doctors.walter.role') }}</span>
            </div>
          </div>
        </div>

        <!-- Doctor 2 -->
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
          <div class="team-member">
            <div class="member-img">
              <img src="/img/doctors/doctors-2.jpg" class="img-fluid" :alt="$t('doctors.sarah.name')" />
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>{{ $t('doctors.sarah.name') }}</h4>
              <span>{{ $t('doctors.sarah.role') }}</span>
            </div>
          </div>
        </div>

        <!-- Doctor 3 -->
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div class="team-member">
            <div class="member-img">
              <img src="/img/doctors/doctors-3.jpg" class="img-fluid" :alt="$t('doctors.william.name')" />
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>{{ $t('doctors.william.name') }}</h4>
              <span>{{ $t('doctors.william.role') }}</span>
            </div>
          </div>
        </div>

        <!-- Doctor 4 -->
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
          <div class="team-member">
            <div class="member-img">
              <img src="/img/doctors/doctors-4.jpg" class="img-fluid" :alt="$t('doctors.amanda.name')" />
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>{{ $t('doctors.amanda.name') }}</h4>
              <span>{{ $t('doctors.amanda.role') }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
