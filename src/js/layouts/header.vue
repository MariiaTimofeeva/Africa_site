<template>
    <div class="header" v-if="isDataLoaded">
        <router-link to='/' exact>
            <div class="main_logo" :style="'background-image:url(\'/img/'+menuList.logo+'\')'">
            </div>
        </router-link>
        <i class="fas fa-bars"></i>
        <ul class="main_nav">
            <li class="menu_li" v-bind:key="item.id" v-for="item in menuList.menu">
                <router-link v-if="typeof item.subMenuItems == 'undefined'" :to="'/'+item.link" class='menu_a' exact>{{item.name}}</router-link>
                <div :class="addClass(item.link)" class="menu_a" v-else>{{item.name}}</div>
                <ul v-if="typeof item.subMenuItems != 'undefined'" class="sub_menu">
                    <li v-bind:key="subMenuItem.id" v-for="subMenuItem in item.subMenuItems">
                        <router-link :to="'/' +item.link+'/'+subMenuItem.link">{{subMenuItem.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
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
        menuList: function () {
            return this.$store.state.menu;
        },
    },
    methods: {
        requestMenu: async function () {
            this.menu = await this.$store.dispatch('GET_MENU')
        },

        addClass: function (link) {
            let str = this.$route.path
            if (str.includes(link)) {
                return 'router-link-active'
            } else {
                return ''
            }
        },
    },
    created: async function () {
        await this.requestMenu()
        this.addClass('countries')
        this.isDataLoaded = true
    }
}

</script>

<style lang="scss">

.header {
    display: flex;
    background: $mainColorBrown;
    color: $mainColorWhite;
    width: 100%;
    justify-content: space-around;
    padding: 0;
}

ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

.main_logo {
    width: 130px;
    height: 40px;
    margin: 10px;
    background-repeat: no-repeat;
}

a,
a:hover {
    text-decoration: none;
}

.main_nav a {
    display: block;
    padding: 15px;
    color: $mainColorWhite;
    text-transform: uppercase;
}

.main_nav div {
    display: block;
    padding: 15px;
    color: $mainColorWhite;
    text-transform: uppercase;
}

.header .fa-bars {
    width: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 1.5em;
    display: none;
    cursor: pointer;
}

.main_nav a:after {
    display: block;
    content: "";
    height: 1px;
    width: 0%;
    background-color: $mainColorOrange;
    transition: width .3s ease-in-out;
}

.main_nav a:hover:after {
    width: 100%;
}

.main_nav a:hover,
.main_nav i:hover {
    color: $mainColorOrange;
}

.sub_menu {
    display: none;
    width: 150px;
    transition: all .3s ease-in;
    position: absolute;
    background: $mainColorBrown;
    z-index: 2;
}

.menu_li:hover .sub_menu {
    display: block;
}

a.router-link-active {
    color: $mainColorOrange;
}


div.router-link-active {
    color: $mainColorOrange;
}

a.router-link-active.menu_a:after {
    display: block;
    content: "";
    height: 1px;
    width: 100%;
    background-color: $mainColorOrange;
    transition: width .3s ease-in-out;
}

div.router-link-active.menu_a:after {
    display: block;
    content: "";
    height: 1px;
    width: 100%;
    background-color: $mainColorOrange;
    transition: width .3s ease-in-out;
}

@media screen and (max-width:1200px) {
    .header {
        justify-content: space-between;
    }

    .header .fa-bars {
        display: block;
    }

    .main_nav {
        display: none;
    }

    .header .fa-bars:hover+.main_nav {
        display: block;
        position: absolute;
        right: 0;
        top: 60px;
        background-color: $mainColorBrown;
    }

    .main_nav:hover {
        display: block;
        position: absolute;
        right: 0;
        top: 60px;
        background-color: $mainColorBrown;
    }

    .header .fa-bars:hover {
        color: $mainColorOrange;

    }

    .menu_li {
        position: relative;
    }

    .sub_menu {
        right: 150px;
        top: -5px;
    }
}


</style>