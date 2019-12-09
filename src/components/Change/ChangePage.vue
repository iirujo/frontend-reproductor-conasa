<template>
    <div>
        <Navbar :actionButton="value"/>
        <ChangeForm />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import ChangeForm from './ChangeForm.vue'
import Footer from '../Footer.vue'
export default {
    name: 'ChangePage',
    components: {
        Navbar,
        ChangeForm,
        Footer
    },
    data (){
        return {
            value: "logout"
        }
    }
}
</script>

<style scoped>

</style>