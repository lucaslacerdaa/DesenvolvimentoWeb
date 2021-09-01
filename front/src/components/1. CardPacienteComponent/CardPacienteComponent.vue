<template>
    <div id="container" @click="abrirPerfilComponent()">

            <img src="../../assets/imagens/perfil1.png" alt="imagem de perfil">

            <h1 class="nome">João Lucas Barreto Lacerda</h1>
            
            <label id="titulo" class="Endereco"> Rua Francisco Mariano, N°69, Crateús </label>
            <div id="estado">
                <label id="titulo" class="status"> Em tratamento</label>
                <label id="titulo">  -  </label>                                                 <!-- Elemento fixo -->
                <label id="titulo" class="date">10 restantes</label>
            </div>
            <label id="subtitle" class="subtitle">Ver mais</label>                               <!-- Elemento fixo -->
            <!-- Tem que estudar como fazer retorno com props -->
            <!-- Essas mensagens são SOMENTE um esboço para ver o comportamente do conteúdo dentro do componente -->
    </div>
</template>
<script src="./script.js"></script>
<style src="./style.css" scoped></style>