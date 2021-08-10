<template>
<div class="container">
  <div class="title">
    <h1>
      Cadastro
    </h1>
  </div>
       
  <div class="card">
    <label class="nomes">Nome de Usuário</label>
    <br>
    <input
      type="text"
      class="inputs_form"
      name=""
      id="1"
      v-model="nome"
    />
    <br/>
    <label class="nomes">Senha</label>
    <br>
    <input
      type="password"
      class="inputs_form"
      name=""
      id="2"
      v-model="senha"
    />
    <br/>
    <label class="nomes">Confirme a senha</label>
    <br>
    <input
      type="password"
      class="inputs_form"
      name=""
      id="3"
      v-model="senha2"
    />
    <br/>
    <button
      class="button"
      @click="inserirUser">
      Cadastrar
    </button>
    <br/> 
    {{ Logins }}
    <br/>
    <br/>
  </div>
</div>
  

</template>

<script>
import axios from "axios";
export default {
  name: 'Cadastro',
  data() {
    return {
      id:"",
      nome:"",
      senha:"", 
      senha2:"",
      Users:[],
      UsersURI:"http://localhost:3080/login",
    }
  },
  methods: {
    handleFileUpload(id) {
 
      let obj = {
        resource: "login",
        id: id,
      };

      let json = JSON.stringify(obj);
 
      let form = new FormData();
      form.append("obj", json);
 
      axios
        .post(this.baseUpload, form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          console.log(result);
        });
    },
    
    inserirUser: function() {
      axios
        .post(this.UsersURI, {
          nome: this.nome,
          senha: this.senha,
        })
        .then((result) => {
          this.handleFileUpload(result.data.id);
        });
    },
  },
}
</script>

<style scoped>
/*-----------------------------------------------------------------*/
/*>>> Refazer todo este style baseado no bootstrap - João Lucas <<<*/
/*-----------------------------------------------------------------*/
*{
  font-family: poppins;
  text-align: center; 
}
.nomes{
  text-align: center;
  margin-bottom: 2rem;
  margin-left: -2em;
  color:rgb(38, 38, 38);

  
  background-color: transparent;
}

.title{
  font-size: 30px;
  margin-left: -2rem;
  margin-bottom: 6rem;
  text-align: center;
  color: rgb(255, 255, 255);  
}
.card{
  width: 500px;
  height: 400px;
  padding: 1rem;
  text-align:center;
  margin-left: 29rem;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}
.inputs_form{
  height: 20px;
  width: 200px;
  border-radius: 20px;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  background-color: white;
}
.buttons_login{
  width: 530px;
  margin-top: -5rem;
  text-align: center;
  background-color: rgba(0, 255, 255, 0);
}

.button{
  padding: 10px 50px 10px 50px;
  text-align: center;
  margin-left: -2em;
  margin-top: 2rem;
  background-color: rgb(29, 129, 29);
  color: rgb(255, 255, 255);
  border-radius: 5px;
}
</style>