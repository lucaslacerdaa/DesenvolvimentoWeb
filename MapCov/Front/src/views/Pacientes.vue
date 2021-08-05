<template>
  <div class="container">
    <Pacientes />
  </div>
</template>

<script>
import Pacientes from '../components/Pacientes.vue'
export default {
  name: 'pacientes',
  components: {
    Pacientes
  }
}
</script>

<style>
*{
  background-color: rgb(165, 165, 165);
}
</style>