<template>
  <div :class="{ 'rtl': $i18n.locale === 'ar' }">
    <header id="header" class="header sticky-top">
      <div class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="d-none d-md-flex align-items-center">
            <i class="bi bi-clock me-1"></i> {{ $t('header.schedule') }}
          </div>
          <div class="d-flex align-items-center">
            <i class="bi bi-phone mx-1"></i>
            {{ $t('header.call') }} <span dir="ltr">{{ $t('header.number') }}</span>

          </div>

        </div>
      </div>

      <div class="branding d-flex align-items-center">
        <div class="container position-relative d-flex align-items-center justify-content-center">


          <NuxtLink to="/" class="logo d-flex align-items-center ms-auto">
            <img :src="$i18n.locale === 'ar' ? '/img/logo - rtl.png' : '/img/logo.png'" alt="Logo">
          </NuxtLink>
          
          <nav id="navmenu" class="navmenu">
            <ul :class="{ 'flex-row-reverse': $i18n.locale === 'ar' }">
              <li><a href="#hero" class="active">{{ $t('nav.home') }}</a></li>
              <li><a href="#about">{{ $t('nav.about') }}</a></li>
              <li><a href="#services">{{ $t('nav.services') }}</a></li>
              <li><a href="#tabs">{{ $t('nav.departments') }}</a></li>
              <li><a href="#doctors">{{ $t('nav.doctors') }}</a></li>
              <li><a href="#contact">{{ $t('nav.contact') }}</a></li>
            </ul>
          </nav>
          <a class="cta-btn" href="#appointment">{{ $t('nav.appointment') }}</a>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </div>
      </div>
    </header>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let mobileNavToggleBtn;

function toggleMobileNav() {
  document.body.classList.toggle('mobile-nav-active');
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
}

function closeMobileNav() {
  document.body.classList.remove('mobile-nav-active');
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.classList.add('bi-list');
    mobileNavToggleBtn.classList.remove('bi-x');
  }
}

onMounted(() => {
  mobileNavToggleBtn=document.querySelector('.mobile-nav-toggle');
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', toggleMobileNav);
  }

  // Close nav on any nav link click
  document.querySelectorAll('.navmenu ul li a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });
});

onBeforeUnmount(() => {
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.removeEventListener('click', toggleMobileNav);
  }

  document.querySelectorAll('.navmenu ul li a').forEach(link => {
    link.removeEventListener('click', closeMobileNav);
  });
});
</script>
