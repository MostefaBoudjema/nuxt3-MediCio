<template>
  <div>
    <main class="main">
      <HeroSection />
      <FeaturedServicesSection />
      <CallToActionSection />
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection />
      <AppointmentSection />
      <TabsSection />
      <TestimonialsSection />
      <DoctorsSection />
      <GallerySection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </main>
   
  </div>
</template>

<script setup>
import FooterSection from '~/components/shared/FooterSection.vue';
import HeaderSection from '~/components/shared/HeaderSection.vue';
useHead({
  title: 'Home - Medicio',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  
})

</script> 