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


</style>





