const Paciente = require("../models/mapcov");
const PacienteService = require("../services/mapcov-service");
var pacienteService = new PacienteService();

exports.get = (req, res) => {
  res.json(pacienteService.getAll());
};

exports.getById = (req, res) => {
  res.json(pacienteService.getById(req.params.id));
};

exports.post = (req, res) => {
  res.json(pacienteService.add (new Paciente(req.body.nome, req.body.sobrenome, req.body.cpf, req.body.rg, req.body.idade, req.body.peso, req.body.endereco, req.body.telefone, req.body.email)));
};

exports.put = (req, res) => {
  res.json(
    pacienteService.update(
      req.params.id,
      new Paciente(req.body.nome, req.body.sobrenome, req.body.cpf, req.body.rg, req.body.idade, req.body.peso, req.body.endereco, req.body.telefone, req.body.email)
    )
  );
};

exports.delete = (req, res) => {
  res.json(pacienteService.delete(req.params.id));
};
