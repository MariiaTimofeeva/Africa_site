<template>
    <div class="recommend" v-if="isDataLoaded">
        <h1>Популярные туры</h1>
        <hr>
        <div class="carousel-background">
            <div class="carousel-items">
                <slick ref="slick" :options="slickOptions">
                    <div class="carousel-block" :key="item.id" v-for="item in popularTours">
                        <router-link :to="'/tours/' +item.link">
                            <div class="carousel-img" :style="'background-image:url(\'/img/'+item.picture+'\')'">
                                <div class="carousel-hidden">
                                    Подробнее
                                </div>
                            </div>
                            <div class="rec-text">
                                <p class="carousel-p">{{item.title}}</p>
                                <hr class="rec-line">
                                <p class="carousel-p-little">от ${{formatPrice(item.price)}}</p>
                            </div>
                        </router-link>
                    </div>
                </slick>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import axios from 'axios'
import Slick from 'vue-slick'
export default {
    components: {
        Slick
    },
    data() {
        return {
            isDataLoaded: false,
            popularToursIds: {},
            tours: {},
            slickOptions: {
                dots: true,
                infinite: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                slidesToScroll: 3,
                lazyLoad: 'ondemand',
                nextArrow: '<i class="fas fa-chevron-circle-right"></i>',
                prevArrow: '<i class="fas fa-chevron-circle-left"></i>',
            },
        };
    },
    computed: {
        popularToursIdsList: function () {
            return this.$store.state.popularToursIds;
        },
        toursList: function () {
            return this.$store.state.tours;
        },
        popularTours: function () {
            let ids = this.popularToursIdsList
            return this.toursList.filter(function (item) {
                return ids.includes(item.id)
            })
        },
        slidesNumber: function (){
            return this.slickOptions.slidesToShow
        },
    },
    methods: {
        requestPopularToursIds: async function () {
            this.popularToursIds = await this.$store.dispatch('GET_POPULARTOURSIDS')
        },

        handleResize: function () {
            let width = window.innerWidth
            if (width <= 1200) {
                this.slickOptions.slidesToShow = 1
                this.countSlickElements = 1
                
            } else {
                this.slickOptions.slidesToShow = 3
                this.countSlickElements = 3
                
            }
        },
        reInit: function () {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
    created: async function () {
        await this.requestPopularToursIds()
        this.isDataLoaded = true
        this.handleResize()
        window.addEventListener('resize', this.handleResize)
    },
    watch: {slidesNumber: 'reInit'
    },
}
</script>

<style lang="scss">

    $slick-opacity-on-hover: 1 !default;
    $slick-dot-character: "\2022" !default;
    $slick-font-family: "slick" !default;
    $slick-dot-size: 30px !default;
    $slick-dot-color: black !default;
    $slick-opacity-not-active: 0.25 !default;
    $slick-dot-color-active: $slick-dot-color !default;
    $slick-opacity-default: 0.75 !default;

.recommend {
    background-color: $mainColorWhite;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 0 auto;
}

.carousel-background {
    display: flex;
    height: 600px;
    justify-content: center;
    align-items: center;
}

.carousel-items {
    width: 1280px;
}

.carousel-block {
    height: 510px;
}

.carousel-block:hover {
    display: block;
}

.carousel-block:focus {
    outline: none;
}

.slick-slide {
    margin: 15px;
}

.slick-slide a:focus {
    outline: none;
}

.slick-arrow {
    top: 50%;
    position: absolute;
    cursor: pointer;
}

.fa-chevron-circle-left {
    left: -30px;
}

.fa-chevron-circle-right {
    left: 1300px;
}

.carousel-img {
    height: 450px;
    width: 100%;
    background-size: cover;
    background-position: center;
}

.carousel-p {
    text-transform: uppercase;
    text-align: center;
    color: $mainColorWhite;
    margin: auto;
}

.carousel-p-little {
    text-align: center;
    color: $mainColorWhite;
    margin: auto;
}

.rec-text {
    background: $mainColorBrown;
    padding: 5px;
}

.rec-line {
    background-color: $mainColorWhite;
    height: 1px;
    margin: 0 auto;
    width: 150px;
    text-align: center;
    border: none;
}

.carousel-hidden {
    display: none;
    color: $mainColorWhite;
    background: $mainColorOrange;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 450px;
    text-transform: uppercase;
    font-size: 3em;
}

.carousel_block:hover .carousel-hidden {
    display: block;
}

/* Dots */

.slick-dotted.slick-slider {
    margin-bottom: 30px;
}

.slick-dots {
    position: absolute;
    bottom: -25px;
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 100%;

    li {
        position: relative;
        display: inline-block;
        height: 20px;
        width: 20px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;

        button {
            border: 0;
            background: transparent;
            display: block;
            height: 20px;
            width: 20px;
            outline: none;
            line-height: 0px;
            font-size: 0px;
            color: transparent;
            padding: 5px;
            cursor: pointer;

            &:hover,
            &:focus {
                outline: none;

                &:before {
                    opacity: $slick-opacity-on-hover;
                }
            }

            &:before {
                position: absolute;
                top: 0;
                left: 0;
                content: $slick-dot-character;
                width: 20px;
                height: 20px;
                font-family: $slick-font-family;
                font-size: $slick-dot-size;
                line-height: 20px;
                text-align: center;
                color: $slick-dot-color;
                opacity: $slick-opacity-not-active;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        }

        &.slick-active button:before {
            color: $slick-dot-color-active;
            opacity: $slick-opacity-default;
        }
    }
}

@media screen and (max-width:1400px) {

    .recommend {
        padding-bottom: 0px;

    }

    .carousel-background {
        height: 500px;
    }

    .carousel_block {
        height: 410px;
    }

    .carousel-items {
        width: 1100px
    }

    .fa-chevron-circle-right {
        left: 1115px;
    }

    .carousel-img {
        height: 350px;
    }

    .carousel-hidden {
        line-height: 350px;
    }
}

@media screen and (max-width:1200px) {

    .carousel-background {
        height: 600px;
    }

    .carousel_block {
        height: 510px;
    }

    .carousel-items {
        width: 700px
    }

    .fa-chevron-circle-right {
        left: 715px;
    }

    .carousel-img {
        height: 450px;
    }

    .carousel-hidden {
        line-height: 450px;
    }
}

@media screen and (max-width:800px) {

    .carousel-background {
        height: 500px;
    }

    .carousel_block {
        height: 410px;
    }

    .carousel-items {
        width: 500px
    }

    .fa-chevron-circle-right {
        left: 515px;
    }

    .carousel-img {
        height: 350px;
    }

    .carousel-hidden {
        line-height: 350px;
    }

    .slick-slide {
        margin: 5px;
    }
}

@media screen and (max-width:600px) {

    .carousel-background {
        height: 400px;
    }

    .carousel_block {
        height: 310px;
    }

    .carousel-items {
        width: 360px
    }

    .fa-chevron-circle-right {
        left: 375px;
    }

    .carousel-img {
        height: 250px;
    }

    .carousel-hidden {
        line-height: 250px;
    }

    .slick-slide {
        margin: 5px;
    }
}


@media screen and (max-width:450px) {

    .carousel-background {
        height: 350px;
    }

    .carousel_block {
        height: 250px;
    }

    .carousel-items {
        width: 260px
    }

    .carousel-p {
        font-size: 0.8em;
    }

    .carousel-p-little {
        font-size: 0.8em;
    }

    .carousel-img {
        height: 200px;
    }

    .carousel-hidden {
        line-height: 200px;
        font-size: 1.5em;
    }

    .fa-chevron-circle-right {
        left: 264px;
        z-index: 30;
    }

    .fa-chevron-circle-left {
        left: -20px;
        z-index: 15;
    }

    .slick-slide {
        margin: 5px;
    }
}
</style>

