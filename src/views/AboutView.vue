<template>
    <div>
        <section class="hero">
          <div class="text-content">
            <h1>About Our Amazing Cars</h1>
            <p>we have the top cars in the market.</p>
            <a href="#">Explore Services →</a>
          </div>
          <div class="carousel">
            <img src="https://kiara-adams.github.io/images/./download__25_-removebg-preview.png" alt="Car Image 1" class="active" />
          </div>
        </section>

        <section class="services" id="services">
          <h2>Services</h2>
          <div class="service-cards">
            <div class="card">
              <h3>Booking </h3>
              <p>You are able to book a car for a few hour.</p>
            </div>
            <div class="card">
              <h3>Cars</h3>
              <p>We have the lates cars available for booking</p>
            </div>
            <div class="card">
              <h3>Vintage</h3>
              <p>A selection of vintage cars .</p>
            </div>
          </div>
        </section>

        
        <section class="process" id="process">
 
</section>

        <section class="cont" contwrap>
          <div class="text-section">
            <h1><span class="highlight">FIFTH</span>STUDIO <span class="location">PATTAYA</span></h1>
            <h2>Exclusive Car Detailing</h2>
            <p></p>
          </div>
          <div class="image-section">
            <img src="https://kiara-adams.github.io/images/Used_2018_McLaren_720S__For_Sale__Sold____Bentley_Gold_Coast_Chicago_Stock__GC3263-removebg-preview (1).png" alt="Car Detailing" />
          </div>
        </section>

        <section class="tech-specs">
          <h2>Tech Specs</h2>
          <table>
            <tr><th>Engine Displacement:</th><td>5204cc</td></tr>
            <!-- <tr><th>Power:</th><td>601.4 bhp @ 8250 rpm</th></tr> -->
            <tr><th>Torque:</th><td>560 Nm @ 6500 rpm</td></tr>
            <tr><th>Drive Type:</th><td>AWD</td></tr>
          </table>
        </section>

        <footer>
          <p>&copy; 2024 Car Wash Service. All rights reserved.</p>
          <p><a href="tel:1234567890">Contact Us: (123) 456-7890</a></p>
        </footer>


    </div>
</template>

<script>
export default {
  mounted() {
    // Carousel functionality
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;

    setInterval(() => {
      carouselImages[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
      carouselImages[currentImageIndex].classList.add('active');
    }, 3000);
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

[contwrap]{
  margin-right: 5rem !important;
  padding-inline: 0 !important;
  background-color: black;
}

body, html {
  font-family: Arial, sans-serif;
}




.hero {

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px;
  background: linear-gradient(45deg, rgb(0, 0, 0), rgb(255, 0, 0));
  
}

.hero .text-content {
  max-width: 50%;
}

.hero h1 {
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
}

.hero p {
  color: white;
  margin-bottom: 20px;
}

.hero a {
  text-decoration: none;
  background: white;
  color: black;
  padding: 12px 25px;
  border-radius: 5px;
}

.carousel {
  width: 50%;
  position: relative;
}

.carousel img {
  width: 100%;
  border-radius: 10px;
  display: none;
}

.carousel img.active {
  display: block;
}

    /* Services Section */
    
    .services {
      text-align: center;
      padding: 50px;
      background-color: #000000;
    }
    
    .services h2 {
      font-size: 36px;
      margin-bottom: 40px;
      color: #ffffff;
    }

    .services .service-cards {
      display: flex;
      justify-content: center;
      gap: 30px;
    }

    .services .card {
      border: 2px solid #ddd;
      color: #ffffff;
      padding: 20px;
      width: 300px;
      border-radius: 10px;
      background-color: #000000;
    }

    .services .card h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }
.card {
  border: 2px solid #ddd;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
}

.card h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.process {
  background-image: url('https://kiara-adams.github.io/images/To the love of all things Porsche.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 300px 0;
}

.cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  /* padding-left: 5rem !important; */
  background-color: black;
  /* margin */
}

.text-section h1 {
  font-size: 48px;
  color: white;
}
.image-section{
  background-color: black;
}

.image-section img {
  width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  background-color:black ;
}

.tech-specs {
  background-color: black;
  color: white;
  padding: 50px;
}

footer {
  background-color: black;
  color: white;
  text-align: center;
  padding: 30px;
}
</style>
