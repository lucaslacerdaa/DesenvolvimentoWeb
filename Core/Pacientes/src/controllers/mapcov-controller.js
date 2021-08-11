const Paciente = require("../models/mapcov");
const PacienteService = require("../services/mapcov-service");
var pacienteService = new PacienteService();

exports.get = async (req, res) => {
  res.json(await pacienteService.getAll());
};
 
exports.getById = async (req, res) => {
  res.json(await pacienteService.getById(req.params.id));
};

exports.post = async (req, res) => {
  res.json(
    pacienteService.add(new Paciente(req.body.nome, req.body.sobrenome, req.body.cpf, req.body.idade, req.body.peso, req.body.telefone, req.body.email, req.body.rua, req.body.bairro, req.body.cidade, req.body.estado))
    );
};

