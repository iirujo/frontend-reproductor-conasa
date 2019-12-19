<template>
  <div>
    <b-container class="containerStyle">
      <b-card class="cardStyle  box-shadow">
          <b-form @submit="onSubmit" v-if="show">

            <b-form-group label="Email address:">
                <b-form-input
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Your Password:">
                <b-form-input
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="box-shadow-btn">
              <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Login
            </b-button>
            <br>
            <b-link to="/restorePassword" class="my-2">
              Forgot password?
            </b-link>

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
          email: '',
          password: ''
        },
        showSpiner: false,
        show: true
      }
    },
    methods: {
      onSubmit() {
        this.showSpiner = true;
        const url = process.env.VUE_APP_URL_API_LOGIN;

        fetch(process.env.VUE_APP_URL_API + url, {
          method: "POST",
          headers: formService.getHeaders(),
          body: JSON.stringify({
            email: this.form.email,
            password: this.form.password
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
            let time = data.time;
            let user = data.usuario;
            
            localStorage.setItem("name", user.nombre);
            localStorage.setItem("surname", user.apellidos);
            localStorage.setItem("username", user.username);
            localStorage.setItem("email", user.email);
            localStorage.setItem("id", user.id);
            localStorage.setItem("time", time );

            this.$bvToast.toast("Usuario introducido correctamente", {
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
    },
  name: 'LoginForm'
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