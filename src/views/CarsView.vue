<template>
    <section class="fleet-section">
      <!-- Head image -->
      <img src=" https://kiara-adams.github.io/images/8088c10b8c5f9aac9d0113a9b266d7cd.jpg" alt="Head Image" class="head-image" />
  
      <h1>OUR FLEET</h1>
      <p>
        Looking for an unforgettable experience? Get behind the wheel of one of our
        many exotic cars for rent. We have the best pricing guaranteed and more fine
        miles included! BoyToy's fleet has your dream car ready and waiting.
      </p>
  
      <div class="button-wrapper">
        <button class="view-all-btn">VIEW ALL CARS</button>
      </div>
  
      <div class="filters">
        <button>SUV</button>
        <button>Luxury</button>
        <button>Sportscar</button>
        <button class="sort">Sort by Price</button>
      </div>
  
      <div class="car-grid">
        <!-- Car 1 -->
        <div class="car-card">
          <img src="" alt="Lexus RX 350" />
          <h3>Lexus RX 350</h3>
          <p>$300 / Per Day</p>
          <button class="drive-now">Drive Now</button>
        </div>
        <!-- Car 2 -->
        <div class="car-card">
          <img src="" alt="Mercedes-Benz GLC" />
          <h3>Mercedes-Benz GLC</h3>
          <p>$200 / Per Day</p>
          <button class="drive-now">Drive Now</button>
        </div>
        <!-- Car 3 -->
        <div class="car-card">
          <img src="" alt="Toyota Highlander" />
          <h3>Toyota Highlander</h3>
          <p>$300 / Per Day</p>
          <button class="drive-now">Drive Now</button>
        </div>
        <!-- Car 4 -->
        <div class="car-card">
          <img src="" alt="Rolls-Royce Dawn" />
          <h3>Rolls-Royce Dawn 2018</h3>
          <p>$1300 / Per Day</p>
          <button class="drive-now">Drive Now</button>
        </div>
        <!-- Car 5 -->
        <div class="car-card">
          <img src="" alt="Mercedes S Class" />
          <h3>Mercedes S Class</h3>
          <p>$400 / Per Day</p>
          <button class="drive-now">Drive Now</button>
        </div>
        <!-- Car 6 - Limited Edition -->
        <div class="car-card">
          <div class="limited-edition">Limited Edition</div>
          <img src="" alt="Lamborghini Aventador" />
          <h3>Lamborghini Aventador</h3>
          <p>$400 / Per Day</p>
          <button class="drive-now">Drive Now</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "FleetSection",
  };
  </script>
  
  <style scoped>
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #000;

        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #000;
            color: #fff;
        }

        .fleet-section {
            text-align: center;
            padding: 50px 0;
        }

        h1 {
            font-size: 4rem;
            font-weight: bold;
            letter-spacing: 5px;
            margin-bottom: 20px;
            color: #fff;
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 40px;
            color: #b3b3b3;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .button-wrapper {
            margin-bottom: 50px;
        }

        .view-all-btn {
            padding: 15px 50px;
            font-size: 1rem;
            background-color: transparent;
            border: 2px solid #ffbf00;
            color: #ffbf00;
            text-transform: uppercase;
            cursor: pointer;
            letter-spacing: 2px;
            transition: all 0.3s ease;
        }

        .view-all-btn:hover {
            background-color: #ffbf00;
            color: #000;
        }

        .filters {
            margin: 20px 0 60px;
            display: flex;
            justify-content: center;
            gap: 30px;
        }

        .filters button {
            background-color: transparent;
            color: #ccc;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.3s ease;
        }

        .filters button:hover,
        .filters .sort:hover {
            color: #ffbf00;
        }

        .filters .sort {
            color: #ffbf00;
        }

        .car-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            max-width: 1300px;
            margin: 0 auto;
        }

        .car-card img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        .car-card h3 {
            font-size: 1.5rem;
            margin-top: 10px;
            color: white;
        }

        .car-card p {
            font-size: 1.2rem;
            color: #ffbf00;
            margin-top: 5px;
        }

        .drive-now {
            background-color: transparent;
            color: #ffbf00;
            font-size: 1rem;
            text-transform: uppercase;
            cursor: pointer;
            border: none;
            letter-spacing: 1px;
            position: relative;
            margin-top: 10px;
        }

        .drive-now::after {
            content: '→';
            margin-left: 10px;
            transition: margin-left 0.3s ease;
        }

        .drive-now:hover::after {
            margin-left: 20px;
        }

        .limited-edition {
            background-color: red;
            color: white;
            font-size: 0.8rem;
            padding: 5px 10px;
            position: absolute;
            top: 10px;
            left: 10px;
            text-transform: uppercase;
            border-radius: 5px;
        }

        /* Head image styling */
        .head-image {
            width: 100%;
            max-height: 500px;
            object-fit: cover;
            margin-bottom: 30px;
        }
  </style>
  