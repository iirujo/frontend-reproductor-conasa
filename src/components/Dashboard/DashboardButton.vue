<template>
    <div>
        <b-button variant="primary" v-on:click="goTo" class="box-shadow">Return</b-button>
    </div>
</template>

<script>
import router from '../../router'
import { format } from 'path';
export default {
    name: 'DashboardButton',
    methods: {
        goTo() {
            let now = new Date();

            if (new Date(localStorage.getItem("time")) <= now) {
                localStorage.clear();
                alert("Session expired");
                router.push("/");
            }
            else {
                router.push("/dashboard")
            }
        }
    }
}
</script>

<style scoped>
    .box-shadow {
        box-shadow: 10px 10px 14px grey;
    }
</style>