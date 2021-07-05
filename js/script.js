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
    {"usuario": "admin", "senha": "admin"},
];

function validar_login() {

    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;
    let alerts = document.getElementById('alerts').innerHTML;

    if((user == "") || (senha == "")){
        alerts = "<div class=\"alert alert-danger\" role=\"alert\">Usuario e Senha Devem ser Informados! Tente Novamente</div>";
        document.getElementById("alerts").innerHTML = alerts;
        return false;
    }

    for (var u in users) {
        var us = users[u];
        if ((us.usuario === user) && (us.senha === senha)) {
            return true;
        }
        if ((us.usuario != user) && (us.senha === senha)) {
            alerts = "<div class=\"alert alert-danger\" role=\"alert\">Usuario incorreto! Tente Novamente</div>";
            document.getElementById("alerts").innerHTML = alerts;
            return false;
        }
        if ((us.usuario === user) && (us.senha != senha)) {
            alerts="<div class=\"alert alert-danger\" role=\"alert\">Senha incorreta! Tente Novamente</div>";
            document.getElementById("alerts").innerHTML = alerts;
            return false;
        }
    }

    alerts = "<div class=\"alert alert-danger\" role=\"alert\">Usuario e Senha não reconhecidos! Tente Novamente</div>";
    document.getElementById("alerts").innerHTML = alerts;
    return false;

};

function validar_cadastro() {

    let nome = document.getElementById('nome').value;
    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if((user == "") || ((senha == "") || (nome == ""))){
        alerts = "<div class=\"alert alert-danger\" role=\"alert\">Há Campo(s) Vazios!</div>";
        document.getElementById("alerts").innerHTML = alerts;
        return false;
    }

    if(nome.length < 6){
        alerts = "<div class=\"alert alert-danger\" role=\"alert\">Informe um Nome com no Mínimo 6 Caracteres!</div>";
        document.getElementById("alerts").innerHTML = alerts;
        return false;
    }

    if(user.length < 6){
        alerts = "<div class=\"alert alert-danger\" role=\"alert\">Informe um Nome de Usuário com no Mínimo 6 Caracteres!</div>";
        document.getElementById("alerts").innerHTML = alerts;
        return false;
    }

    if(senha.length < 8){
        alerts = "<div class=\"alert alert-danger\" role=\"alert\">Informe uma Senha com no Mínimo 8 Caracteres!</div>";
        document.getElementById("alerts").innerHTML = alerts;
        return false;
    }

    return true;

};

function redirecionarCadastro(){
    window.location.href = "http://127.0.0.1:5500/registrar-se.html";
}
