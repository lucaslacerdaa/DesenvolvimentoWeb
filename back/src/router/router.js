const express = require('express');
const {Router} = express;
const controller = require('../controller/employee_controller');
const {Post, GetAll, GetById, GetByoffice, GetByQtd, Update, Delete} = controller;

const routes = Router();

routes.post("/funcionario", Post);
routes.get("/funcionario", GetAll);
routes.get("/:id", GetById);
routes.get("/cargo/:cargo", GetByoffice);
routes.get("/quantidade/:qtd", GetByQtd);
routes.put("/:id", Update);
routes.delete("/:id", Delete)

module.exports =  routes;