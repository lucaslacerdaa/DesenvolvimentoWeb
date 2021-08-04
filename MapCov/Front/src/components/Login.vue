<template>
  <div>
    <h1>Login</h1>
      User:<input type="text" class="inputs_form" name="" id="1" v-model="nome" />
      Senha:<input type="password" class="inputs_form" name="" id="2" v-model="senha" />
      <button @click="redirect">Entrar</button> <br />
      <button @click="goToCasdastro">Deseja cadastrar-se?</button> <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      id: "",
      nome: "",
      senha: "",
      Users: [],
      UsersURI: "http://localhost:3080/login",
    };
  },

  methods: {
    fetchUsers: function () {
      axios.get(this.UsersURI).then((result) => {
        console.log(result);
        this.Users = result.data;
      });
    },
    checkEnter: function () {
      /*fetchUsers();
        for (let index = 0; index < Users.length; index++) {
            if(this.nome === Users.nome) {
                if(this.senha === Users.senha) {
                    return true
                }
            }
        }
        return false;*/
      //esse metodo precisa ser testado
    },
    redirect: function () {
      if (checkEnter) {
        //checa se
      } else {
        //chama a mesma pagina de login
      }
    },
    goToCasdastro: function () {
      //vai para a tela de cadastro
    },
  },
};
</script>

<style scoped>
</style>
