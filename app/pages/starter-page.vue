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
              <li><a href="/">Home</a></li>
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
          <a class="cta-btn" href="/index#appointment">Make an Appointment</a>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="page-title">
        <div class="heading">
          <div class="container">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-lg-8">
                <h1 class="heading-title">Starter Page</h1>
                <p class="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
                  odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
                  debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
                  ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav class="breadcrumbs">
          <div class="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li class="current">Starter Page</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="starter-section" class="starter-section section">
        <div class="container" data-aos="fade-up">
          <p>Use this page as a starter for your own custom pages.</p>
        </div>
      </section>
    </main>
    <footer id="footer" class="footer light-background">
      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="/" class="logo d-flex align-items-center">
              <span class="sitename">Medicio</span>
            </a>
            <div class="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <!-- ...rest of the footer... -->
        </div>
      </div>
      <div class="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">Medicio</strong> <span>All Rights Reserved</span></p>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </footer>
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    <div id="preloader"></div>
  </div>
</template>

<script setup>
useHead({
  title: 'Starter Page - Medicio Bootstrap Template',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap' },
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