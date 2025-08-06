<template>
  <section id="featured-services" class="featured-services section">
    <div class="container">
      <div class="row gy-4">

        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item position-relative">
            <div class="icon"><i class="fas fa-heartbeat icon"></i></div>
            <h4><a href="#" class="stretched-link">{{ $t('services.cardiology.title') }}</a></h4>
            <p>{{ $t('services.cardiology.desc') }}</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
          <div class="service-item position-relative">
            <div class="icon"><i class="fas fa-pills icon"></i></div>
            <h4><a href="#" class="stretched-link">{{ $t('services.pharmacy.title') }}</a></h4>
            <p>{{ $t('services.pharmacy.desc') }}</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
          <div class="service-item position-relative">
            <div class="icon"><i class="fas fa-thermometer icon"></i></div>
            <h4><a href="#" class="stretched-link">{{ $t('services.checkups.title') }}</a></h4>
            <p>{{ $t('services.checkups.desc') }}</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
          <div class="service-item position-relative">
            <div class="icon"><i class="fas fa-dna icon"></i></div>
            <h4><a href="#" class="stretched-link">{{ $t('services.lab.title') }}</a></h4>
            <p>{{ $t('services.lab.desc') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
