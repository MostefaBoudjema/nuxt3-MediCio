<template>
  <div>
    <!-- Header -->
    <HeaderSection />
    <!-- Main content -->
    <main class="main-content">
      <slot />
    </main>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>
<script setup>
import FooterSection from '~/components/shared/FooterSection.vue';
import HeaderSection from '~/components/shared/HeaderSection.vue';

onMounted(() => {
  AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Animation easing
    once: true, // Whether animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them
  });
});
</script>