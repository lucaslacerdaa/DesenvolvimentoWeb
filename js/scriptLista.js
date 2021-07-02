/*...
--> A T E N Ç Ã O <--

Essa functions funcional, entretando não para o código novo.
Tem que adicionar mais campos, mudar os nomes do getElementById() para os ids dos campos novos assim como a outra functions de lista.

Ao fazer o ToString da listagem apresentar a seguinte estrutura:
----
Nome: Exemplo Funlando
CPF: 000.000.000-00     RG: 00000000-0
Idade: 00   Peso: 00
Data do exame: 00.00.2000
Tipo sanguineo: O+
Comorbidades: Asma, Diabetes.
Email: exemplo@exe.com  Telefone: (00) 0 0000.0000

"--> foto da ficha do google <--"
---

...*/

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