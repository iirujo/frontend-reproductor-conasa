<template>
    <div>
        <b-button variant="warning" v-on:click="deleteLocalStorage" class="box-shadow">
            Logout
        </b-button>
    </div>
</template>

<script>
import router from '../../router.js';
export default {
    name: 'LogoutButton',
    methods: {
        deleteLocalStorage() {
            localStorage.clear();
            router.push("/login");
        }
    }
}
</script>

<style scoped>
    .box-shadow {
        box-shadow: 3px 3px 3px grey;
    }
</style>