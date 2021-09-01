<template>
    <div id="container">
        
            <h1>Cadastro</h1>

            <label id="titulo"> Usuário </label>
            <input type="text" id="text-box" v-model="user">
            
            <label id="titulo"> E-mail </label>
            <input type="email" id="text-box" v-model="email">

            <label id="titulo">Senha</label>
            <input type="password" id="text-box" v-model="password">

            <label id="subtitle">Precisa de ajuda</label>

            <button id="entrar" @click= validatorsSignUp()>Enviar</button>
            <button id="Cadastrar" @click=" this.$router.go(-1) ">Voltar</button>

            <div v-if="errors.length" id ="Errors">
                <b id="titleError">Corrija o(s) seguinte(s) dado(s):</b>
                <ul>
                    <li id="exc" v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
    </div>
</template>
<script src="./script.js"></script>
<style src="./style.css" scoped></style>