<template>
    <div>
        <Navbar :actionButton="value"/>
        <LoginForm />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import LoginForm from './LoginForm.vue'
import Footer from '../Footer.vue'
export default {
    components: {
        LoginForm,
        Navbar,
        Footer
    },
    name: 'LoginPage',
    data(){
        return {
            value: "signup"
        }
    }
}
</script>

<style scoped>

</style>