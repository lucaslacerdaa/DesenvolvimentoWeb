<template>
  Nome: <input type="text" name="" id="1" v-model="nome" /> <br/>
  Sobrenome: <input type="text" name="" id="2" v-model="sobrenome" /> <br/>
  Idade: <input type="text" name="" id="3" v-model="idade" /> <br/>
  Peso: <input type="text" name="" id="4" v-model="peso" /> <br/>
  Telefone: <input type="text" name="" id="6" v-model="telefone" /> <br/>
  Email: <input type="text" name="" id="7" v-model="email" /> <br/>
  CPF: <input type="text" name="" id="8" v-model="cpf" /> <br/>
  Rua: <input type="text" name="" id="9" v-model="rua" /> <br/>
  Bairro: <input type="text" name="" id="10" v-model="bairro" /> <br/>
  Cidade: <input type="text" name="" id="11" v-model="cidade" /> <br/>
  Estado: <input type="text" name="" id="12" v-model="estado" /> <br/>
      
  Id: <input type="text" name="" id="0" v-model="id" /> <br/>

  <button @click="inserirPacientes">Inserir Paciente</button> <br/>
  <button @click="fetchByIdPacientes">Buscar Paciente</button>
  <button @click="fetchPacientes">Mostrar Todos</button> <br/>

  {{ Pacientes }} <br/><br/>

</template>

<script>
import axios from "axios";

export default {
  name: 'Pacientes',
  data() {
    return {
      id: "",
      nome: "", 
      sobrenome: "", 
      cpf: "",
      idade: "", 
      peso: "", 
      telefone: "", 
      email: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      Pacientes: [],
      PacientesURI: "http://localhost:3000/pacientes",
    }
  },

  methods: {
    handleFileUpload(id) {
 
      let obj = {
        resource: "pacientes",
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
    fetchPacientes: function() {
      axios.get(this.PacientesURI).then((result) => {
        console.log(result);
        this.Pacientes = result.data;
      });
    },
    fetchByIdPacientes: function() {
      axios.get(this.PacientesURI + "/" + this.id).then((result) => {
        console.log(result);
        this.Pacientes = result.data;
      });
    },
    inserirPacientes: function() {
      axios
        .post(this.PacientesURI, {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
          idade: this.idade,
          peso: this.peso,
          telefone: this.telefone,
          email: this.email,
          rua: this.rua,
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
        })
        .then((result) => {
          this.handleFileUpload(result.data.id);
        });
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

button#puts {
  font-size: 12pt;
    font-family: 'Times New Roman', Times, serif;
    width: 200px;
    padding: 2px;
    border-radius: 3px;
    margin: 15px;
    text-align: center;
    background-color:rgb(224, 145, 88);
}

li#lista {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: rgb(228, 220, 220);
  padding: 4px;
  border-radius: 4px;
  margin: auto;
  text-align: center;
}

div#ponto {
  color: rgb(255, 0, 0);
}

</style>
