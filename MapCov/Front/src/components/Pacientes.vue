<template>
  Nome: <input type="text" name="" id="1" v-model="nome" /> <br/>
  Sobrenome: <input type="text" name="" id="2" v-model="sobrenome" /> <br/>
  Idade: <input type="text" name="" id="3" v-model="idade" /> <br/>
  Peso: <input type="text" name="" id="4" v-model="peso" /> <br/>
  Endereço: <input type="text" name="" id="5" v-model="endereco" /> <br/>
  Telefone: <input type="text" name="" id="6" v-model="telefone" /> <br/>
  Email: <input type="text" name="" id="7" v-model="email" /> <br/>
  CPF: <input type="text" name="" id="8" v-model="cpf" /> <br/>
  RG: <input type="text" name="" id="9" v-model="re" /> <br/>
  Id: <input type="text" name="" id="0" v-model="id" /> <br/>

  <button @click="inserirPacientes">Inserir Paciente</button> <br/>
  <button @click="fetchByIdPacientes">Buscar Paciente</button>
  <button @click="deletePacientes">Deletar Paciente</button>
  <button @click="putPacientes">Atualizar Paciente</button>
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
      rg: "", 
      idade: "", 
      peso: "", 
      endereco: "", 
      telefone: "", 
      email: "",
      Pacientes: [],
      PacientesURI: "http://localhost:3000/pacientes",
    }
  },
  methods: {
    fetchPacientes: function() {
      axios.get(this.PacientesURI).then((result) => {
        this.Pacientes = result.data;
      });
    },
    fetchByIdPacientes: function() {
      axios.get(this.PacientesURI + "/" + this.id).then((result) => {
        this.Pacientes = result.data;
      });
    },
    inserirPacientes: function() {
      axios
        .post(this.PacientesURI, {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
          rg: this.rg,
          idade: this.idade,
          peso: this.peso,
          endereco: this.endereco,
          telefone: this.telefone,
          email: this.email,
        })
        .then((result) => {
          console.log(result);
        });
    },
    putPacientes: function() {
      axios
        .put(this.PacientesURI + "/" + this.id, {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
          rg: this.rg,
          idade: this.idade,
          peso: this.peso,
          endereco: this.endereco,
          telefone: this.telefone,
          email: this.email,
        })
        .then((result) => {
          console.log(result);
        });
    },
    deletePacientes: function() {
      axios.delete(this.PacientesURI + "/" + this.id).then((result) => {
        console.log(result);
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
