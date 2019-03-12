<template>
    <div>
        <div class="destination-component">
            <div class="destination-column">
                <div class="destination-img" :style="'background-image:url(\'/img/'+destination.picture+'\')'"></div>
            </div>
            <div class="destination-column">
                <div class="destination-icon" :style="'background-image:url(\'/img/'+destination.icon+'\')'"></div>
                <div class="destination-title">{{destination.name}}</div>
                <hr class="destination-hr">
                <div class="destination-about">{{destination.description2}}</div>
                <div>
                    <button type="button" class="destination-btn">
                        <a class="destination-btn-a" href="#form">Связаться с нами</a>
                    </button>
                </div>
            </div>
        </div>
        <tour-cards :tours="tours"></tour-cards>
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
        toursList: function () {
            return this.$store.state.tours;
        },
        destinationsList: function () {
            return this.$store.state.destinations;
        },
        destinationName: function () {
            return this.$route.params.destinationName
        },
        destination: function () {
            let element = this.destinationName
            return this.destinationsList.find(function(item) {
                return element == item.link
            })
        },
        tours: function () {
            let element = this.destination.id
            return this.toursList.filter(function (item) {
                return element == item.destinationId
            })
        }
    },
    methods: {

    },
}
</script>

    
<style lang="scss">

.destination-component {
    display: flex;
}

.destination-column {
    @include half-column
}

.destination-img {
    @include half-img
}

.destination-icon {
    width: 120px;
    height: 120px;
    margin: 20px auto 0px auto;
}

.destination-title {
    @include half-title;
    margin-top: 20px;
}

.destination-hr {
    width: 600px;
}

.destination-about {
    margin: 0px 70px 70px 70px;
}

.destination-btn {
    @include сonnect-btn
}

.destination-btn-a {
    @include сonnect-btn-a
}

.destination-btn:hover .destination-btn-a:after {
    width: 100%;
}

@media screen and (max-width:1200px) {
    .destination-component {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .destination-column {
        width: 100%;
    }

    .destination-about {
        margin: 20px 50px 50px 50px;
    }
}

@media screen and (max-width:450px) {
    .destination-img {
        height: 300px;
    }

    .destination-title {
        margin-top: 5px;
        font-size: 2em;
    }

    .destination-about {
        margin: 10px 30px 30px 30px;
    }
}
</style>