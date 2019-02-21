<template>
    <div>
        <div class="popularTour-component">
            <div class="popularTour-column">
                <div class="popularTour-img" :style="'background-image:url(\'/img/'+tour.picture+'\')'"></div>
            </div>
            <div class="popularTour-column">
                <div class="popularTour-title">{{tour.title}}</div>
                <div class="popularTour-country">{{getCountryById.name}}</div>
                <hr class="popularTour-hr">
                <div class="popularTour-price">от ${{newNumber(tour.price)}}</div>
                <div class="popularTour-duration">{{tour.duration}} дней</div>
                <div class="popularTour-description">{{tour.description}}</div>
                <div>
                    <button type="button" class="popularTour-btn">
                        <a class="popularTour-btn-a" href="#form">Связаться с нами</a>
                    </button>
                </div>
            </div>
        </div>
        <div class="popularTour-programm">
            <div class="popularTour-title">Программа тура</div>
            <hr class="popularTour-hr">
            <div class="popularTour-days">
                <div class="popularTour-column-programm">
                    <ul class="programm">
                        <li class="programm-day" v-bind:key="item.id" v-for="item in tour.programm">
                            <div class="programm-number">День {{item.number}}</div>
                            <hr class="programm-hr">
                            <div class="programm-place">{{item.place}}</div>
                            <div class="programm-description">{{item.description}}</div>
                        </li>
                    </ul>
                </div>
                <div class="popularTour-column-programm">
                    <div class="programm-img" :style="'background-image:url(\'/img/'+tour.picture1+'\')'"></div>
                    <div class="programm-img" :style="'background-image:url(\'/img/'+tour.picture2+'\')'"></div>
                    <div class="programm-img" :style="'background-image:url(\'/img/'+tour.picture3+'\')'"></div>
                </div>
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
        toursList: function () {
            return this.$store.state.tours;
        },
        tourName: function () {
            return this.$route.params.tourName
        },
        tour: function () {
            let element = this.tourName
            return this.toursList.find(function (item) {
                return element == item.link
            })
        },
        getCountryById: function () {
            let element = this.tour.countryId
            return this.countriesList.filter(function (item) {
                return element == item.id
            })
        }
    },
    methods: {
        newNumber: function (number) {
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
    },
}
</script>

    
<style lang="scss">

.popularTour-component {
    display: flex;
}

.popularTour-column {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

.popularTour-img {
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.popularTour-title {
    font-size: 3em;
    margin-top: 50px;
    text-transform: uppercase;
    color: $mainColorBrown;
}

.popularTour-hr {
    width: 600px;
}

.popularTour-price {
    font-size: 1.5em;
}

.popularTour-country {
    color: $mainColorOrange;
    font-size: 2em;
}

.popularTour-duration {
    color: $mainColorOrange;
    font-size: 1.5em;
}

.popularTour-description {
    margin: 0px 70px 70px 70px;
}

.popularTour-btn {
    display: flex;
    height: 100px;
    background-color: $mainColorOrange;
    justify-content: center;
    text-transform: uppercase;
    font-size: 2em;
    color: $mainColorWhite;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
}

.popularTour-btn-a,
.popularTour-btn-a:hover,
.popularTour-btn-a:active {
    color: $mainColorWhite;
    border: none;
    outline: none;
}

.popularTour-btn-a:after {
    display: block;
    content: "";
    height: 2px;
    width: 0%;
    background-color: $mainColorWhite;
    transition: width .3s ease-in-out;
}

.popularTour-btn:hover .popularTour-btn-a:after {
    width: 100%;
}

.popularTour-programm {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    justify-content: space-between;
    background-color: $mainColorGrey;
}

.popularTour-days {
    display: flex;
    justify-content: space-around;
    margin: 50px 100px;
}

.popularTour-column-programm {
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    justify-content: space-between;
    margin: 0px 50px;
}

.programm {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.programm-day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px 0px;
}

.programm-number {
    text-transform: uppercase;
}

.programm-hr {
    height: 1px;
    width: 200px;
}

.programm-place {
    color: $mainColorOrange;
}

.programm-img {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 10px;
}

@media screen and (max-width:1200px) {
    .popularTour-component {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .popularTour-column {
        width: 100%;
    }

    .popularTour-days {
        flex-direction: column;
        align-items: center;
        margin: 30px 50px;
    }

    .popularTour-column-programm {
        width: 100%;
        margin: 0px;

    }

    .programm-img {
        display: none;
    }

    .popularTour-description {
        margin: 20px 50px 50px 50px;
    }

    .popularTour-price {
        margin-top: 10px;
    }
}

@media screen and (max-width:450px) {
    .popularTour-img {
        height: 300px;
    }

    .popularTour-title {
        margin-top: 30px;
        font-size: 2em;
    }

    .popularTour-description {
        margin: 10px 30px 30px 30px;
    }

    .popularTour-days {
        margin: 20px 30px 30px 30px;
    }
}
</style>