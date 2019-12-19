<template>
    <div>
        <Navbar :actionButton="value"/>
        <ChangePasswordForm />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import ChangePasswordForm from './ChangePasswordForm.vue'
import Footer from '../Footer.vue'
export default {
    name: 'ChangePasswordPage',
    components: {
        Navbar,
        ChangePasswordForm,
        Footer    
    },
    data() {
        return {
            value: "login"
        }
    }
    
}
</script>

<style scoped>

</style>