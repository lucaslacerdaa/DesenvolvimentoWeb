<template>
  Nome: <input type="text" name="" id="1" v-model="name" /> <br/><br/>
  Marca: <input type="text" name="" id="2" v-model="trademark" /> <br/><br/>
  Ano de Fabricação: <input type="text" name="" id="3" v-model="year_of_manufacture" /> <br/><br/>
  Ano do Modelo: <input type="text" name="" id="4" v-model="model_year" /> <br/><br/>
  Data da Venda: <input type="text" name="" id="5" v-model="sale_date" /> <br/><br/>
  Id: <input type="text" name="" id="0" v-model="id" /> <br/><br/>
  <button @click="inserirCars">Inserir Carro</button> <br/><br/>
  <button @click="fetchByIdCars">Buscar Carro</button>
  <button @click="deleteCars">Deletar Carro</button>
  <button @click="putCars">Atualizar Carro</button>
  <button @click="fetchCars">Mostrar Carros</button> <br/><br/>

  {{ Cars }} <br/><br/>

</template>

<script>
import axios from "axios";

export default {
  name: 'Cars',
  data() {
    return {
      id: "",
      name: "",
      trademark: "",
      year_of_manufacture: "",
      model_year: "",
      sale_date: "",
      body: "",
      Cars: [],
      car: "",
      CarsURI: "http://localhost:3000/cars",
    }
  },
  methods: {
    fetchCars: function() {
      axios.get(this.CarsURI).then((result) => {
        this.Cars = result.data;
      });
    },
    fetchByIdCars: function() {
      axios.get(this.CarsURI + "/" + this.id).then((result) => {
        this.Cars = result.data;
      });
    },
    inserirCars: function() {
      axios
        .post(this.CarsURI, {
          name: this.name,
          trademark: this.trademark,
          year_of_manufacture: this.year_of_manufacture,
          model_year: this.model_year,
          sale_date: this.sale_date,
        })
        .then((result) => {
          console.log(result);
        });
    },
    putCars: function() {
      axios
        .put(this.CarsURI + "/" + this.id, {
          name: this.name,
          trademark: this.trademark,
          year_of_manufacture: this.year_of_manufacture,
          model_year: this.model_year,
          sale_date: this.sale_date,
        })
        .then((result) => {
          console.log(result);
        });
    },
    deleteCars: function() {
      axios.delete(this.CarsURI + "/" + this.id).then((result) => {
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
