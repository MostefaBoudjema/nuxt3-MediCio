<template>
  <div :class="{ rtl: $i18n.locale === 'ar' }">
    <footer id="footer" class="footer light-background">
      <div class="container footer-top">
        <div class="row gy-4">
          <!-- About Section -->
          <div
            class="col-lg-4 col-md-6 col-12 footer-about text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
            <NuxtLink to="/" class="logo d-flex align-items-center mb-3">
              <img :src="$i18n.locale === 'ar' ? '/img/logo - rtl.png' : '/img/logo.png'" alt="Logo">
            </NuxtLink>
            <div class="footer-contact pt-3" :class="{ 'text-end': $i18n.locale === 'ar' }"
              :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
              <p>{{ $t('footer.address.line1') }}</p>
              <p>{{ $t('footer.address.line2') }}</p>
              <p class="mt-3">
                <strong>{{ $t('footer.phone.label') }}</strong>
                <span dir="ltr">{{ $t('footer.phone.number') }}</span>
              </p>
              <p>
                <strong>{{ $t('footer.email.label') }}</strong>
                <span>{{ $t('footer.email.address') }}</span>
              </p>
            </div>


            <div class="social-links d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>


          <!-- Link Sections -->
          <div class="col-lg-2 col-md-3 col-12 footer-links text-center text-md-end"
            v-for="(section, index) in linkSections" :key="index">
            <h4>{{ $t(section.title) }}</h4>
            <ul class="list-unstyled d-flex flex-column align-items-center align-items-md-start">
              <li v-for="(link, i) in section.links" :key="i">
                <a :href="link.href">{{ $t(link.text) }}</a>
              </li>
            </ul>

          </div>

        </div>
      </div>

      <!-- Copyright -->
      <div class="container copyright text-center mt-4">
        <p>
          © <span>{{ $t('footer.copyright.year') }}</span>
          <strong class="px-1 sitename">{{ $t('Medicio') }}</strong>
          <span>{{ $t('footer.copyright.rights') }}</span>
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup>
const linkSections=[
  {
    title: 'footer.sections.useful_links.title',
    links: [
      { text: 'footer.sections.useful_links.links.home', href: '#' },
      { text: 'footer.sections.useful_links.links.about', href: '#about' },
      { text: 'footer.sections.useful_links.links.services', href: '#services' },
      { text: 'footer.sections.useful_links.links.terms', href: '#' },
      { text: 'footer.sections.useful_links.links.privacy', href: '#' },
    ]
  },
  {
    title: 'footer.sections.digital_services.title',
    links: [
      { text: 'footer.sections.digital_services.links.web_design', href: '#' },
      { text: 'footer.sections.digital_services.links.web_dev', href: '#' },
      { text: 'footer.sections.digital_services.links.product_mgmt', href: '#' },
      { text: 'footer.sections.digital_services.links.marketing', href: '#' },
      { text: 'footer.sections.digital_services.links.graphic_design', href: '#' },
    ]
  },
  {
    title: 'footer.sections.medical_services.title',
    links: [
      { text: 'footer.sections.medical_services.links.checkups', href: '#' },
      { text: 'footer.sections.medical_services.links.pediatrics', href: '#' },
      { text: 'footer.sections.medical_services.links.cardiology', href: '#' },
      { text: 'footer.sections.medical_services.links.dental', href: '#' },
      { text: 'footer.sections.medical_services.links.emergency', href: '#' },
    ]
  },
  {
    title: 'footer.sections.quick_links.title',
    links: [
      { text: 'footer.sections.quick_links.links.about_us', href: '#' },
      { text: 'footer.sections.quick_links.links.doctors', href: '#' },
      { text: 'footer.sections.quick_links.links.appointments', href: '#' },
      { text: 'footer.sections.quick_links.links.portal', href: '#' },
      { text: 'footer.sections.quick_links.links.contact', href: '#' },
    ]
  }
]
</script>
