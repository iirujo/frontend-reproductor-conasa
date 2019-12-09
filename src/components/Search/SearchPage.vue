<template>
    <div>
        <Navbar :actionButton="value"/>
        <SearchForm />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import SearchForm from './SearchForm.vue'
import Footer from '../Footer.vue'
export default {
    name: 'SearchPage',
    components: {
        Navbar,
        SearchForm,
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