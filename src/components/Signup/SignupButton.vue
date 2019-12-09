<template>
    <div>
        <b-button variant="warning" to="/signup" class="box-shadow">Sign Up</b-button>
    </div>
</template>

<script>
export default {
    name: 'SignupButton'
}
</script>

<style scoped>
    .box-shadow {
        box-shadow: 3px 3px 3px grey;
        font-weight: bold;
    }
</style>