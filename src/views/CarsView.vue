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
      <div class="carwrapper" carwrapper>
        <CardComp card v-for="(car, index) in cars" :key="index">
          <template #cardBody >
            <img class="img-fluid" :src="car.carURL" :alt="car.carName"  loading="lazy"  />
            <h3>{{ car.carName }}</h3>
            <p>R{{ car.amount }} / Per Day</p>
            <button class="drive-now">Drive Now</button>
          </template>
        </CardComp>
      </div>
    </section>
  </template>
  
  <script setup>
  import CardComp from '@/components/CardComp.vue';
  import store from '@/store';
  import { computed, onMounted } from 'vue';

  const cars = computed(
    () => store.state.cars
  )

  
  
  onMounted(()=>{ store.dispatch('fetchProducts')})



  </script>
  
  <style scoped>

      [card]{
        min-width: 300px;
      }

     .car-card img {
        width: 100%; /* Image takes the full width of its container */
        height: 350px; /* Set a fixed height for consistency */
        object-fit: cover; /* Ensures the image is cropped while maintaining its aspect ratio */
        border-radius: 10px;
        margin-bottom: 10px;
      }

     .carwrapper {

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; 
        width: 75% !important;
        margin: 0 auto;
      }

      @media (max-width: 1024px) {
  .carwrapper > * {
    flex-basis: calc(50% - 20px); /* 2 items per row on medium screens */
  }
}

@media (max-width: 800px) {

  .carwrapper{
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center; /* 1 item per row on smaller screens */
  }
}

.carwrapper > * {
  flex-basis: calc(33.33% - 20px); /* Ensures 3 items per row with spacing */
  margin-bottom: 20px; /* Spacing between rows */
}
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
            border: 2px solid #ff0000;
            color: #ff0000;
            text-transform: uppercase;
            cursor: pointer;
            letter-spacing: 2px;
            transition: all 0.3s ease;
        }

        .view-all-btn:hover {
            background-color: #ff0000;
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
            color: #ff0000;
        }

        .filters .sort {
            color: #ff0000;
        }

        .car-card h3 {
            font-size: 1.5rem;
            margin-top: 10px;
            color: white;
        }

        .car-card p {
            font-size: 1.2rem;
            color: #ff0000;
            margin-top: 5px;
        }

        .drive-now {
            background-color: transparent;
            color: #ff0000;
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
  