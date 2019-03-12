<template>
    <div class="footer">
        <div class="footer_block">
            <router-link to='/' exact>
                <div class="footer_logo" :style="'background-image:url(\'/img/'+contactsList.tradeMark.logo+'\')'">
                </div>
            </router-link>
            <div v-html="contactsList.tradeMark.description">
            </div>
        </div>
        <div class="footer_block">
            <div class="footer_p">Контакты
            </div>
            <div class="footer_contacts" :key="footerItem.description" v-for="footerItem in contactsList.contacts" v-html="contactWithIcon(footerItem.icon, footerItem.description)">
            </div>
        </div>
        <div class="footer_block">
            <div class="footer_p">Мы в социальных сетях
            </div>
            <div class="footer_nets">
                <a href="" :key="footerSocialSitesItem.icon" v-for="footerSocialSitesItem in contactsList.socialSites"
                    v-html="footerSocialSitesItem.icon">
                </a>
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
        contactsList: function () {
            return this.$store.state.contacts;
        },
    },
    methods: {
        contactWithIcon(icon, description) {
            return icon + " " + description
        },
    },
}
</script>



<style lang="scss">

.footer {
    display: flex;
    background: $mainColorBrown;
    color: $mainColorWhite;
    width: 100%;
    justify-content: space-around;
    padding: 40px 0px;
}

.footer_block {
    text-align: center;
    width: 33.333333333333333333333333%
}

.footer_logo {
    margin: 0px auto;
    background-repeat: no-repeat;
    height: 50px;
    width: 120px;
    justify-content: center;
}

.footer_contacts {
    color: $mainColorWhite;
    padding-top: 15px;
}

.footer_p {
    color: $mainColorWhite;
    text-transform: uppercase;
}

.footer_nets {
    @include nets;
        i {
            background: $mainColorWhite;
            color: $mainColorBrown;
            margin: 15px 5px;
        }
}

@media screen and (max-width:600px) {
    .footer {
        flex-direction: column;
        align-items: center;
    }

    .footer_block {
        width: 100%
    }

    .footer_p {
        padding-top: 40px;
    }
}

</style>

 