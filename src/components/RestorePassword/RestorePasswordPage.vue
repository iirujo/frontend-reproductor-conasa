<template>
    <div>
        <Navbar :actionButton="value"/>
        <RestorePasswordForm />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import RestorePasswordForm from './RestorePasswordForm.vue'
export default {
    name: 'RestorePasswordPage',
    components: {
        Navbar,
        Footer,
        RestorePasswordForm
    },
    data(){
        return {
            value: "signup"
        }
    }
}
</script>

<style scoped>

</style>