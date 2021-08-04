<template>
    <h1>Login</h1>
    <div>
    User:   <input type="text"      class="inputs_form" name="" id="1"  v-model="user"/>
    Senha:  <input type="password"  class="inputs_form" name="" id="2"  v-model="senha"/>
    </div>
    
    <Pacientes />
</template>

<script>
import Pacientes from './components/Pacientes.vue'

export default {
  name: 'App',
  components: {
    Pacientes,
  }
}
</script>

<style>
#app {
  text-align: center;
  padding: display;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
}
</style>