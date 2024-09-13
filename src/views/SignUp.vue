<template>
    <div class="container mt-5">
        <div class="row">
            <h2 class="display-2">Register</h2>
        </div>
        <div class="wrap d-flex flex-row justify-content-center">
            <div class="row" style="width: 50%;">
                <form class="form" @submit.prevent="register">
                    <div class="form-control-wrapper">
                        <span>
                            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                                required />
                        </span>
                    </div>
                    <div class="form-control-wrapper">
                        <span>
                            <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                                required />
                        </span>
                    </div>
                    <div class="form-control-wrapper">
                        <span>
                            <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
                        </span>
                    </div>
                    <div class="form-control-wrapper">
                        <span>
                            <input class="form-control" type="text" placeholder="Gender" v-model="payload.Gender" required />
                        </span>
                    </div>
                    <div class="form-control-wrapper">
                        <span>
                            <input class="form-control" type="email" placeholder="email" v-model="payload.emailAdd"
                                required />
                        </span>
                    </div>
                    <div class="form-control-wrapper">
                        <span>
                            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                                required />
                        </span>
                    </div>
                    <div class="form-control-wrapper">
                        <span>
                            <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile"
                                required />
                        </span>
                    </div>
                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                        <button type="submit" class="btn btn-success">Submit</button>
                        <button type="reset" class="btn btn-dark">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import store from '@/store';
import { reactive } from 'vue';
// import { useStore } from 'vuex';
// const store = useStore()
const payload = reactive({
    // "firstName": "John",
    // "lastName": "Doe",
    // "userAge": 28,
    // "Gender": "Male",
    // "userRole": "admin",
    // "emailAdd": "john.doe@example.com",
    // "userPass": "password123",
    // "userProfile": "Profile for John Doe"
    
    firstName: '',
    lastName: '',
    userAge: '',
    Gender: '',
    emailAdd: '',
    userPass: '',
    userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
})
function register() {
    console.log({...payload});
    store.dispatch('register', {...payload})
}
</script>

<style scoped></style>