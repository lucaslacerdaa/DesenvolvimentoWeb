<template>

</template>

<script>
import axios from "axios";

export default {
  name: 'Pacientes',
  data() {
    return {
      
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