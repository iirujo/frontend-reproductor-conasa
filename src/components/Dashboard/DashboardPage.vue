<template>
    <div>
        <Navbar :actionButton="value"/>
        <Dashboard />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import Dashboard from './Dashboard.vue'
import Footer from '../Footer.vue'
export default {
    name: 'DashboardPage',
    components: {
        Navbar,
        Dashboard,
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