<template>
        <li class="menu_li" @mouseover="isHovered=true" @mouseleave="isHovered=false" :class="{'menu_li_opened':isHovered}">
                <router-link v-if="typeof item.subMenuItems == 'undefined'" :to="'/'+item.link" class='menu_a' exact>{{item.name}}</router-link>
                <div :class="menuItemClass(item.link)" class="menu_a" v-else>{{item.name}}</div>
                <ul v-if="typeof item.subMenuItems != 'undefined'" class="sub_menu">
                    <li :key="subMenuItem.id" v-for="subMenuItem in item.subMenuItems">
                        <router-link :to="'/' +item.link+'/'+subMenuItem.link">{{subMenuItem.name}}</router-link>
                    </li>
                </ul>
        </li>
</template>

<script>
import axios from 'axios'
export default {
    props: ['item'],
    data() {
        return {
            isHovered: false,
        }
    },
    computed: {
       
    },
    methods: {
         menuItemClass: function (link) {
            let str = this.$route.path
            if (str.includes(link)) {
                return 'router-link-active'
            } else {
                return ''
            }
        },  
    },
    created: async function () {
      
    },
    watch: {$route: function () {
        this.isHovered=false
    } 
    },
}

</script>


