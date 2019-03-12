<template>
    <div class="choice">
        <div class="choice-img" style="background-image:url(../img/choice_main.jpg)">
            <div class="where">
                <div class="where-question">Куда Вы хотите поехать?</div>
                <div action="" class="where-form">
                    <div class="where-item">
                        <div>Страна:</div>
                        <div class="select-bg">
                            <select v-model="filterCountry" class="select-tour">
                                <option value="0">Выбрать</option>
                                <option :key="option.id" :value="option.id" v-for="option in countriesList">{{option.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="where-item">
                        <div>Стоимость:</div>
                        <div class="select-bg">
                            <select v-model="filterPrice" class="select-tour">
                                <option value="0">Выбрать</option>
                                <option :key="option.value" :value="option.value" v-for="option in priceOptions">{{option.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="where-item">
                        <div>Количество дней:</div>
                        <div class="select-bg">
                            <select v-model="filterDuration" class="select-tour">
                                <option value="0">Выбрать</option>
                                <option :key="option.value" :value="option.value" v-for="option in durationOptions">{{option.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="where-item">
                        <button @click="resetFilter()" type="button" class="filter-btn">
                            <div class="filter-btn-div">Сбросить фильтр</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <tour-cards :tours="filteredTours" v-if="filteredTours.length != 0"></tour-cards>
        <div class="nothing" v-else>К сожалению, туров не найдено. Попробуйте изменить параметры поиска.</div>
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
            filterPrice: "0",
            priceOptions: [{
                    name: "меньше 3 000$",
                    value: "1",
                },
                {
                    name: "3 000$-4 000$",
                    value: "2",
                },
                {
                    name: "больше 4 000$",
                    value: "3",
                }
            ],
            filterDuration: "0",
            durationOptions: [{
                    name: "меньше 7 дней",
                    value: "1",
                },
                {
                    name: "от 7 до 14 дней",
                    value: "2",
                },
                {
                    name: "больше 14 дней",
                    value: "3",
                }
            ],
            filterCountry: "0"
        }
    },
    computed: {
        countriesList: function () {
            return this.$store.state.countries;
        },
        toursList: function () {
            return this.$store.state.tours;
        },
        filteredTours: function () {
            return this.toursList.filter((item) => {
                if (this.filterPrice == "1" && item.price >= 3000) {
                    return false
                }
                if (this.filterPrice == "2" && (item.price < 3000 || item.price > 4000)) {
                    return false
                }
                if (this.filterPrice == "3" && item.price <= 4000) {
                    return false
                }
                if (this.filterDuration == "1" && item.duration >= 7) {
                    return false
                }
                if (this.filterDuration == "2" && (item.duration < 7 || item.duration > 14)) {
                    return false
                }
                if (this.filterDuration == "3" && item.duration <= 14) {
                    return false
                }
                if (this.filterCountry != item.countryId && this.filterCountry != "0") {
                    return false
                }
                return true
            })
        }
    },
    methods: {
        resetFilter() {
            this.filterPrice = "0"
            this.filterDuration = "0"
            this.filterCountry = "0"
        }
    },
}
</script>

<style lang="scss">

.choice-img {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 400px;
    padding-bottom: 50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.where {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    width: 1100px;
    height: 120px;
    border-top: 10px solid $mainColorOrange;
}

.where-question {
    font-size: 1.7em;
    font-weight: bold;
    color: $mainColorBrown;
}

.where-form {
    display: flex;
    justify-content: space-between;
    width: 1050px;
    padding-top: 10px;
}

.where-item {
    display: flex;
    width: 250px;
    height: 50px;
    background: $mainColorWhite;
    align-items: center;
    justify-content: center;
}

.select-tour {
    width: 125px;
    border: none;
    border-bottom: 1px solid $mainColorOrange;
    color: $mainColorBrown;
    outline: none;
}

.filter-btn {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: $mainColorOrange;
    color: $mainColorWhite;
    text-transform: uppercase;
    font-size: 1.2em;
    border: none;
    outline: none;
    cursor: pointer;

}

.filter-btn-div:after {
    display: block;
    content: "";
    height: 2px;
    width: 0%;
    background-color: $mainColorWhite;
    transition: width .3s ease-in-out;
}

.filter-btn:hover .filter-btn-div:after {
    width: 100%;
}
.nothing {
    background-color: $mainColorGrey;
    padding: 30px;
    text-align: center;
}


@media screen and (max-width:1200px) {

    .where {
        width: 90%;
        max-width: 700px;
        height: 300px;
    }

    .where-form {
        flex-direction: column;
        max-width: 650px;
        width: 95%;
        align-items: center;
        height: 230px;
    }

    .where-item {
        width: 95%;
        max-width: 600px;
        justify-content: space-between;
    }

    .where-item div {
        padding: 0px 10px;

    }

    .where-btn {
        width: 100%;
        max-width: 600px;
    }

    .select-bg {
        width: 68%;
    }

    .select-tour {
        width: 100%;
    }
}

@media screen and (max-width:600px) {

    .select-bg {
        width: 55%;
    }
}

</style>
