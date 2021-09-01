<template>
    <div id="container" @click="abrirPerfilComponent()">

            <img src="../../assets/imagens/perfil1.png" alt="imagem de perfil">

            <h1 class="nome">Card Pacientes exemplo</h1>
            
            <label id="titulo" class="Endereco"> Rua Manuel Barbosa, N°1000, Crateús CE </label>
            <div id="estado">
                <label id="titulo" class="status"> Tratado</label>
                <label id="titulo">  -  </label>                                                 <!-- Elemento fixo -->
                <label id="titulo" class="date">De alta</label>
            </div>
            <label id="subtitle" class="subtitle">Ver mais</label>                               <!-- Elemento fixo -->
            <!-- Tem que estudar como fazer retorno com props -->
            <!-- Essas mensagens são SOMENTE um esboço para ver o comportamente do conteúdo dentro do componente -->
    </div>
</template>
<script src="./script.js"></script>
<style src="./style.css" scoped></style>