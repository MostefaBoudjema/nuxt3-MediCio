<template>
  <header id="header" class="header sticky-top">
    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="d-none d-md-flex align-items-center">
          <i class="bi bi-clock me-1"></i> {{ $t('header.schedule') }}
        </div>
        <div class="d-flex align-items-center">
          <i class="bi bi-phone me-1"></i> {{ $t('header.call') }}
        </div>
      </div>
    </div>
    <div class="branding d-flex align-items-center">
      <div class="container position-relative d-flex align-items-center justify-content-end">
        <NuxtLink to="/" class="logo d-flex align-items-center me-auto">
          <img src="/img/logo.png" alt="">
        </NuxtLink>
        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#hero" class="active">{{ $t('nav.home') }}</a></li>
            <li><a href="#about">{{ $t('nav.about') }}</a></li>
            <li><a href="#services">{{ $t('nav.services') }}</a></li>
            <li><a href="#tabs">{{ $t('nav.departments') }}</a></li>
            <li><a href="#doctors">{{ $t('nav.doctors') }}</a></li>
            <li><a href="#contact">{{ $t('nav.contact') }}</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <a class="cta-btn" href="#appointment">{{ $t('nav.appointment') }}</a>
      </div>
    </div>
  </header>
</template>
