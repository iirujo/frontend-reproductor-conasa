<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mixins } from "./mixins.js";
export default {
    mixins: [mixins]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
