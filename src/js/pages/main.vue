<template>
    <div>
        <div class="main_img" style="background-image:url('img/main_africa.jpg')">
            <div class="africa">Africa</div>
        </div>
        <div class="countries-main-background">
            <h1>Страны</h1>
            <hr>
            <div class="countries-background">
                <div class="countries">
                    <div class="countries-column-big">
                        <div class="countries-column-big-row">
                            <router-link :to="'/countries/' +countriesList[3].link">
                                <div class="countries-item">
                                    <div class="countries-img" :style="'background-image:url(\'/img/'+countriesList[3].picture+'\')'">
                                        <div class="countries-hidden">Подробнее</div>
                                    </div>
                                    <div class="country-name">{{countriesList[3].name}}</div>
                                </div>
                            </router-link>
                            <router-link :to="'/countries/' + countriesList[4].link">
                                <div class="countries-item">
                                    <div class="countries-img" :style="'background-image:url(\'/img/'+countriesList[4].picture+'\')'">
                                        <div class="countries-hidden">Подробнее</div>
                                    </div>
                                    <div class="country-name">{{countriesList[4].name}}</div>
                                </div>
                            </router-link>
                        </div>
                        <div class="countries-column-big-row">
                            <router-link :to="'/countries/' +countriesList[5].link">
                                <div class="countries-wide-item">
                                    <div class="countries-wide-img" :style="'background-image:url(\'/img/'+countriesList[5].picture+'\')'">
                                        <div class="countries-hidden">Подробнее</div>
                                    </div>
                                    <div class="country-name">{{countriesList[5].name}}</div>
                                </div>
                            </router-link>
                        </div>
                        <div class="countries-column-big-row">
                            <router-link :to="'/countries/' +countriesList[0].link">
                                <div class="countries-item">
                                    <div class="countries-img" :style="'background-image:url(\'img/'+countriesList[0].picture+'\')'">
                                        <div class="countries-hidden">Подробнее</div>
                                    </div>
                                    <div class="country-name">{{countriesList[0].name}}</div>
                                </div>
                            </router-link>
                            <router-link :to="'/countries/' +countriesList[1].link">
                                <div class="countries-item">
                                    <div class="countries-img" :style="'background-image:url(\'/img/'+countriesList[1].picture+'\')'">
                                        <div class="countries-hidden">Подробнее</div>
                                    </div>
                                    <div class="country-name">{{countriesList[1].name}}</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="countries-column-little">
                        <router-link :to="'/countries/' +countriesList[6].link">
                            <div class="countries-tall-item">
                                <div class="countries-tall-img" :style="'background-image:url(\'/img/'+countriesList[6].picture+'\')'">
                                    <div class="countries-hidden-tall">Подробнее</div>
                                </div>
                                <div class="country-name">{{countriesList[6].name}}</div>
                            </div>
                        </router-link>
                        <router-link :to="'/countries/' +countriesList[2].link">
                            <div class="countries-item">
                                <div class="countries-img" :style="'background-image:url(\'/img/'+countriesList[2].picture+'\')'">
                                    <div class="countries-hidden">Подробнее</div>
                                </div>
                                <div class="country-name">{{countriesList[2].name}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="destinations-main-background">
            <h1> Направления</h1>
            <hr>
            <div class="destinations-background">
                <ul class="destinations">
                    <li class="destinations-column" v-bind:key="item.id" v-for="item in destinationsList">
                        <div class="main-destination-icon" :style="'background-image:url(\'/img/'+item.icon+'\')'"></div>
                        <div class="main-destination-title">{{item.name}}</div>
                        <div class="main-destination-description">{{item.description}}</div>
                        <div>
                            <router-link :to="'/destinations/' +item.link">
                                <button type="button" class="btn-primary">Подробнее</button>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
    
<script>

import axios from 'axios'
export default {
    data() {
        return {

        }
    },
    computed: {
        countriesList: function () {
            return this.$store.state.countries;
        },
        destinationsList: function () {
            return this.$store.state.destinations;
        },
    },
    methods: {

    },
}
</script>

<style lang="scss">

.main_img {
    height: 400px;
    background-position: center 40%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.africa {
    font-size: 15em;
    text-transform: uppercase;
    color: $mainColorWhite;
    font-weight: bold;
    text-shadow: -5px -5px 20px $mainColorBrown;
}

.countries-main-background {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
}

h1 {
    color: $mainColorBrown;
    text-transform: uppercase;
    text-align: center;
    margin: 0px;
}

hr {
    background-color:
        $mainColorBrown;
    height: 3px;
    border: none;
    width: 1090px;
    max-width: 80%;
    margin: 0px auto;
}

.countries-background {
    margin: 20px auto 40px auto;
}

.countries {
    display: flex;
    justify-content: space-between;
    width: 1090px;
    margin: auto auto;
}

.countries-column-big {
    width: 720px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.countries-column-big-row {
    display: flex;
    justify-content: space-between;
}

.countries-wide-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.countries-wide-img {
    width: 720px;
    height: 190px;
    background-size: cover;
    background-position: center;
}

.countries-column-little {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.countries-tall-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.countries-tall-img {
    width: 350px;
    height: 430px;
    background-size: cover;
    background-position: center;
}

.countries-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.countries-img {
    width: 350px;
    height: 190px;
    background-size: cover;
    background-position: center;
    border: none;
}

.country-name {
    background: $mainColorBrown;
    text-align: center;
    color: $mainColorWhite;
    text-transform: uppercase;
    line-height: 30px;
    z-index: 1;
}

.countries-hidden {
    display: none;
    color: $mainColorWhite;
    background: $mainColorOrange;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 2em;
    height: 100%;
    align-items: center;
    justify-content: center;
}

.countries-hidden-tall {
    display: none;
    color: $mainColorWhite;
    background: $mainColorOrange;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 2em;
    height: 100%;
    align-items: center;
    justify-content: center;
}

.countries-item:hover .countries-hidden {
    display: flex;
}

.countries-wide-item:hover .countries-hidden {
    display: flex;
}

.countries-tall-item:hover .countries-hidden-tall {
    display: flex;
}

.destinations-main-background {
    background-color: $mainColorGrey;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 30px;
}

.destinations-background {
    margin: 20px auto 40px auto;
}

.destinations {
    display: flex;
    justify-content: space-between;
    width: 1090px;
    margin: auto auto;
}

.destinations-column {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 40px;
    width: 350px;
    height: 500px;
    background: $mainColorWhite;
    text-align: center;
    align-items: center;
}

.main-destination-title {
    font-size: 1.3em;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
}

.main-destination-icon {
    height: 130px;
    width: 130px;
}

.main-destination-description {
    padding: 0px 10px 0px 10px;
    color: $mainColorBrown;
    height: 160px;
}

.btn-primary {
    background-color: $mainColorBrown;
    color: $mainColorWhite;
    border: none;
    outline: none;
    text-transform: uppercase;
    width: 130px;
    height: 50px;
    cursor: pointer;
    font-size: 1.1em;
}

.btn-primary:hover {
    background: $mainColorOrange;
    color: $mainColorWhite;
}

@media screen and (max-width:1200px) {
    .africa {
        font-size: 10em;
    }

    .countries {
        flex-direction: column;
        justify-content: space-between;
        width: 100%
    }

    .countries-tall-img {
        width: 350px;
        height: 190px;
    }

    .countries-column-little {
        flex-direction: row;
        width: 720px;

    }


    .main-destination-description {
        padding: 0px 30px;
        height: 130px;
    }

    .destinations {
        width: 720px;
    }

    .destinations-column {
        width: 230px;
        height: 520px;
    }

    .main-destination-description {
        padding: 0px 20px;
        height: 220px;
    }
}

@media screen and (max-width:800px) {

    .countries-wide-img,
    .countries-img,
    .countries-tall-img {
        width: 100%;
        height: 250px;
    }


    .countries-column-big {
        width: 500px;
    }

    .countries-column-big-row {
        flex-direction: column;
    }

    .countries-column-little {
        flex-direction: column;
        width: 500px;
    }

    .destinations {
        flex-direction: column;
        align-items: center;
        width: 100%
    }

    .destinations-column {
        margin-bottom: 20px;
        width: 500px;
        height: 400px;
    }

    .main-destination-description {
        padding: 0px 30px;
        height: 100px;
    }
}

@media screen and (max-width:600px) {
    .africa {
        font-size: 7em;
    }

    .destinations-column {
        margin-bottom: 20px;
        width: 360px;
        height: 450px;
    }

    .main-destination-description {
        padding: 0px 30px;
        height: 150px;
    }

    .countries-wide-img,
    .countries-img,
    .countries-tall-img {
        width: 100%;
        height: 250px;
    }

    .countries-column-big {
        width: 360px;
    }

    .countries-column-little {
        width: 360px;
    }
}

@media screen and (max-width:450px) {
    .main_img {
        height: 300px;

    }

    .africa {
        font-size: 6em;
    }

    .countries-column-big,
    .countries-column-little,
    .countries-wide-img,
    .countries-tall-img,
    .countries-img {
        width: 300px;
    }

    .destinations-column {
        width: 300px;
        height: 470px;
    }

    .main-destination-description {
        padding: 20px 30px;
    }
}
</style>
