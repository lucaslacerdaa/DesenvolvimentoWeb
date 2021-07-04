/*---> Criar function Logar();*/

function logar(){
    
    if(validar_login()){
        window.location.href = "http://127.0.0.1:5500/listaAnuncios.html";
    }

};
var users = [
    {"usuario": "JoeJose", "senha": "vereador123"},
    {"usuario": "SauloCav", "senha": "dinosaulo123"},
    {"usuario": "JohnLacerda", "senha": "teletubbies123"},
];

function validar_login() {

    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    let alerts = document.getElementById("alert").innerHTML;

    if((user == "") || (senha == "")){
        alert += "<div id=\"alertLogin\"> Usuario e Senha Devem ser Informados! Tente Novamente </div>"; 
        return false;
    }

    for (var u in users) {
        var us = users[u];
        if ((us.usuario != user) && (us.senha === senha)) {
            alert += "<div id=\"alertLogin\"> Usuário inválido! Tente Novamente </div>"; 
            return false;
        }
        if ((us.usuario === user) && (us.senha === senha)) {
            return true;
        }
        if ((us.usuario === user) && (us.senha != senha)) {
            alert += "<div id=\"alertLogin\"> Senha incorreta! Tente Novamente </div>"; 
            return false;
        }
    }


    alert += "<div id=\"alertLogin\"> Usuario e Senha não reco! Tente Novamente </div>"; 
    return false;

};

function lista(){

};