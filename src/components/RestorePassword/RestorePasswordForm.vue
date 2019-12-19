<template>
    <div>
        <b-container class="containerStyle">
            <b-card class="cardStyle box-shadow">
                <b-form @submit="onSubmit">

                    <b-form-group label="Email address:">
                        <b-form-input
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>
                    <b-button variant="warning" to="/login" class="box-shadow-btn col-5 mx-2">
                        Return
                    </b-button>
                    <b-button type="submit" variant="primary" class="box-shadow-btn col-5 mx-2">
                        <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Search
                    </b-button>
                </b-form>
            </b-card>
        </b-container>
    </div>
</template>

<script>
import FormService from "../Services/FormService.js";
import router from '../../router.js';
const formService = new FormService();
export default {
    data() {
        return {
            form: {
                email: ''
            },
            showSpiner: false
        }
    },
    methods: {
        onSubmit() {
            this.showSpiner = true;
            const url = process.env.VUE_APP_URL_API_RECOVER;

            fetch(process.env.VUE_APP_URL_API + url, {
                method: "POST",
                headers: formService.getHeaders(),
                body: JSON.stringify({
                    email: this.form.email
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
                    
                    this.$bvToast.toast("Password recovery link sent to the introduced email", {
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
            .catch(err => {
                console.log(err);
            })
        }
    },
    name: 'restorePasswordForm'
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