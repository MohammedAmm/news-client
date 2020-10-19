import Vue from 'vue'
import VueRouter from 'vue-router'
import MyFavorites from '../views/MyFavorites.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      //Simple middleware, To let users only navigate app's data if they are authenticated.
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'signin'
        })
      }
      next()
    } 
  }, 
  {
    path: '/favorites',
    name: 'favorites',
    component: MyFavorites,
    beforeEnter: (to, from, next) => {
      //Simple middleware, To let users only navigate app's data if they are authenticated.
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'signin'
        })
      }
      next()
    } 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
