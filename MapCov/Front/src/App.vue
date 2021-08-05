<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Cadastro from './components/Cadastro.vue'
import Pacientes from './components/Pacientes.vue'


export default {
  name: 'App',
  components: {
    Login,
    Cadastro,
    Pacientes,
  }
}
</script>

<style>
*{
  background-color: rgb(165, 165, 165);
}
#app{
  text-align: right;
  background-color: wheat;
  /* 
  text-align: center;
  margin-top: 6rem; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  */
}
</style>
