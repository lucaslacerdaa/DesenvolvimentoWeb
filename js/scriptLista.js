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

    console.log('entrou');
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let CPF = document.getElementById("cpf").value;
    let RG = document.getElementById("rg").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let dataExame = document.getElementById("dataExame").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    let comorbidades = document.getElementById("comorbidades").value;
    let arquivo = document.getElementById("arquivo").value;
    let pacientes = document.getElementById("pacientes").innerHTML;

    pacientes += "<br><label><br>"+
    nome + sobrenome + "</br>"+
    CPF + "  "+ RG +"<br>"+
    idade + "</br>" +
    peso + "<br>" +
    dataExame + "<br>" +
    email + "<br>" +
    telefone + "</br>" +
    tipoSanguineo + 
    "<br>" + comorbidades + "</br>" + 
    "<br> <img src=\"" + arquivo + "\"> </br>";

    document.getElementById("pacientes").innerHTML = pacientes;
}

function limpar(){
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('rg').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('dataExame').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('tipoSanguineo').value = '';
    document.getElementById('comorbidades').value = '';
    document.getElementById('arquivo').value = '';
}