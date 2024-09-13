<template>
    <section class="sect">
    <div class="container mt-5">
        <div class="row">
            <h2 class="display-2">Login</h2>
        </div>
        <div class="row my-2 justify-content-center">
            <form class="form" @submit.prevent="login">
                <div class="form-control-wrapper">
                    <span>Email address
                        <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd"
                            pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>Password
                        <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass"
                            minlength="4" required />
                    </span>
                </div>
                <div class="form-control-wrapper d-md-flex d-block justify-content-end">
                    <button type="submit" class="btn btn-success">Login</button>
                </div>
                <div class="form-control-wrapper">
                    <div class="account justify-content-between d-md-flex d-block">
                        <div class="item">
                            <button class="btn btn-success">Forgot Password</button>
                        </div>
                        <div class="item">
                            <button class="btn btn-dark">Sign up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'

const store = useStore()
/* Use reactive when defining a reference or dynamic data type.
And use ref for primitive data types
*/
const payload = reactive({
    emailAdd: '',
    userPass: ''
})
function login() {
    store.dispatch('login', {...payload})
}
</script>



<style scoped>
/* Container styling with background image */
.sect{
    padding-top: 300px;
}

/* Background image for the whole page */
body {
    background: url('https://your-background-image-url.jpg') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed; /* Makes sure the background image stays in place */
    margin: 0;
    padding: 0;
    overflow: hidden;
}

/* Transparent container styling */
.container {
    background-color: rgba(0, 0, 0, 0.6); /* Transparent black */
    padding: 40px 40px 80px; /* Increased bottom padding */
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
    color: white;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5); /* Soft shadow for depth */
    animation: fadeIn 1.2s ease-out;
    backdrop-filter: blur(10px); /* Blurs background slightly behind the container */
}

/* Title styling */
h2 {
    color: #d73035;
    text-align: center;
    font-weight: bold;
    letter-spacing: 3px;
    animation: slideIn 0.8s ease-out;
    text-transform: uppercase;
    margin-bottom: 20px;
}

/* Form control styling */
.form-control-wrapper {
    position: relative;
    margin: 20px 0;
}

.form-control-wrapper span {
    display: block;
    font-weight: bold;
    color: #d73035;
    margin-bottom: 12px;
    letter-spacing: 1px;
}

/* Form inputs styling with glow effect on focus */
.form-control {
    background-color: rgba(255, 255, 255, 0.1); /* Transparent input fields */
    color: white;
    border: 2px solid #d73035;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus {
    border-color: #ff5a5f;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 15px rgba(255, 90, 95, 0.6);
    outline: none;
}

/* Button styling with subtle hover animation */
.btn-success {
    background-color: #d73035;
    color: white;
    padding: 12px 25px;
    border-radius: 5px;
    transition: background-color 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-success:hover {
    background-color: #ff5a5f;
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(255, 90, 95, 0.5);
}

/* Sign up and Forgot password buttons */
.btn-dark {
    background-color: #444;
    color: white;
    border: 2px solid #d73035;
    padding: 12px 25px;
    border-radius: 5px;
    transition: background-color 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-dark:hover {
    background-color: #d73035;
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(255, 90, 95, 0.5);
}

/* Flex styling for account actions */
.account {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.item {
    margin: 10px 0;
}

/* Animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>



