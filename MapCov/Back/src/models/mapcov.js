class Paciente {
    constructor(nome, sobrenome, cpf, rg, idade, peso, endereco, telefone, email) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.rg = rg;
      this.idade = idade;
      this.peso = peso;
      this.endereco = endereco;
      this.telefone = telefone;
      this.email = email;
    }
  }
  
  module.exports = Paciente;