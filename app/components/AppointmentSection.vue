<template>
  <section id="appointment" class="appointment section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('appointment.title') }}</h2>
      <p>{{ $t('appointment.subtitle') }}</p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
        <div class="row">
          <div class="col-md-4 form-group">
            <input type="text" name="name" class="form-control" id="name" :placeholder="$t('appointment.name')" required>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input type="email" class="form-control" name="email" id="email" :placeholder="$t('appointment.email')" required>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input type="tel" class="form-control" name="phone" id="phone" :placeholder="$t('appointment.phone')" required>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group mt-3">
            <input type="datetime-local" name="date" class="form-control datepicker" id="date" :placeholder="$t('appointment.datetime')" required>
          </div>
          <div class="col-md-4 form-group mt-3">
            <select name="department" id="department" class="form-select" required>
              <option value="">{{ $t('appointment.department.choose') }}</option>
              <option value="General Medicine">{{ $t('appointment.department.general') }}</option>
              <option value="Pediatrics">{{ $t('appointment.department.pediatrics') }}</option>
              <option value="Dermatology">{{ $t('appointment.department.dermatology') }}</option>
              <option value="Dentistry">{{ $t('appointment.department.dentistry') }}</option>
            </select>
          </div>
          <div class="col-md-4 form-group mt-3">
            <select name="doctor" id="doctor" class="form-select" required>
              <option value="">{{ $t('appointment.doctor.choose') }}</option>
              <option value="Dr. Sarah Benali">{{ $t('appointment.doctor.sarah') }}</option>
              <option value="Dr. Karim Ait">{{ $t('appointment.doctor.karim') }}</option>
              <option value="Dr. Lina Kacem">{{ $t('appointment.doctor.lina') }}</option>
            </select>
          </div>
        </div>
        <div class="form-group mt-3">
          <textarea class="form-control" name="message" rows="5" :placeholder="$t('appointment.notes')"></textarea>
        </div>
        <div class="mt-3">
          <div class="loading">{{ $t('appointment.loading') }}</div>
          <div class="error-message"></div>
          <div class="sent-message">{{ $t('appointment.success') }}</div>
          <div class="text-center">
            <button type="submit">{{ $t('appointment.submit') }}</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
