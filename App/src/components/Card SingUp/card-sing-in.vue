<template>
    <div class="container">
        <div class="title">
            <h1>
            Cadastro
            </h1>
        </div>
        
    <div class="card">
        <label class="nomes">
            Nome de Usuário
        </label>
        <br>
        <input
            type="text"
            class="inputs_form"
            name=""
            id="1"
            v-model="nome"
        />
        <br/>
        <label class="nomes">
            Senha
        </label>
        <br>
        <input
            type="password"
            class="inputs_form"
            name=""
            id="2"
            v-model="senha"
        />
        <br/>
        <label class="nomes">
            Confirme a senha
        </label>
        <br>
        <input
            type="password"
            class="inputs_form"
            name=""
            id="3"
            v-model="senha2"
        />
        <br/>
        <button
            class="button"
            @click="inserirUser">
            Cadastrar
        </button>
        <br/> 
        
        {{ Logins }}
        
        <br/>
        <br/>
    </div>
    </div>
</template>

<script scr="./script.js">
</script>

<style src="./style.scss" lang="scss" scoped>
</style>