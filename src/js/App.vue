<template>
    <div class="page" v-if="isDataLoaded">
        <page-header></page-header>
        <router-view></router-view>
        <page-slick></page-slick>
        <page-form></page-form>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from './layouts/header.vue'
import PageSlick from './layouts/slick.vue'
import PageForm from './layouts/form.vue'
import PageFooter from './layouts/footer.vue'

export default {
    components: {
        PageHeader,
        PageForm,
        PageSlick,
        PageFooter
    },
    data() {
        return {
            isDataLoaded: false
        }
    },
    methods: {
        requestCountries: async function () {
            this.countries = await this.$store.dispatch('GET_COUNTRIES')
        },
        requestTours: async function () {
            this.tours = await this.$store.dispatch('GET_TOURS')
        },
        requestDestinations: async function () {
            this.destinations = await this.$store.dispatch('GET_DESTINATIONS')
        },
        requestContacts: async function () {
            this.contacts = await this.$store.dispatch('GET_CONTACTS')
        },
    },
    created: async function () {
        await this.requestCountries()
        await this.requestTours()
        await this.requestDestinations()
        await this.requestContacts()
        this.isDataLoaded = true
    },
}
</script>

<style lang="scss">
body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
}

button {
    font-family: 'Oswald', sans-serif;
}
 </style>
 