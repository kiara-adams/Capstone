<template>
  <div class="container" :class="{ 'right-panel-active': isSignUpActive }" id="container">
    <!-- Sign-up container -->
    <div class="form-container sign-up-container">
      <form @submit.prevent="register">
        <h1>Create Account</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
          <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registration:</span>
        <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName" required />
        <input class="form-control" type="text" placeholder="Last name" v-model="payload.lastName" required />
        <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
        <input class="form-control" type="text" placeholder="Gender" v-model="payload.Gender" required />
        <input class="form-control" type="email" placeholder="Email" v-model="payload.emailAdd" required />
        <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass" required />
        <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile" required />
        <button type="submit" class="btn btn-success">Submit</button>
        <button type="reset" class="btn btn-dark">Reset</button>
      </form>
    </div>
    <!-- Sign-in container -->
    <div class="form-container sign-in-container">
      <form @submit.prevent="login">
        <h1>Welcome Back!</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
          <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account:</span>
        <input class="form-control" type="email" placeholder="Email" v-model="loginEmail" required />
        <input class="form-control" type="password" placeholder="Password" v-model="loginPassword" required />
        <button type="submit" class="btn btn-success">Sign In</button>
      </form>
    </div>
    <!-- Overlay -->
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button class="ghost" @click="toggleSignUp">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your details and start your journey with us</p>
          <button class="ghost" @click="toggleSignUp">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import store from '@/store';

const payload = reactive({
  firstName: '',
  lastName: '',
  userAge: '',
  Gender: '',
  emailAdd: '',
  userPass: '',
  userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
});

const loginEmail = ref('');
const loginPassword = ref('');
const isSignUpActive = ref(true);

function register() {
  console.log({ ...payload });
  store.dispatch('register', { ...payload });
}

function login() {
  console.log({ email: loginEmail.value, password: loginPassword.value });
  store.dispatch('login', { email: loginEmail.value, password: loginPassword.value });
}

function toggleSignUp() {
  isSignUpActive.value = !isSignUpActive.value;
}
</script>

<style scoped>
/* Include the styles here or import from a separate CSS file */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #834545;
  margin: 0;
}

.container {
  background: linear-gradient(to right, #da0000, #000000);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 900px;
  overflow: hidden;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  transition: all 0.6s ease-in-out;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.sign-in-container {
  left: 0;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 2;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: url('https://kiara-adams.github.io/images/To the love of all things Porsche.jpg') no-repeat center center/cover;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

button {
  border-radius: 20px;
  border: 1px solid #ff0000;
  background-color: #ff0000;
  color: #fff;
  padding: 12px 45px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

input {
  border: none;
  border-bottom: 2px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  outline: none;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.social-container {
  margin: 20px 0;
}

.social {
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  color: #333;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}

.social:hover {
  background-color: #ddd;
}
</style>