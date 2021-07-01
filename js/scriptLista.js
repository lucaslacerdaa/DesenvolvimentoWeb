function adicionar() {

    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let quartos = document.getElementById("quartos").value;
    let vagas = document.getElementById("vagas").value;
    let areaTerreno = document.getElementById("areaTerreno").value;
    let areaConstruida = document.getElementById("areaConstruida").value;
    let localidade = document.getElementById("localidade").value;
    let preco = document.getElementById("preco").value;
    let img = document.getElementById("img").value;
    let anuncios = document.getElementById("anuncios").innerHTML;

    anuncios += "<br><label><br>"+ titulo + "</br>"+  descricao + "<br>"+ quartos + "</br>" + vagas + "<br>" + areaTerreno + "</br>" + areaConstruida + "<br>" + localidade + "</br>" + preco + "<br> <img src=\"" + img + "\"> </img> </br>";

    document.getElementById("anuncios").innerHTML = anuncios;
}

function limpar(){
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('quartos').value = '';
    document.getElementById('vagas').value = '';
    document.getElementById('areaTerreno').value = '';
    document.getElementById('areaConstruida').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('img').value = '';
}