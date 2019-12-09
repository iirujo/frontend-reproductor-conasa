<template>
    <div>
        <b-container class="containerStyle">
        <b-card class="cardStyle box-shadow-big">
            <b-form @submit="onSubmit" v-if="show">

            <b-form-group label="Email address:">
                <b-form-input
                v-model="form.email"
                type="email"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Your Name:">
                <b-form-input
                v-model="form.name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Your Surname:">
                <b-form-input
                v-model="form.surname"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Your Username:">
                <b-form-input
                v-model="form.username"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Your Born Date:">
                <b-form-input
                v-model="form.bornDate"
                required
                type="date"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="warning" class="box-shadow">
                <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Update User
            </b-button>
            <br> <br>
            <DashboardButton />
            </b-form>
        </b-card>
        </b-container>
    </div>
</template>

<script>
    import router from '../../router.js';
    import DashboardButton from '../Dashboard/DashboardButton.vue';
    import FormService from "../Services/FormService.js";
    const formService = new FormService();

    export default {
        name: 'ChangeForm',
        components: {
            DashboardButton
        },
        data() {
            return {
                form: {
                    email: localStorage.getItem("email"),
                    name: localStorage.getItem("name"),
                    surname: localStorage.getItem("surname"),
                    username: localStorage.getItem("username"),
                    bornDate: ''
                },
                showSpiner: false,
                show: true
            }
        },
        methods: {
            onSubmit() {
                this.showSpiner = true;
                const url = process.env.VUE_APP_URL_API_REGISTRO;
                var userId = localStorage.getItem('id');
                fetch(process.env.VUE_APP_URL_API + url + '/' + userId, {
                    method: "PUT",
                    headers: formService.getHeaders(),
                    body: JSON.stringify({
                        nombre: this.form.name,
                        apellidos: this.form.surname,
                        email: this.form.email,
                        username: this.form.username,
                        fechaNacimiento: this.form.bornDate
                    })
                })
                .then()
                .then(data => {
                    this.showSpiner = false;

                    const toast = this.$bvToast;
                    if (data.errors) {
                        let errors = data.errors;
                        let msge;
                        errors.forEach(function(element) {
                            msge = element.message;
                            toast.toast(msge, {
                                title: "Error",
                                autoHideDelay: 5000,
                                variant: "danger"
                            })
                        })
                    } 
                    else {
                        localStorage.setItem("name", this.form.name);
                        localStorage.setItem("surname", this.form.surname);
                        localStorage.setItem("username", this.form.username);
                        localStorage.setItem("email", this.form.email);

                        this.$bvToast.toast("Usuario cambiado correctamente", {
                            title: "Success",
                            autoHideDelay: 2000,
                            variant: "success",
                            toaster: "b-toaster-bottom-full"
                        });
                        setTimeout(() => {
                            router.push("/dashboard")
                        }, 2000);
                    } 
                })
                .catch(err => {
                console.log(err);
                });
            }
        }
    }
</script>

<style scoped>
    .cardStyle {
      background-color: #7afff0;
    }
    
    .containerStyle {
      max-width: 400px;
      padding-top: 3em;
    }

    .box-shadow-big {
      box-shadow: 10px 10px 10px thistle;
    }

    .box-shadow {
        box-shadow: 6px 6px 10px grey;
    }
</style>