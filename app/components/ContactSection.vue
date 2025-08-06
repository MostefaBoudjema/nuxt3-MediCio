<template>
  <section id="contact" class="contact section">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('contact.title') }}</h2>
      <p>{{ $t('contact.subtitle') }}</p>
    </div>

    <div class="mb-5" data-aos="fade-up" data-aos-delay="200">
      <iframe
        style="border:0; width: 100%; height: 370px;"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12769.59068567829!2d7.7517785!3d36.8995028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa3f2d0bb7f37%3A0xc6e08b0a6f86f3b0!2sAnnaba%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1722698269555!5m2!1sen!2sdz"
        frameborder="0" allowfullscreen loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">

        <!-- Contact Info -->
        <div class="col-lg-6">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-geo-alt"></i>
                <h3>{{ $t('contact.addressTitle') }}</h3>
                <p>{{ $t('contact.address') }}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-telephone"></i>
                <h3>{{ $t('contact.phoneTitle') }}</h3>
                <p>{{ $t('contact.phone') }}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-envelope"></i>
                <h3>{{ $t('contact.emailTitle') }}</h3>
                <p>{{ $t('contact.email') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-6">
          <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="500">
            <div class="row gy-4">
              <div class="col-md-6">
                <input type="text" name="name" class="form-control" :placeholder="$t('contact.form.name')" required>
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" name="email" :placeholder="$t('contact.form.email')" required>
              </div>
              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" :placeholder="$t('contact.form.subject')" required>
              </div>
              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="4" :placeholder="$t('contact.form.message')" required></textarea>
              </div>
              <div class="col-md-12 text-center">
                <div class="loading">{{ $t('contact.form.loading') }}</div>
                <div class="error-message"></div>
                <div class="sent-message">{{ $t('contact.form.success') }}</div>
                <button type="submit">{{ $t('contact.form.send') }}</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>
