<template>
  <div class="container">
    <div id="info">
      <Info/>
    </div>
    <div id="card">
      <CardRegistrarComponent />
    </div>
  </div>
</template>

<script>
  import CardRegistrarComponent from '../components/CardRegistrarComponent/CardRegistrarComponent.vue'
  import Info from '../components/InfoAuthComponent/Info.vue'
  
  export default {
    name: 'Cadastro',
    components: {
      CardRegistrarComponent,
      Info,
    },
  }
</script>

<style scoped>
*{
  font-family: 'Poppins', sans-serif;
  background-color: rgb(233, 233, 233);
  color: rgb(100, 100, 100);
};
#info{
  border: 5px solid #000;
}


</style>