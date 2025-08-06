<script setup>
</script>

<template>
  <div :class="{'rtl': $i18n.locale === 'ar'}">
    <footer id="footer" class="footer light-background">
      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <NuxtLink href="/" class="logo d-flex align-items-center">
              <span class="sitename">Medicio</span>
            </NuxtLink>
            <div class="footer-contact pt-3">
              <p>{{ $t('footer.address.line1') }}</p>
              <p>{{ $t('footer.address.line2') }}</p>
              <p class="mt-3"><strong>{{ $t('footer.phone.label') }}</strong> <span>{{ $t('footer.phone.number') }}</span></p>
              <p><strong>{{ $t('footer.email.label') }}</strong> <span>{{ $t('footer.email.address') }}</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>{{ $t('footer.sections.useful_links.title') }}</h4>
            <ul>
              <li><a href="#">{{ $t('footer.sections.useful_links.links.home') }}</a></li>
              <li><a href="#about">{{ $t('footer.sections.useful_links.links.about') }}</a></li>
              <li><a href="#services">{{ $t('footer.sections.useful_links.links.services') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.useful_links.links.terms') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.useful_links.links.privacy') }}</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>{{ $t('footer.sections.digital_services.title') }}</h4>
            <ul>
              <li><a href="#">{{ $t('footer.sections.digital_services.links.web_design') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.digital_services.links.web_dev') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.digital_services.links.product_mgmt') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.digital_services.links.marketing') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.digital_services.links.graphic_design') }}</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>{{ $t('footer.sections.medical_services.title') }}</h4>
            <ul>
              <li><a href="#">{{ $t('footer.sections.medical_services.links.checkups') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.medical_services.links.pediatrics') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.medical_services.links.cardiology') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.medical_services.links.dental') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.medical_services.links.emergency') }}</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>{{ $t('footer.sections.quick_links.title') }}</h4>
            <ul>
              <li><a href="#">{{ $t('footer.sections.quick_links.links.about_us') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.quick_links.links.doctors') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.quick_links.links.appointments') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.quick_links.links.portal') }}</a></li>
              <li><a href="#">{{ $t('footer.sections.quick_links.links.contact') }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>© <span>{{ $t('footer.copyright.year') }}</span>
          <strong class="px-1 sitename">Medicio</strong>
          <span>{{ $t('footer.copyright.rights') }}</span>
        </p>
      </div>
    </footer>
  </div>
</template>
