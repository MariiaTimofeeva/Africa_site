import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './pages/main.vue'
import Country from './pages/country.vue'
import Destination from './pages/destination.vue'
import Tour from './pages/tour.vue'
import Information from './pages/information.vue'
import Choice from './pages/choice.vue'
import Contacts from './pages/contacts.vue'
import '../../node_modules/slick-carousel/slick/slick.css'
import Vuex from 'vuex'
import {store} from './store'
import '../scss/variables.scss'


Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [{
    path: '/',
    component: Main
  },
  {
    path: '/countries/:countryName',
    component: Country
  },
  {
    path: '/destinations/:destinationName',
    component: Destination
  },
  {
    path: '/tours/:tourName',
    component: Tour
  },
  {
    path: '/informations/:informationName',
    component: Information
  },
  {
    path: '/choice',
    component: Choice
  },
  {
    path: '/contacts',
    component: Contacts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
})

// для создание фреймворка - пишем NEW... 
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

