<template>
    <div class="info-component" v-if="isDataLoaded">
        <div class="info-column">
            <div class="info-img" :style="'background-image:url(\'/img/'+info.picture+'\')'"></div>
        </div>
        <div class="info-column">
            <div class="info-title">{{info.title}}</div>
            <hr class="info-hr">
            <div class="info-about">{{info.description}}</div>
            <div>
                <button type="button" class="info-btn"><a class="info-btn-a" href="#form">Связаться с нами</a></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            isDataLoaded: false,
        }
    },
    computed: {
        informationList: function () {
            return this.$store.state.information;
        },
        informationName: function () {
            return this.$route.params.informationName
        },
        info: function () {
            let element = this.informationName
            return this.informationList.find(function (item) {
                return element == item.link
            })
        },
    },
    methods: {
        requestInformation: async function () {
            this.information = await this.$store.dispatch('GET_INFORMATION')
        },
    },
    created: async function () {
        await this.requestInformation()
        this.isDataLoaded = true
    }
}
</script>

    
<style lang="scss">

.info-component {
    display: flex;
}

.info-column {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

.info-img {
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.info-title {
    font-size: 3em;
    margin-top: 50px;
    text-transform: uppercase;
    color: $mainColorBrown;
}

.info-hr {
    width: 600px;
}

.info-about {
    margin: 0px 70px 70px 70px;
}

.info-btn {
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

.info-btn-a,
.info-btn-a:hover,
.info-btn-a:active {
    color: $mainColorWhite;
    border: none;
    outline: none;
}

.info-btn-a:after {
    display: block;
    content: "";
    height: 2px;
    width: 0%;
    background-color: $mainColorWhite;
    transition: width .3s ease-in-out;
}

.info-btn:hover .info-btn-a:after {
    width: 100%;
}

@media screen and (max-width:1200px) {
    .info-component {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .info-column {
        width: 100%;
    }


    .info-about {
        margin: 20px 50px 50px 50px;
    }
}

@media screen and (max-width:450px) {
    .info-img {
        height: 300px;
    }

    .info-title {
        margin-top: 30px;
        font-size: 2em;
    }

    .info-about {
        margin: 10px 30px 30px 30px;
    }
}

</style>