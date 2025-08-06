<template>
<section id="services" class="services section">
  <div class="container section-title" data-aos="fade-up">
    <h2>{{ $t('services.title') }}</h2>
    <p>{{ $t('services.subtitle') }}</p>
  </div>
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-4 col-md-6" v-for="(item, index) in serviceItems" :key="index" :data-aos-delay="100 * (index + 1)" data-aos="fade-up">
        <div class="service-item position-relative">
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
          <a href="#" class="stretched-link">
            <h3>{{ $t(item.title) }}</h3>
          </a>
          <p>{{ $t(item.desc) }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
const serviceItems = [
  { icon: 'fas fa-heartbeat', title: 'services.items.cardiology.title', desc: 'services.items.cardiology.desc' },
  { icon: 'fas fa-pills', title: 'services.items.pharmacy.title', desc: 'services.items.pharmacy.desc' },
  { icon: 'fas fa-hospital-user', title: 'services.items.patient.title', desc: 'services.items.patient.desc' },
  { icon: 'fas fa-dna', title: 'services.items.lab.title', desc: 'services.items.lab.desc' },
  { icon: 'fas fa-wheelchair', title: 'services.items.rehab.title', desc: 'services.items.rehab.desc' },
  { icon: 'fas fa-notes-medical', title: 'services.items.records.title', desc: 'services.items.records.desc' },
];
</script>
