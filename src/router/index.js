import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Torneos from '../views/AdminTorneos.vue'
import Partidos from '../views/AdminPartidos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/torneos',
    name: 'Torneos',
    component: Torneos
  },
  {
    path: '/partidos',
    name: 'Partidos',
    component: Partidos
  }
]

const router = new VueRouter({
  routes
})

export default router
