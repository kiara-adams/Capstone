<template>
  <div class="home">
    <!-- Background Video -->
    <video class="video-bg" autoplay muted loop>
      <source src="@/assets/3066447-uhd_4096_2160_24fps.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="overlay"></div>

    <!-- Main Content Section -->
    <section class="content">
      <h1>Shop Our Premium Cars</h1>
      <p>Experience Luxury on Every Drive with Luxe<br>Now 15% Off On All First Rides</p>
      <a href="#" class="btn">Book Now</a>
    </section>

    <!-- Bottom Section -->
    <section class="bottom-section">
      <div class="item">
        <img src="https://img.icons8.com/windows/32/red/truck.png" alt="Icon 1" />
        <h3>Free Shipping</h3>
        <p>On all orders over 75$</p>
      </div>
      <div class="divider"></div>
      <div class="item">
        <img src="https://img.icons8.com/ios-filled/32/FF0000/marker.png" alt="Icon 2" />
        <h3>Tested & Proven</h3>
        <p>Highest quality testing standards</p>
      </div>
      <div class="divider"></div>
      <div class="item">
        <img src="https://img.icons8.com/ios-filled/32/FF0000/warranty.png" alt="Icon 3" />
        <h3>Customer Service</h3>
        <p>Available 24/7</p>
      </div>
    </section>

    <!-- Shop by Category Section -->
    <section class="shop-category-section">
      <h2 class="cate" >Shop by Category</h2>
      <div class="category-cards">
        <div class="category-card">
          <img src="https://kiara-adams.github.io/images/download (27).jpg" alt="Category 1">
          <div class="content">
            <h3>Vintage Porsche</h3>
            <p>Classic designs for your collection.</p>
          </div>
        </div>
        <div class="category-card">
          <img src="https://kiara-adams.github.io/images/download (27).jpg" alt="Category 2">
          <div class="content">
            <h3>Category 2</h3>
            <p>Description for Category 2</p>
          </div>
        </div>
        <div class="category-card">
          <img src="https://kiara-adams.github.io/images/download (27).jpg" alt="Category 3">
          <div class="content">
            <h3>Category 3</h3>
            <p>Description for Category 3</p>
          </div>
        </div>
        <div class="category-card">
          <img src="https://kiara-adams.github.io/images/download (27).jpg" alt="Category 4">
          <div class="content">
            <h3>Category 4</h3>
            <p>Description for Category 4</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
/* Add all your CSS styles here */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Arial, sans-serif;
  color: white;
  overflow-x: hidden;
}

/* Background Video */
.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

/* Main Content Section */
.content {
  text-align: center;
  padding: 150px 20px 50px;
  z-index: 2;
  color: #ffffff;
  position: relative;
}

.content h1 {
  font-size: 50px;
  margin-bottom: 10px;
  color: #ffffff;
}

.cate{
  color: #ffffff;
  text-align: center;
}

.content p {
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff0000;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
}

/* Bottom Section */
.bottom-section {
  display: flex;
  gap: 40px;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  margin-top: 50px;
  color: #ffffff;
}

.bottom-section .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bottom-section .item img {
  width: 50px;
  margin-bottom: 10px;
}

.bottom-section .item h3 {
  font-size: 18px;
  margin: 5px 0;
}

.bottom-section .item p {
  font-size: 14px;
  color: #ffffff;
}

.bottom-section .divider {
  border-left: 1px solid #f00;
  height: 60px;
  margin: 0 20px;
}

/* Shop Section */
.shop-category-section {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(45deg, red, black);
  color: white;
}

.shop-category-section h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #ffffff;
}

.category-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.category-card {
  background-color: #f9f9f9;
  overflow: hidden;
  width: 300px;
  height: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-card .content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  transition: transform 0.3s ease;
  opacity: 0;
}

.category-card:hover .content {
  transform: translateY(0);
  opacity: 1;
}

.category-card h3 {
  font-size: 18px;
  margin: 0;
}

.category-card p {
  font-size: 14px;
  margin: 5px 0 0;
  color: #ffffff;
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.5);
}
</style>
