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

Vue.mixin ({
  methods: {
    formatPrice: function (number) {
        let decimals = 0
        let dec_point = ''
        let thousands_sep = ' '
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }
  }
})
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

