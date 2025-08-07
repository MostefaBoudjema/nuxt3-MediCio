<template>
  <section id="features" class="features section">
    <div class="container">
      <div class="row justify-content-around gy-4">

        <div class="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <img src="/img/features.jpg" :alt="$t('features.imageAlt')">
        </div>

        <div class="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <h3>{{ $t('features.title') }}</h3>
          <p>{{ $t('features.description') }}</p>

          <div
            v-for="(feature, index) in featureItems"
            :key="index"
            class="icon-box d-flex position-relative"
            :data-aos-delay="(index + 3) * 100"
            data-aos="fade-up"
          >
            <i :class="feature.icon + ' flex-shrink-0'" class="mx-1"></i>
            <div>
              <h4><a href="#" class="stretched-link">{{ $t(feature.title) }}</a></h4>
              <p>{{ $t(feature.text) }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featureItems = [
  {
    icon: 'fa-solid fa-hand-holding-medical',
    title: 'features.items.0.title',
    text: 'features.items.0.text',
  },
  {
    icon: 'fa-solid fa-suitcase-medical',
    title: 'features.items.1.title',
    text: 'features.items.1.text',
  },
  {
    icon: 'fa-solid fa-staff-snake',
    title: 'features.items.2.title',
    text: 'features.items.2.text',
  },
  {
    icon: 'fa-solid fa-lungs',
    title: 'features.items.3.title',
    text: 'features.items.3.text',
  },
];
</script>
<style scoped>
.features h3:after {
  right: 0;
}
</style>
