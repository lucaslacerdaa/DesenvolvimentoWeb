<template>
  <div class="container">
    <router-link to="/Cadastro"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
/*-----------------------------------------------------------------------------*/
/*>>> Definir um padrão para os styles/Retirar o desnecessario - João Lucas <<<*/
/*-----------------------------------------------------------------------------*/
*{
  background-color: rgb(165, 165, 165);
}
#app{
  text-align: right;
  background-color: wheat;
}
</style>