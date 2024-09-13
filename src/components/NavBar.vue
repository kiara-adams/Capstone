<template>
  <div class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand logo">
        <img src=" https://kiara-adams.github.io/images/LUXE-removebg-preview.png" alt="Logo" width="90" /> <!-- Replace with your logo -->
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Cars" class="nav-link">Shop Cars</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/premium" class="nav-link">Premium Area</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center ms-auto search">
          <input type="text" class="form-control" placeholder="Search..." />
          <router-link to="/login" class="btn btn-outline-light ms-2">Log In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  color: white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: border-color 0.3s ease;
}

.navbar::before,
.navbar::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgb(243, 0, 0);
  transition: transform 0.3s ease;
}

.navbar::before {
  top: 0;
  transform: scaleX(0);
  transform-origin: left;
}

.navbar::after {
  bottom: 0;
  transform: scaleX(0);
  transform-origin: right;
}

.navbar:hover::before,
.navbar:hover::after {
  transform: scaleX(1);
}

.navbar .logo img {
  margin-right: 10px;
}

.navbar-nav .nav-link {
  color: white !important;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #ff0000 !important;
}

.search input[type="text"] {
  border-radius: 5px;
  border: 1px solid #ccc;
}

.search input[type="text"]:focus {
  outline: none;
  border-color: #ef0909;
}

.search .btn-outline-light {
  color: white;
  border-color: white;
}

.search .btn-outline-light:hover {
  color: #ff0000;
  border-color: #ff0000;
}
</style>
