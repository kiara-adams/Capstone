<template>
  <div class="contact-container">
        <div class="contact-content">
          <div class="form-section">
            <h2>Get in touch</h2>
            <p>Send a Message</p>
            <form action="https://formspree.io/f/xrbzvywg" method="POST">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="interest">Interested In</label>
                <input type="text" id="interest" name="interest">
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
      

      <!-- Vertical Line Separator -->
      <div class="vertical-line"></div>

      <div class="contact-info">
        <h3>Contact Info</h3>
        <p>123 Parkway Lansdown</p>
        <p>087 765 6543</p>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <p>Luxe-Drive123-@gmail.com</p>

        <!-- Adding an image under contact information -->
        <img src="https://kiara-adams.github.io/images/download__14_-removebg-preview.png" alt="Descriptive Alt Text" class="contact-image">
      </div>
    </div>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.7835867656235!2d18.482408415153257!3d-33.94723178061999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dccd8b6e776eb27%3A0x5a6c0cbb2f11e1ef!2s315%20Imam%20Haroon%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207970!5e0!3m2!1sen!2sus!4v1692111426872!5m2!1sen!2sus"
        width="100%" height="250" allowfullscreen="" loading="lazy">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        interest: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted', this.formData);
      // You can integrate actual form submission logic here if needed
    }
  }
};
</script>

<!-- Global styles -->
<style scoped>

/* Apply the global background styling */
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to bottom right, black, red);
  color: #ffffff;
  margin: 0;
  padding: 0;
  padding-top: 300px ;
}




.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}
.contact-content {
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  color: #ffffff;
}
.form-section {
  width: 50%;
}
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: white; }
}
.form-section h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  border-right: 2px solid white;
  width: 0;
  animation: typewriter 3s steps(30, end) forwards, blink-caret 0.75s step-end infinite;
}
.form-section p {
  font-size: 18px;
  margin-bottom: 30px;
  color: white
  ;
}
.form-group {
  margin-bottom: 30px;
}
.form-group label {
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 5px 0;
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  font-size: 16px;
  color: white;
}
.form-group textarea {
  resize: none;
}
button[type="submit"] {
  background-color: white;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}
button[type="submit"]:hover {
  background-color: #e60000;
}
.vertical-line {
  width: 1px;
  background-color: white;
  height: auto;
  margin: 0 20px;
}
.contact-info {
  width: 40%;
}
.contact-info h3 {
  font-size: 24px;
  margin-bottom: 20px;
}
.contact-info p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
}
.contact-info a {
  color: white;
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}
.map {
  margin-top: 40px;
}
footer {
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
}
footer h3 {
  font-size: 24px;
  margin-bottom: 10px;
}
footer p {
  font-size: 14px;
}
.social-icons a {
  color: white;
  margin-right: 10px;
  font-size: 16px;
}
.contact-image {
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
}
.contact-image:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  filter: brightness(1.15);
}
.social-icons {
  margin-top: 20px;
}
.social-icons a {
  color: white;
  margin-right: 10px;
  font-size: 24px;
  text-decoration: none;
}
.social-icons a:hover {
  color: #e60000;
}
</style>