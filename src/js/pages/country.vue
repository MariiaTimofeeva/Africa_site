<template>
    <div>
        <div class="country-component">
            <div class="country-column">
                <div class="country-img" :style="'background-image:url(\'/img/'+country.picture+'\')'"></div>
            </div>
            <div class="country-column">
                <div class="country-title">{{country.name}}</div>
                <hr class="country-hr">
                <div class="country-about">{{country.description}}</div>
                <div>
                    <button type="button" class="country-btn"><a class="country-btn-a" href="#form">Связаться с нами</a></button>
                </div>
            </div>
        </div>
        <tour-cards :tours="tour"></tour-cards>
    </div>
</template>

<script>
import tourCards from '../elements/tourCards.vue'
import axios from 'axios'
export default {
    components: {
        tourCards
    },
    data() {
        return {

        }
    },
    computed: {
        countriesList: function () {
            return this.$store.state.countries;
        },
        toursList: function () {
            return this.$store.state.tours;
        },
        countryName: function () {
            return this.$route.params.countryName
        },
        country: function () {
            let element = this.countryName
            return this.countriesList.find(function (item) {
                return element == item.link
            })
        },
        tour: function () {
            let element = this.country.id
            return this.toursList.filter(function (item) {
                return element == item.countryId
            })
        }
    },
    methods: {
        
    },
}
</script>

    
<style lang="scss">

.country-component {
    display: flex;
}

.country-column {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

.country-img {
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.country-title {
    font-size: 3em;
    margin-top: 50px;
    text-transform: uppercase;
    color: $mainColorBrown;
}

.country-hr {
    width: 600px;
}

.country-about {
    margin: 0px 70px 70px 70px;
}

.country-btn {
    display: flex;
    justify-content: center;
    height: 100px;
    background-color: $mainColorOrange;
    text-transform: uppercase;
    font-size: 2em;
    color: $mainColorWhite;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
}

.country-btn-a,
.country-btn-a:hover,
.country-btn-a:active {
    color: $mainColorWhite;
    border: none;
    outline: none;
}

.country-btn-a:after {
    display: block;
    content: "";
    height: 2px;
    width: 0%;
    background-color: $mainColorWhite;
    transition: width .3s ease-in-out;
}

.country-btn:hover .country-btn-a:after {
    width: 100%;
}

@media screen and (max-width:1200px) {
    .country-component {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .country-column {
        width: 100%;
    }

    .country-about {
        margin: 20px 50px 50px 50px;
    }
}

@media screen and (max-width:450px) {
    .country-img {
        height: 300px;
    }

    .country-title {
        margin-top: 30px;
        font-size: 2em;
    }

    .country-about {
        margin: 10px 30px 30px 30px;
    }
}

</style>

