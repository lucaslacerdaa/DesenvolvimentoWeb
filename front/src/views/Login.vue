<template>
  <div class="container">
    <div id="info">
      <Info/>
    </div>
    <div id="card">
      <CardLoginComponent />
    </div>
  </div>
</template>

<script>
  import CardLoginComponent from '../components/CardLoginComponent/CardLoginComponent.vue'
  import Info from '../components/InfoAuthComponent/Info.vue'
  
  export default {
    name: 'Login',
    components: {
      CardLoginComponent,
      Info,
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