const User = require("../models/login");
const LoginService = require("../services/login-service");
var loginService = new LoginService();

exports.get = async (req, res) => {
  res.json(await loginService.getAll());
};

exports.post = async (req, res) => {
  res.json(
    loginService.add(new User(req.body.nome, req.body.senha))
    );
};
