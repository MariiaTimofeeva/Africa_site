<template>
    <div class="form" id="form">
        <div class="form-div">Свяжитесь с нами</div>
        <span class="form-span">Пожалуйста, оставьте Вашу информацию, и мы свяжемся с Вами в течение 24 часов</span>
        <form action="" class="form-info">
            <div class="form-column">
                <div class="form-item">
                    <label class="form-label" for="name">Имя:</label>
                    <input class="form-input" v-model="form.name" placeholder="Введите имя">
                </div>
                <div class="form-item">
                    <label class="form-label" for="phone">Телефон:</label>
                    <input class="form-input" v-model="form.phone" placeholder="Введите телефон">
                </div>
                <div class="form-item">
                    <label class="form-label" for="email">E-mail:</label>
                    <input class="form-input" v-model="form.email" placeholder="Введите адрес">
                </div>
            </div>
            <div class="form-column">
                <div class="form-big-item">
                    <label for="message">Комментарии/Вопросы</label>
                    <textarea class="form-textarea" v-model="form.message" placeholder="Введите текст"></textarea>
                </div>
                <button @click="sendForm()" type="button" class="form-btn">
                    <div class="form-btn-div">Отправить</div>
                </button>
            </div>
        </form>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                name: "",
                phone: "",
                email: "",
                message: ""
            }
        }
    },
    computed: {},
    methods: {
        async sendForm() {
            await axios.post('http://localhost:3000/form', this.form)
            this.form.name = ""
            this.form.phone = ""
            this.form.email = ""
            this.form.message = ""
        }
    },
}
</script>



<style lang="scss">

.form {
    background: $mainColorOrange;
    max-width: 100%;
    text-align: center;
    padding: 20px;
}

.form-info {
    margin: 20px auto;
    display: flex;
    width: 550px;
    height: 170px;
    justify-content: space-between;
}

.form-div {
    color: $mainColorWhite;
    text-transform: uppercase;
}

.form-column {
    display: flex;
    width: 270px;
    flex-direction: column;
    justify-content: space-between;
}

.form-item {
    background-color: rgba(255, 255, 255, 0.8);
    height: 50px;
    display: flex;
    justify-content: left;
    align-items: center;
}

.form-big-item {
    background-color: rgba(255, 255, 255, 0.8);
    height: 105px;
    padding: 5px 0px 0px 0px;
}

.form-btn {
    display: flex;
    justify-content: center;
    background-color: $mainColorBrown;
    color: $mainColorWhite;
    border: none;
    outline: none;
    text-transform: uppercase;
    height: 50px;
    cursor: pointer;
}

.form-btn-div:after {
    display: block;
    content: "";
    height: 1px;
    width: 0%;
    background-color: $mainColorWhite;
    transition: width .3s ease-in-out;
}

.form-btn:hover .form-btn-div:after {
    width: 100%;
}

.form-btn:focus {
    outline: none;
}

.form-label {
    margin-left: 10px;
    width: 60px;
    text-align: left;
}

.form-input {
    border: none;
    border-bottom: 1px solid $mainColorOrange;
    background: none;
    width: 180px;
}

.form-input:focus {
    outline: none;
}

.form-textarea {
    width: 240px;
    height: 60px;
    background: none;
    font-family: inherit;
    margin: 5px;
    resize: none;
}

.form-textarea:focus {
    outline: none;
}


@media screen and (max-width:600px) {
    .form {
        height: 460px;
    }

    .form-column {
        height: 170px;
    }

    .form-info {
        flex-direction: column;
        align-items: center;
        height: 350px;
        width: 100%;
    }
}

 </style>

 