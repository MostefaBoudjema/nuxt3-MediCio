<template>
  <div>

    <HeaderSection />
    <main class="main">
      <div class="page-title">
        <div class="heading">
          <div class="container">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-lg-8">
                <h1 class="heading-title">Service Details</h1>
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
              <li class="current">Service Details</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="service-details" class="service-details section">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="services-list">
                <a href="#" class="active">Web Design</a>
                <a href="#">Software Development</a>
                <a href="#">Product Management</a>
                <a href="#">Graphic Design</a>
                <a href="#">Marketing</a>
              </div>
              <h4>Enim qui eos rerum in delectus</h4>
              <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non
                occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.</p>
            </div>
            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <img src="/img/services.jpg" alt="" class="img-fluid services-img">
              <h3>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h3>
              <p>
                Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque
                consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero.
                Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
              </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> <span>Aut eum totam accusantium voluptatem.</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span>
                </li>
                <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
              </ul>
              <p>
                Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste
                veniam repellat odit. Aut pariatur itaque nesciunt fuga.
              </p>
              <p>
                Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia
                doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus
                eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur
                nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero.
                Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
                explicabo ea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <FooterSection/>
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>
    <!-- <div id="preloader"></div> -->
  </div>
</template>

<script setup>
import FooterSection from '~/components/shared/FooterSection.vue';
import HeaderSection from '~/components/shared/HeaderSection.vue';
definePageMeta({
  layout: 'default'
})
useHead({
  title: 'Service Details - Medicio Bootstrap Template',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  link: [
    // { rel: 'icon', href: '/favicon.png' },
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