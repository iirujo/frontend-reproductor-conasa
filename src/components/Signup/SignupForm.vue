<template>
  <div>
    <b-container class="containerStyle">
    <b-card class="cardStyle box-shadow">
        <b-form @submit="onSubmit" v-if="show">

          <b-form-group label="Email address:">
              <b-form-input
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
              ></b-form-input>
          </b-form-group>

          <b-form-group label="Your Name:">
              <b-form-input
              v-model="form.name"
              required
              placeholder="Enter name"
              ></b-form-input>
          </b-form-group>

          <b-form-group label="Your Surname:">
              <b-form-input
              v-model="form.surname"
              required
              placeholder="Enter surname"
              ></b-form-input>
          </b-form-group>

          <b-form-group label="Your Nickname:">
              <b-form-input
              v-model="form.nickname"
              required
              placeholder="Enter nickname"
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

          <b-form-group label="Your Born Date:">
              <b-form-input
              v-model="form.bornDate"
              required
              type="date"
              placeholder="Enter born date"
              ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" class="box-shadow-btn">
            <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Sign Up
          </b-button>
        </b-form>
    </b-card>
    </b-container>
  </div>
</template>

<script>
  import FormService from "../Services/FormService.js";
  const formService = new FormService();
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          surname: '',
          nickname: '',
          password: '',
          bornDate: ''
        },
        showSpiner: false,
        toastError: "",
        show: true
      }
    },
    methods: {
      onSubmit() {
        this.showSpiner = true;
        const url = process.env.VUE_APP_URL_API_REGISTRO;

        fetch(process.env.VUE_APP_URL_API + url, {
          method: "POST",
          headers: formService.getHeaders(),
          body: JSON.stringify({
            nombre: this.form.name,
            apellidos: this.form.surname,
            email: this.form.email,
            username: this.form.nickname,
            password: this.form.password,
            fechaNacimiento: this.form.bornDate
          })
        })
        .then(res => res.json())
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
            this.$bvToast.toast("Usuario registrado correctamente", {
              title: "Success",
              autoHideDelay: 2000,
              variant: "success",
              toaster: "b-toaster-bottom-full"
              });
          }
        })
        .catch(err => console.error(err));
      }
    },
    name: 'SignupForm'
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