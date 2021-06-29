<template >
  <div class="container" style="">
    <div
      class="card"
      style="
        width: 70rem;
        margin-top: 2rem;
        text-align: center;
        margin-bottom: 2rem;
      "
    >
      <ul class="list-group list-group-flush">
        <div class="SubCab">
          <h1 style="margin-bottom: 2rem; margin-top: 2rem">Inserir anúncio</h1>
        </div>

        <div class="row">
          <div class="col-12">
            <label for="titulo" style="font-size: 20px; margin-top: 1rem"
              >Título</label
            >
            <br />
            <input
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Titulo"
              v-model="title"
              style="width: 60%"
            />
          </div>

          <div class="col-12">
            <label for="descricao" style="font-size: 20px; margin-top: 1rem"
              >Descrição</label
            >
            <br />
            <input
              type="text"
              id="descricao"
              name="descrição"
              placeholder="Descrição"
              v-model="description"
              style="width: 60%"
            />
          </div>
          <div class="col-12">
            <label for="preco" style="font-size: 20px; margin-top: 1rem"
              >Preço</label
            >
            <br />
            <input
              type="number"
              id="preco"
              name="preço"
              placeholder="R$ 0,00"
              v-model="price"
              style="width: 60%"
            />
          </div>

          <div class="col-12">
            <label for="localidade" style="font-size: 20px; margin-top: 1rem"
              >Localidade</label
            >
            <br />
            <input
              type="text"
              id="localidade"
              name="Localidade"
              placeholder="Endereço"
              v-model="adress"
              style="width: 60%"
            />
          </div>

          <div class="col-12">
            <label for="quartos" style="font-size: 20px; margin-top: 1rem"
              >Quartos</label
            >
            <br />
            <input
              type="number"
              id="quartos"
              name="quartos"
              placeholder="Quantidade quartos"
              v-model="bedroom"
              style="width: 60%"
            />
          </div>

          <div class="col-12">
            <label for="vagas" style="font-size: 20px; margin-top: 1rem"
              >Vagas de garagem</label
            >
            <br />
            <input
              type="number"
              id="vagas"
              name="vagas"
              placeholder="Quantidade vagas"
              v-model="garage"
              style="width: 60%"
            />
          </div>

          <div class="col-12">
            <label for="areaTerreno" style="font-size: 20px; margin-top: 1rem"
              >Área do terreno</label
            >
            <br />
            <input
              type="number"
              id="areaTerreno"
              name="areaTerreno"
              placeholder="m²"
              v-model="area_ground"
              style="width: 60%"
            />
          </div>
          <div class="col-12">
            <label
              for="areaConstruida"
              style="font-size: 20px; margin-top: 1rem"
              >Área construída</label
            >
            <br />
            <input
              type="number"
              id="areaConstruida"
              name="areaContruida"
              placeholder="m²"
              v-model="area_built"
              style="width: 60%"
            />
          </div>

          <div class="col-12">
            <label for="img" style="font-size: 20px; margin-top: 1rem"
              >Imagem</label
            >
            <br />
            <input
              type="text"
              id="img"
              name="img"
              placeholder="URL da imagem"
              v-model="img"
              style="width: 60%"
            />
          </div>
        </div>

        <div class="buttons" style="padding: 1rem; text-align:center">
          <button
            type="button"
            class="btn btn-success"
            v-on:click="add()"
          >
            Confirmar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            v-on:click="limpar()"
            style="margin-left: 2rem"
          >
            Limpar
          </button>
          <button
            type="button"
            class="btn btn-dark"
            v-on:click="dataStorage()"
            style="margin-left: 2rem"
          >
            Dados do LocalStorage
          </button>
        </div>
      </ul>

      <div class="list-group">
        <h1 class="listaTitulo">Lista</h1>
        <div
          id="list"
          class="list-group-item"
          v-for="ad in ads"
          :key="ad.title"
          style="text-align: center"
        >
          <h2 class="title">{{ ad.title }}</h2>
          <p>{{ ad.description }}</p>
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
