<template>
    <div>
        <img alt="Erro 404" src="../assets/ErrorMessage.svg">
        <button @click=" this.$router.go(-1) ">Retornar</button>
    </div>
</template>

<script>
export default {
    name: 'Contrucao',
}
</script>
<style>
img{
    width: 27%;
    margin-top: -2em;
    margin-left: 2rem;
}
button{
    width: 10em;
    height: 3em;
    display: block;
    margin-top: 0.5em;
    margin-left: auto;
    margin-right: auto;

    color: white;
    border:transparent;
    border-radius: 10px;
    background-color: #329542;
    transition: background-color 0.2s;
}
button:hover{
    cursor: pointer;
    color: white;
    background-color: #47ce5d;
}
</style>