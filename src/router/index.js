import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUp from '@/views/SignUp.vue'
import AdminView from '@/views/AdminView.vue'
import ContactView from '@/views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Cars',
    name: 'Cars',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarsView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },


  {
    path : '/register',
    name : 'register',
    component : SignUp
  },

  {
    path : '/admin',
    name : 'admin',
    component : AdminView
  },
  {
    path : '/contact',
    name : 'contact',
    component : ContactView
  }

  // {
  //   path: '/profile',
  //   name : 'profile',
  //   component : 
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
