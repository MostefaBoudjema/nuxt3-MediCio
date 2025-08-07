<template>
  <div :class="{ rtl: $i18n.locale === 'ar' }">
    <section id="stats" class="stats section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6" v-for="(item, index) in stats" :key="index">
            <div class="stats-item row align-items-center w-100 h-100">
              <div class="col-3 d-flex justify-content-center">
                <i :class="item.icon"></i>
              </div>
              <div class="col-9">
                <span class="purecounter d-block" :data-purecounter-start="0" :data-purecounter-end="item.count"
                  data-purecounter-duration="1"></span>
                <p class="mb-0">{{ $t(item.label) }}</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats=[
  { icon: 'fas fa-user-md', count: 25, label: 'stats.doctors' },
  { icon: 'far fa-hospital', count: 15, label: 'stats.departments' },
  { icon: 'fas fa-flask', count: 8, label: 'stats.labs' },
  { icon: 'fas fa-award', count: 150, label: 'stats.awards' },
];
</script>
