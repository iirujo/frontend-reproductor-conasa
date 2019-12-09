<template>
    <b-modal id="player" hide-footer :title="this.playerTitle" ref="my-modal">
        <iframe :src="this.srcToPlay" width="300" height="380" 
            frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br>
        <b-button @click="hideModal" class="mt-3" block>
            Close
        </b-button>
    </b-modal>
</template>

<script>
export default {
    name: 'modalPlayer',
    props: ['srcToPlay', 'playerTitle'],
    methods: {
        hideModal() {
            this.$refs['my-modal'].hide()
        }
    }
    
}
</script>

<style scoped>

</style>