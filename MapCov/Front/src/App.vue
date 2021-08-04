<template>
  <Login />
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
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 80px;
}
</style>
