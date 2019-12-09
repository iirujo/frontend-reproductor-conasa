<template>
    <div>
        <Navbar :actionButton="value"/>
        <SignupForm />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import SignupForm from './SignupForm.vue'
import Footer from '../Footer.vue'
export default {
    name: 'SignupPage',
    components: {
        SignupForm,
        Navbar,
        Footer
    },
    data (){
        return {
            value: "login"
        }
    }
}
</script>

<style scoped>

</style>