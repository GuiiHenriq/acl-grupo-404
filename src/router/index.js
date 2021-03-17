import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../pages/Products.vue'
import LoginUser from '../pages/LoginUser.vue'
import RegisterUser from '../pages/RegisterUser.vue'
import Dashboard from '../pages/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/register',
    name: 'RegisterUser',
    component: RegisterUser
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
