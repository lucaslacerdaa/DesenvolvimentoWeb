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
/*-----------------------------------------------------------------------------*/
/*>>> Definir um padrão para os styles/Retirar o desnecessario - João Lucas <<<*/
/*-----------------------------------------------------------------------------*/
*{
  background-color: rgb(165, 165, 165);
}
</style>