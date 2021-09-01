<template>
  <div class="container">
    <div id="card">
      <CardPacienteComponent />
      <CardPacienteComponent />
      <CardPacienteExemploComponent />    
    </div>
  </div>
</template>

<script>
  import CardPacienteComponent from '../components/1. CardPacienteComponent/CardPacienteComponent.vue'
  import CardPacienteExemploComponent from '../components/2.CardPacienteComponent_exemplo/CardPacienteExemploComponent.vue'
  
  export default {
    name: 'Listagem',
    components: {
      CardPacienteComponent,
      CardPacienteExemploComponent,
    },
  }
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
  background-color: rgb(233, 233, 233);
  color: rgb(100, 100, 100);
};
</style>