class Paciente {
    constructor(nome, sobrenome, cpf, idade, peso, telefone, email, rua, bairro, cidade, estado) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.idade = idade;
      this.peso = peso;
      this.rua = rua;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.telefone = telefone;
      this.email = email;
    }
  }
  
  module.exports = Paciente;