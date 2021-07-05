function registar_se(){
    
    if(validar_cadastro()){
        window.location.href = "http://127.0.0.1:5500/listaAnuncios.html";
    }

};
function validar_cadastro() {

    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;
    let confirmSenha = document.getElementById('confirmSenha').value;

    if((user == "") || ((senha == "") || (confirmSenha == ""))){
        alert("Há campo(s) vazios!");
        return false;
    }
    if(user.length < 6){
        alert("Informe um nome com no mínimo 6 Caracteres.");
        return false;
    }
    if(senha.length <= 6){
        alert("Informe um usuário com no mínimo 6 Caracteres.");
        return false;
    }
    if(confirmSenha.length < 8){
        alert("Informe uma senha com no mínimo 8 Caracteres.");
        return false;
    }

    return true;

};


/*
function registar(){
    window.location.href = "http://127.0.0.1:5500/listaAnuncios.html";
};
*/