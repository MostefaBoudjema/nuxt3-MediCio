<template>
  <section id="appointment" class="appointment section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>MAKE AN APPOINTMENT</h2>
      <p>Schedule your visit with one of our experienced specialists. Fast, easy, and secure.</p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
        <div class="row">
          <div class="col-md-4 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Full Name" required>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email Address" required>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone Number" required>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group mt-3">
            <input type="datetime-local" name="date" class="form-control datepicker" id="date" placeholder="Preferred Date & Time" required>
          </div>
          <div class="col-md-4 form-group mt-3">
            <select name="department" id="department" class="form-select" required>
              <option value="">Choose Department</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Dentistry">Dentistry</option>
            </select>
          </div>
          <div class="col-md-4 form-group mt-3">
            <select name="doctor" id="doctor" class="form-select" required>
              <option value="">Choose Doctor</option>
              <option value="Dr. Sarah Benali">Dr. Sarah Benali</option>
              <option value="Dr. Karim Ait">Dr. Karim Ait</option>
              <option value="Dr. Lina Kacem">Dr. Lina Kacem</option>
            </select>
          </div>
        </div>
        <div class="form-group mt-3">
          <textarea class="form-control" name="message" rows="5" placeholder="Additional Notes or Concerns (optional)"></textarea>
        </div>
        <div class="mt-3">
          <div class="loading">Processing your request...</div>
          <div class="error-message"></div>
          <div class="sent-message">Your appointment request has been sent successfully. We'll contact you shortly to confirm.</div>
          <div class="text-center"><button type="submit">Make an Appointment</button></div>
        </div>
      </form>
    </div>
  </section>
</template>
