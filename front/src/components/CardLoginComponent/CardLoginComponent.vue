<template>
    <div id="container">
        <h1>Login</h1>
        
        <label for="" id="titulo"> Usuário </label>            
        <input type="text" id="text-box" v-model="user"> 

        <label for="" id="titulo">Senha</label>
        <input type="password" id="text-box" v-model="password">

        <label id="subtitle">Esqueci a senha</label>

        <button id="entrar" @click= validatorsLogin()>Entrar</button>
        <button id="Cadastrar" @click=" this.$router.go(-1) ">Registrar-se</button>

        <p v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </p>
    </div>
</template>
<script src="./script.js"></script>
<style src="./style.css" scoped></style>