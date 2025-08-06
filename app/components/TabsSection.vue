<template>
  <div :class="{'rtl': $i18n.locale === 'ar'}">
    <section id="tabs" class="tabs section">
      <div class="container section-title" data-aos="fade-up">
        <h2>{{ $t('departments.title') }}</h2>
        <p>{{ $t('departments.description') }}</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-1">{{ $t('departments.items.cardiology.title') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">{{ $t('departments.items.neurology.title') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">{{ $t('departments.items.hepatology.title') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tabs-tab-4">{{ $t('departments.items.pediatrics.title') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tabs-tab-5">{{ $t('departments.items.ophthalmology.title') }}</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">
              <div class="tab-pane active show" id="tabs-tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{{ $t('departments.items.cardiology.title') }}</h3>
                    <p class="fst-italic">{{ $t('departments.items.cardiology.subtitle') }}</p>
                    <p>{{ $t('departments.items.cardiology.content') }}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/img/departments-1.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="tabs-tab-2">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{{ $t('departments.items.neurology.title') }}</h3>
                    <p class="fst-italic">{{ $t('departments.items.neurology.subtitle') }}</p>
                    <p>{{ $t('departments.items.neurology.content') }}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/img/departments-2.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="tabs-tab-3">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{{ $t('departments.items.hepatology.title') }}</h3>
                    <p class="fst-italic">{{ $t('departments.items.hepatology.subtitle') }}</p>
                    <p>{{ $t('departments.items.hepatology.content') }}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/img/departments-3.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="tabs-tab-4">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{{ $t('departments.items.pediatrics.title') }}</h3>
                    <p class="fst-italic">{{ $t('departments.items.pediatrics.subtitle') }}</p>
                    <p>{{ $t('departments.items.pediatrics.content') }}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/img/departments-4.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="tabs-tab-5">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{{ $t('departments.items.ophthalmology.title') }}</h3>
                    <p class="fst-italic">{{ $t('departments.items.ophthalmology.subtitle') }}</p>
                    <p>{{ $t('departments.items.ophthalmology.content') }}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/img/departments-5.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
