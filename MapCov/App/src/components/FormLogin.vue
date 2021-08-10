<template>
  <div class="container">
    <div class="title">
      <h1>Login</h1>
    </div>
    <div class="card">
      <label>
        User
      </label>
      <input
        type="text"
        class="inputs_form"
        name=""
        id="1"
        v-model="nome"
      />
      <br>
      <label>
        Senha
      </label>
      <input
        type="password"
        class="inputs_form"
        name=""
        id="2"
        v-model="senha"
      />
      <br>
    </div>
    <div class="buttons_login">
      <router-link 
        id="button"
        class = "entrar" 
        to = "/pacientes">
        Entrar
      </router-link>
      <br>
      <router-link 
        id = "button" 
        class = "buttonSignUp" 
        to = "/cadastro">
        Cadastrar-se
      </router-link>
    </div>
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
    fetchUsers: function(){
      axios.get(this.UsersURI).then((result)=>{
        console.log(result);
        this.Users = result.data;
      });
    },
    /*-----------------------------------------*/
    /*>>> Arrumar essas functions - Joelson <<<*/
    /*-----------------------------------------*/
    checkEnter: function(){
      /*fetchUsers();
        for (let index = 0; index < Users.length; index++){
          if(this.nome === Users.nome){
            if(this.senha === Users.senha){
              return true
            }
          }
        }
        return false;*/
      //Esse metodo precisa ser testado
    },
    redirect: function(){
      if (checkEnter){
        //Checa se
      } else{
        //Chama a mesma pagina de login
      }
    },
    goToCasdastro: function(){
      //vai para a tela de cadastro
    },
  },
};
</script>

<style scoped>
/*-----------------------------------------------------------------*/
/*>>> Refazer todo este style baseado no bootstrap - João Lucas <<<*/
/*-----------------------------------------------------------------*/
*{
  font-family: poppins; 
}
.container{
  width: 600px;
  height: 417px;
  
  margin-top: 8rem;
  margin-bottom: 2rem;
  margin-left: 32rem;
    
  text-align: center;
  background-color: rgba(167, 51, 51, 0);
}
.title{
  font-size: 30px;
  margin-left: -4rem;
  text-align: center;
  color: rgb(255, 255, 255);  
}
.card{
  width: 500px;
  height: 200px;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgb(235, 235, 235);
}
.inputs_form{
  height: 20px;
  width: 150px;
  border-radius: 20px;
  text-align: left;
  margin-top: 2rem;
  margin-right: 2rem;
  background-color: white;
}
.buttons_login{
  width: 530px;
  margin-top: -5rem;
  text-align: center;
  background-color: rgba(0, 255, 255, 0);
}
.buttonSignUp{
  text-decoration: none;
  margin-top: 0.75rem;
  background-color: rgb(33, 69, 71);
}
.buttonSignIn{
  background-color: rgb(29, 129, 29);
}
#button{
  color: rgb(255, 255, 255);
  border-radius: 5px;
}
</style>