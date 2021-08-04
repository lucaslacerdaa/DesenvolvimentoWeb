<template>
<div id="container">
  <div class="card">
    Nome:      <input type="text"  class="inputs_form" name="" id="1"  v-model="nome"/> 
    Sobrenome: <input type="text"  class="inputs_form" name="" id="2"  v-model="sobrenome">
    Idade:     <input type="text"  class="inputs_form" name="" id="3"  v-model="idade"/>
    Peso:      <input type="text"  class="inputs_form" name="" id="4"  v-model="peso"/>
    Telefone:  <input type="text"  class="inputs_form" name="" id="6"  v-model="telefone"/>
    Email:     <input type="text"  class="inputs_form" name="" id="7"  v-model="email"/>
    CPF:       <input type="text"  class="inputs_form" name="" id="8"  v-model="cpf"/>
    Rua:       <input type="text"  class="inputs_form" name="" id="9"  v-model="rua"/>
    Bairro:    <input type="text"  class="inputs_form" name="" id="10" v-model="bairro"/>
    Cidade:    <input type="text"  class="inputs_form" name="" id="11" v-model="cidade"/>
    Estado:    <input type="text"  class="inputs_form" name="" id="12" v-model="estado"/>
    Id:        <input type="text"  class="inputs_form" name="" id="0"  v-model="id"/>
  </div>
  <div class="buttons_card">
    <div class="buttonId">
      <button 
        class = "buttons" 
        @click="inserirPacientes">
        Inserir Paciente
      </button><br/>
    </div>
    <div class="buttonId">
      <button
        class="buttons"
        @click="fetchByIdPacientes">
        Buscar Paciente
      </button>
    </div>
    <div class="buttonId">
      <button
        class="buttons"
        @click="fetchPacientes">
        Mostrar Todos
      </button>
      <br/>
    </div>
  </div>
</div>
  
{{Pacientes}} <br/><br/>

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
      email:"",
      rua:"",
      bairro: "",
      cidade: "",
      estado: "",
      Pacientes: [],
      PacientesURI: "http://localhost:3000/pacientes",
    }
  },

  methods:{
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
root{
  text-align: center;

}
.card{
  text-align: center;
  padding: 200px;
  width: 100px;
  height: 100px;
  /*margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: auto;*/
  background: rgb(173, 23, 23);
  color: rgb(255, 255, 255);
}
.inputs_form{
  text-align: center;
  width: 250px;
  margin-top: 1rem;
  
}
.buttons_card{
  width: 30px;
  height: 30px;
  padding: 100px;
  margin-top: 1rem;
}
/*.buttonId{

}*/

/*ul {
  list-style-type: none;
}

button#puts {
  text-align: center;
  width: 200px;
  padding: 2px;
  border-radius: 3px;
  margin: 15px;
  background-color:rgb(224, 145, 88);
  font-size: 12pt;
  font-family: 'Times New Roman', Times, serif;
}

li#lista {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: rgb(228, 220, 220);
  padding: 8px;
  border-radius: 4px;
}

div#ponto {
  color: rgb(255, 0, 0);
}*/
#container{
  text-align: center;
  padding: 200px;
  width: 400px;
  height: 400px;
  /*margin: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;*/
  background-color: rgb(146, 8, 8);
}

</style>
