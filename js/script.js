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
        alert("Usuário e senha devem ser informados. Tente novamente.");
        return false;
    }

    for (var u in users) {
        var us = users[u];
        if ((us.usuario === user) && (us.senha === senha)) {
            return true;
        }
        if ((us.usuario === user) && (us.senha != senha)) {
            alert("Senha incorreta! Tente novamente.");
            return false;
        }
    }

    alert("Usuário e senha não reconhecidos! Tente novamente.");
    return false;

};

function validar_cadastro() {

    let nome = document.getElementById('nome').value;
    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if((user == "") || ((senha == "") || (nome == ""))){
        alert("Há campo(s) vazios!");
        return false;
    }

    if(nome.length < 6){
        alert("Informe um nome com no mínimo 6 Caracteres.");
        return false;
    }

    if(user.length <= 6){
        alert("Informe um usuário com no mínimo 6 Caracteres.");
        return false;
    }

    if(senha.length < 8){
        alert("Informe uma senha com no mínimo 8 Caracteres.");
        return false;
    }

    return true;

};

function redirecionarCadastro(){
    window.location.href = "http://127.0.0.1:5500/registrar-se.html";
};