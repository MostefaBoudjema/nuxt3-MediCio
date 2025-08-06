<template>
  <section id="pricing" class="pricing section">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('pricing.title') }}</h2>
      <p>{{ $t('pricing.description') }}</p>
    </div>

    <div class="container">
      <div class="row gy-3">
        <div class="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="pricing-item">
            <h3>{{ $t('pricing.plans.basic.title') }}</h3>
            <h4><sup>$</sup>0<span> / {{ $t('pricing.month') }}</span></h4>
            <ul>
              <li>{{ $t('pricing.plans.basic.features.0') }}</li>
              <li>{{ $t('pricing.plans.basic.features.1') }}</li>
              <li>{{ $t('pricing.plans.basic.features.2') }}</li>
              <li class="na">{{ $t('pricing.plans.basic.features.3') }}</li>
              <li class="na">{{ $t('pricing.plans.basic.features.4') }}</li>
            </ul>
            <div class="btn-wrap">
              <a href="#appointment" class="btn-buy">{{ $t('pricing.bookNow') }}</a>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="pricing-item featured">
            <h3>{{ $t('pricing.plans.standard.title') }}</h3>
            <h4><sup>$</sup>19<span> / {{ $t('pricing.month') }}</span></h4>
            <ul>
              <li>{{ $t('pricing.plans.standard.features.0') }}</li>
              <li>{{ $t('pricing.plans.standard.features.1') }}</li>
              <li>{{ $t('pricing.plans.standard.features.2') }}</li>
              <li>{{ $t('pricing.plans.standard.features.3') }}</li>
              <li class="na">{{ $t('pricing.plans.standard.features.4') }}</li>
            </ul>
            <div class="btn-wrap">
              <a href="#appointment" class="btn-buy">{{ $t('pricing.bookNow') }}</a>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <div class="pricing-item">
            <h3>{{ $t('pricing.plans.premium.title') }}</h3>
            <h4><sup>$</sup>29<span> / {{ $t('pricing.month') }}</span></h4>
            <ul>
              <li>{{ $t('pricing.plans.premium.features.0') }}</li>
              <li>{{ $t('pricing.plans.premium.features.1') }}</li>
              <li>{{ $t('pricing.plans.premium.features.2') }}</li>
              <li>{{ $t('pricing.plans.premium.features.3') }}</li>
              <li>{{ $t('pricing.plans.premium.features.4') }}</li>
            </ul>
            <div class="btn-wrap">
              <a href="#appointment" class="btn-buy">{{ $t('pricing.bookNow') }}</a>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <div class="pricing-item">
            <span class="advanced">{{ $t('pricing.plans.ultimate.badge') }}</span>
            <h3>{{ $t('pricing.plans.ultimate.title') }}</h3>
            <h4><sup>$</sup>49<span> / {{ $t('pricing.month') }}</span></h4>
            <ul>
              <li>{{ $t('pricing.plans.ultimate.features.0') }}</li>
              <li>{{ $t('pricing.plans.ultimate.features.1') }}</li>
              <li>{{ $t('pricing.plans.ultimate.features.2') }}</li>
              <li>{{ $t('pricing.plans.ultimate.features.3') }}</li>
              <li>{{ $t('pricing.plans.ultimate.features.4') }}</li>
            </ul>
            <div class="btn-wrap">
              <a href="#appointment" class="btn-buy">{{ $t('pricing.bookNow') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
