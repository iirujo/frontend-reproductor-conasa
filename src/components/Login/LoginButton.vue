<template>
    <div>
        <b-button variant="warning" to="/login"  class="box-shadow">Login</b-button>
    </div>
</template>

<script>
export default {
    name: 'LoginButton'
}
</script>

<style scoped>
    .box-shadow {
        box-shadow: 3px 3px 3px grey;
        font-weight: bold;
    }
</style>