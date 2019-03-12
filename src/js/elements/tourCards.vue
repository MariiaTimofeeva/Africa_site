<template>
    <div class="offer-background">
        <div class="offer-items">
            <div class="offer-block" :key="item.id" v-for="item in tours">
                <router-link :to="'/tours/' + item.link">
                    <div class="offer-img" :style="'background-image:url(\'/img/'+item.picture+'\')'">
                        <div class="offer-hidden">
                            Подробнее
                        </div>
                    </div>
                    <div class="rec-text">
                        <p class="offer-p">{{item.title}}</p>
                        <hr class="rec-line">
                        <p class="offer-p-little">от ${{formatPrice(item.price)}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tours'],
    methods: {
        
    },
}

</script>

<style lang="scss">

.offer-background {
    display: flex;
    padding-top: 60px;
    justify-content: center;
    align-items: center;
    background-color: $mainColorGrey;
}

.offer-items {
    width: 1090px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.offer-block {
    margin-bottom: 60px;
}

.offer-block:hover {
    display: block;
}

.offer-block:focus {
    outline: none;
}

.offer-img {
    height: 450px;
    width: 510px;
    background-size: cover;
    background-position: center;
}

.offer-p {
    text-transform: uppercase;
    text-align: center;
    color: $mainColorWhite;
    margin: auto;
}

.offer-p-little {
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

.offer-hidden {
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

.offer-block:hover .offer-hidden {
    display: block;
}

@media screen and (max-width:1200px) {

    .offer-background {
        padding-top: 30px;
    }

    .offer-items {
        max-width: 700px;
    }

    .offer-img {
        width: 330px;
        height: 250px;
    }

    .offer-block {
        margin-bottom: 30px;
    }

    .offer-hidden {
        line-height: 250px;
        font-size: 3em;
    }
}

@media screen and (max-width:800px) {

    .offer-background {
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
    }

    .offer-items {
        width: 100%;
        align-items: center;
        flex-direction: column;
    }

    .offer-img {
        width: 500px;
        height: 400px;
    }

    .offer-block {
        margin-bottom: 30px;
    }

    .offer-hidden {
        line-height: 400px;
        font-size: 3em;
    }
}


@media screen and (max-width:600px) {

    .offer-img {
        width: 400px;
        height: 350px;
    }

    .offer-block {
        margin-bottom: 30px;
    }

    .offer-hidden {
        line-height: 350px;
        font-size: 3em;
    }
}

@media screen and (max-width:450px) {

    .offer-background {
        padding-top: 30px;
    }

    .offer-img {
        width: 300px;
        height: 250px;
    }

    .offer-block {
        margin-bottom: 30px;
    }

    .offer-hidden {
        line-height: 250px;
        font-size: 2em;
    }
}
</style>


