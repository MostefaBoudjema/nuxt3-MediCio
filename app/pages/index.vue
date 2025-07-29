<template>
  <div>
    <header id="header" class="header sticky-top">
      <div class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="d-none d-md-flex align-items-center">
            <i class="bi bi-clock me-1"></i> Monday - Saturday, 8AM to 10PM
          </div>
          <div class="d-flex align-items-center">
            <i class="bi bi-phone me-1"></i> Call us now +1 5589 55488 55
          </div>
        </div>
      </div>
      <div class="branding d-flex align-items-center">
        <div class="container position-relative d-flex align-items-center justify-content-end">
          <a href="/" class="logo d-flex align-items-center me-auto">
            <img src="/img/logo.png" alt="">
          </a>
          <nav id="navmenu" class="navmenu">
            <ul>
              <li><a href="#hero" class="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#departments">Departments</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <a class="cta-btn" href="#appointment">Make an Appointment</a>
        </div>
      </div>
    </header>
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
    <FooterSection />
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    
  </div>
</template>

<script setup>
useHead({
  title: 'Index - Medicio Bootstrap Template',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
    { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/vendor/bootstrap-icons/bootstrap-icons.css' },
    { rel: 'stylesheet', href: '/vendor/aos/aos.css' },
    { rel: 'stylesheet', href: '/vendor/fontawesome-free/css/all.min.css' },
    { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
    { rel: 'stylesheet', href: '/vendor/swiper/swiper-bundle.min.css' },
    { rel: 'stylesheet', href: '/css/main.css' }
  ],
  script: [
    { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
    { src: '/vendor/php-email-form/validate.js', body: true },
    { src: '/vendor/aos/aos.js', body: true },
    { src: '/vendor/glightbox/js/glightbox.min.js', body: true },
    { src: '/vendor/purecounter/purecounter_vanilla.js', body: true },
    { src: '/vendor/swiper/swiper-bundle.min.js', body: true },
    { src: '/js/main.js', body: true }
  ]
})
</script> 