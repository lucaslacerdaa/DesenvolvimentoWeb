<template>
  <div class="container">
    <Cadastro />
  </div>
</template>

<script>
import Cadastro from '../components/Cadastro.vue'

export default {
  name: 'cadastro',
  components: {
    Cadastro
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