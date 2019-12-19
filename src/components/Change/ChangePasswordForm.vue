<template>
    <div>
        <b-container class="containerStyle" v-if="error">
            <b-card class="cardStyle box-shadow">
                <b-form @submit="onSubmit">

                    <b-form-group label="New password:">
                        <b-form-input
                        v-model="form.password1"
                        type="password"
                        required
                        placeholder="Enter new password"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Confirm new password:">
                        <b-form-input
                        v-model="form.password2"
                        type="password"
                        required
                        placeholder="Repeat new password"
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary" class="box-shadow-btn col-5 mx-2">
                        <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Confirm
                    </b-button>

                </b-form>
            </b-card>
        </b-container>
        <div v-else>
            Expired
        </div>
    </div>
</template>

<script>
import FormService from "../Services/FormService.js";
import router from '../../router.js';
const formService = new FormService();
export default {
    mounted() {
        const url = process.env.VUE_APP_URL_API_SEARCH_USER;
        let link = window.location.href;
        let linkInSubstrings = link.split("=");
        let code = linkInSubstrings[1];
        fetch(process.env.VUE_APP_URL_API + url, {
            method: "POST",
            headers: formService.getHeaders(),
            body: JSON.stringify({
                recoverCode: code
            })
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if (data.error) {
                this.$bvToast.toast(data.error, {
                    title: "Error",
                    toaster: "b-toaster-bottom-full",
                    autoHideDelay: 3000,
                    variant: "danger"
                });
                this.error = false;
            }
            else {
                this.error = true;
            }
        })
    },
    data() {

        return {
            form: {
                password1: '',
                password2: ''
            },
            error: '',
            showSpiner: false
        }
    },
    methods: {
        onSubmit() {
            this.showSpiner = true;
            const url = process.env.VUE_APP_URL_API_UPDATE_PASSWORD;

            if (this.form.password1 != this.form.password2)
            {
                this.$bvToast.toast("Las contraseñas deben ser distintas entre si", {
                    title: "Error",
                    toaster: "b-toaster-bottom-full",
                    autoHideDelay: 5000,
                    variant: "danger"
                })
            }
            else {
                fetch(process.env.VUE_APP_URL_API + url, {
                    method: "PUT",
                    headers: formService.getHeaders(),
                    body: JSON.stringify({
                        password: this.form.password1,
                        recoverCode: this.code
                    })
                })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.showSpiner = false;

                    if (data.error) {
                        this.$bvToast.toast(data.error, {
                        title: "Error",
                        toaster: "b-toaster-bottom-full",
                        autoHideDelay: 5000,
                        variant: "danger"
                        })
                    }
                    else {
                        this.$bvToast.toast("Usuario introducido correctamente", {
                            title: "Success",
                            autoHideDelay: 2000,
                            variant: "success",
                            toaster: "b-toaster-bottom-full"
                        });
                        setTimeout(() => {
                            router.push("/login")
                        }, 2000);
                    }
                })
            }
            
                
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
    .box-shadow {
      box-shadow: 6px 6px 6px thistle;
    }
    .box-shadow-btn {
      box-shadow: 0px 0px 6px grey;
      
    }
</style>