<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from '../components/FormLogin.vue'

export default {
  name: 'login',
  components: {
    Login
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