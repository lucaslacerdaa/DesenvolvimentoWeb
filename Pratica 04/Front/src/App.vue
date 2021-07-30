<template>
  <Cars />
</template>

<script>
import Cars from './components/Cars.vue'

export default {
  name: 'App',
  components: {
    Cars,
  }
}
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 80px;
}
</style>
