<template>
  Nome de Usuário: <input type="text" name="" id="1" v-model="nome" /> <br/>
  Senha: <input type="text" name="" id="2" v-model="senha" /> <br/>
  Repita a Senha: <input type="text" name="" id="3" v-model="senha2" /> <br/>

  <button @click="inserirUser">Cadastrar</button> <br/>

  {{ Logins }} <br/><br/>

</template>

<script>
import axios from "axios";

export default {
  name: 'Cadastro',
  data() {
    return {
      id: "",
      nome: "",
      senha: "", 
      senha2: "",
      Users: [],
      UsersURI: "http://localhost:3080/login",
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


</style>
