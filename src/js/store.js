import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        countries: [],
        tours: [],
        destinations: [],
        information: [],
        contacts: [],
        menu: [],
        popularToursIds: []
    },
    getters: {},
    mutations: {
        SAVE_COUNTRIES: (state, values) => {
            state.countries = values
        },
        SAVE_TOURS: (state, values) => {
            state.tours = values
        },
        SAVE_DESTINATIONS: (state, values) => {
            state.destinations = values
        },
        SAVE_INFORMATION: (state, values) => {
            state.information = values
        },
        SAVE_CONTACTS: (state, values) => {
            state.contacts = values
        },
        SAVE_MENU: (state, values) => {
            state.menu = values
        },
        SAVE_POPULARTOURSIDS: (state, values) => {
            state.popularToursIds = values
        }
    },
    actions: {
        GET_COUNTRIES: async (context) => {
            let countries = await axios.get('http://localhost:3000/countryItems');
            context.commit('SAVE_COUNTRIES', countries.data)
        },
        GET_TOURS: async (context) => {
            let tours = await axios.get('http://localhost:3000/toursItems');
            context.commit('SAVE_TOURS', tours.data)
        },
        GET_DESTINATIONS: async (context) => {
            let destinations = await axios.get('http://localhost:3000/destinationItems');
            context.commit('SAVE_DESTINATIONS', destinations.data)
        },
        GET_INFORMATION: async (context) => {
            let information = await axios.get('http://localhost:3000/informationItems');
            context.commit('SAVE_INFORMATION', information.data)
        },
        GET_CONTACTS: async (context) => {
            let contacts = await axios.get('http://localhost:3000/contactsItems');
            context.commit('SAVE_CONTACTS', contacts.data)
        },
        GET_MENU: async (context) => {
            let menu = await axios.get('http://localhost:3000/menuItems');
            context.commit('SAVE_MENU', menu.data)
        },
        GET_POPULARTOURSIDS: async (context) => {
            let popularToursIds = await axios.get('http://localhost:3000/popularToursIds');
            context.commit('SAVE_POPULARTOURSIDS', popularToursIds.data)
        },
    },
});