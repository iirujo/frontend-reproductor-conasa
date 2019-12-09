<template>
  <div>
    <Navbar :actionButton="value"/>
    <LoginForm/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import LoginForm from './Login/LoginForm.vue'
import Footer from './Footer.vue'

  export default {
    components: {
      Navbar,
      LoginForm,
      Footer
    },
    name: 'Home',
    data (){
    return {
      value: "signup"
    }
  }
  }
</script>

<style scoped>
</style>