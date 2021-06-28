<template>
  <div class="container">
    <div class="form-todo form-group">
      <div class="SubCab">
        <h1>Inserir anúncio</h1>
      </div>

      <div class="row">
        <div class="col">
          <label for="titulo">Título</label>
          <br />
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Titulo"
            v-model="title"
          />
        </div>

        <div class="col">
          <label for="descricao">Descrição</label>
          <br />
          <input
            type="text"
            id="descricao"
            name="descrição"
            placeholder="Descrição"
            v-model="description"
          />
        </div>
        <div class="col-center">
          <label for="preco">Preço</label>
          <br />
          <input
            type="text"
            id="preco"
            name="preço"
            placeholder="R$ 0,00"
            v-model="price"
          />
        </div>

        <div class="col">
          <label for="localidade">Localidade</label>
          <br />
          <input
            type="text"
            id="localidade"
            name="Localidade"
            placeholder="Endereço"
            v-model="adress"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="quartos">Quartos</label>
          <br />
          <input
            type="text"
            id="quartos"
            name="quartos"
            placeholder="Quantidade quartos"
            v-model="bedroom"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <label for="vagas">Vagas de garagem</label>
          <br />
          <input
            type="text"
            id="vagas"
            name="vagas"
            placeholder="Quantidade vagas"
            v-model="garage"
          />
        </div>
        <div class="col-6">
          <label for="areaTerreno">Área do terreno</label>
          <br />
          <input
            type="text"
            id="areaTerreno"
            name="areaTerreno"
            placeholder="m²"
            v-model="area_ground"
          />
        </div>
        <div class="col-6">
          <label for="areaConstruida">Área construída</label>
          <br />
          <input
            type="text"
            id="areaConstruida"
            name="areaContruida"
            placeholder="m²"
            v-model="area_built"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="img">Imagem</label>
          <br />
          <input
            type="text"
            id="img"
            name="img"
            placeholder="URL da imagem"
            v-model="img"
          />
        </div>
      </div>

      <div class="buttons">
        <button type="button" class="btn btn-success" v-on:click="add()">
          Confirmar
        </button>
        <button type="button" class="btn btn-danger" v-on:click="limpar()">
          Limpar
        </button>
        <button type="button" class="btn btn-dark" v-on:click="dataStorage()">
          Dados do LocalStorage
        </button>
      </div>
    </div>

    <div class="list-group">
      <h1 class="listaTitulo">Lista</h1>
      <div id="list" class="list-group-item" v-for="ad in ads" :key="ad.title">
        <h2 class="title">Título: {{ ad.title }}</h2>
        <p>Descrição: {{ ad.description }}</p>
        <p>Preço: {{ ad.price }}</p>
        <p>Localidade: {{ ad.adress }}</p>
        <p>Quartos:{{ ad.bedroom }}</p>
        <p>Garagem: {{ ad.garage }} vagas</p>
        <p>Área terreno: {{ ad.area_ground }}m²</p>
        <p>Área construída: {{ ad.area_built }}m²</p>
        <img :src="ad.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [],
      title: "",
      description: "",
      price: "",
      adress: "",
      bedroom: "",
      garage: "",
      area_ground: "",
      area_built: "",
      img: "",
    };
  },
  methods: {
    add() {
      if (
        this.title.trim() === "" ||
        this.description.trim() === "" ||
        this.price.trim() === "" ||
        this.adress.trim() === "" ||
        this.bedroom.trim() === "" ||
        this.garage.trim() === "" ||
        this.area_ground.trim() === "" ||
        this.area_built.trim() === "" ||
        this.price <= 0 ||
        this.bedroom <= 0 ||
        this.garage < 0 ||
        this.area_ground <= 0 ||
        this.area_built < 0
      ) {
        return;
      }

      this.ads.push({
        title: this.title,
        description: this.description,
        price: this.price,
        adress: this.adress,
        bedroom: this.bedroom,
        garage: this.garage,
        area_ground: this.area_ground,
        area_built: this.area_built,
        img: this.img,
      });

      var adJSON = JSON.stringify(this.ads);
      localStorage.setItem("adsLs", adJSON);
    },
    limpar() {
      (this.title = ""),
        (this.description = ""),
        (this.price = ""),
        (this.adress = ""),
        (this.bedroom = ""),
        (this.garage = ""),
        (this.area_ground = ""),
        (this.area_built = ""),
        (this.img = "");
    },
    dataStorage() {
      var text = localStorage.getItem("adsLs");
      this.ads = JSON.parse(text);
    },
  },
};
</script>
