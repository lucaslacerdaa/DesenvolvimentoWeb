/*---> Criar function Logar();*/

function logar(){
    
    if(validar_login()){
        window.location.href = "http://127.0.0.1:5500/listaAnuncios.html";
    }

};

function registar(){
    
    if(validar_cadastro()){
        window.location.href = "http://127.0.0.1:5500/listaAnuncios.html";
    }

};

var users = [
    {"usuario": "Joe", "senha": "12345678"},
    {"usuario": "Saulo", "senha": "12345678"},
    {"usuario": "John", "senha": "12345678"},
    {"usuario": "admim", "senha": "admim"},
];

function validar_login() {

    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if((user == "") || (senha == "")){
        alert("Usuario e Senha Devem ser Informados! Tente Novamente");
        return false;
    }

    for (var u in users) {
        var us = users[u];
        if ((us.usuario === user) && (us.senha === senha)) {
            return true;
        }
        if ((us.usuario === user) && (us.senha != senha)) {
            alert("Senha Incorreta! Tente Novamente");
            return false;
        }
    }

    alert("Usuario e Senha Nao Reconhecidos! Tente Novamente");
    return false;

};

function validar_cadastro() {

    let nome = document.getElementById('nome').value;
    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if((user == "") || ((senha == "") || (nome == ""))){
        alert("Há Campo(s) Vazios!");
        return false;
    }

    if(nome.length < 6){
        alert("Informe um Nome com no Mínimo 6 Caracteres!");
        return false;
    }

    if(user.length < 6){
        alert("Informe um Nome de Usuário com no Mínimo 6 Caracteres!");
        return false;
    }

    if(senha.length < 8){
        alert("Informe uma Senha com no Mínimo 8 Caracteres!");
        return false;
    }

    return true;

};

function redirecionarCadastro(){
    window.location.href = "http://127.0.0.1:5500/registrar-se.html";
};