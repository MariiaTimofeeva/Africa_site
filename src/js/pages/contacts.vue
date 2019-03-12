<template>
    <div class="contacts">
        <div class="contacts_block">
            <div>
                <span class="contacts_connect">Всегда на связи</span>
            </div>
        </div>
        <div class="contacts_block">
            <div class="contacts_contacts" :key="contactsItem.description" v-for="contactsItem in contactsList.contacts"
                v-html="contactWithIcon(contactsItem.icon, contactsItem.description)">
            </div>
        </div>
        <div class="contacts_block">
            <div class="contacts_nets">
                <a href="" :key="socialSitesItem.icon" v-for="socialSitesItem in contactsList.socialSites" v-html="socialSitesItem.icon">
                </a>
            </div>
        </div>
        <div class="contacts_block">
            <div class="contacts_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.2993349058298!2d30.33755165831903!3d60.038305335029875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963493d9e487c3%3A0x5ba7b91d2550680e!2z0KPRh9C10LHQvdGL0Lkg0L_QtdGALiwgOCDQutC-0YDQv9GD0YEgMywg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5NDM1NA!5e0!3m2!1sru!2sru!4v1546959761858"
                    width="100%" height="415" frameborder="0" style="border:0" allowfullscreen>
                </iframe>
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

.contacts {
    display: flex;
    color: $mainColorBrown;
    width: 100%;
    flex-direction: column;
    text-align: center;
}

.contacts_connect {
    text-transform: uppercase;
    font-size: 1.8em;
}

.contacts_block {
    text-align: center;
    padding-top: 15px;
}

.contacts_contacts {
    padding-bottom: 10px;
}

.contacts_nets {
    @include nets;
        i {
            background: $mainColorBrown;
            color: $mainColorWhite;
            margin-left: 5px;
            margin-right: 5px; 
        }
}

.contacts_map {
    width: 100%;
    height: 400px;
}

 </style>

 