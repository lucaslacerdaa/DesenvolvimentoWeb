const Car = require("../models/car");
const CarService = require("../services/car-service");
var carService = new CarService();

exports.get = (req, res) => {
  res.json(carService.getAll());
};

exports.getById = (req, res) => {
  res.json(carService.getById(req.params.id));
};

exports.getByNum = (req, res) => {
  res.json(carService.getByNum(req.params.id));
};

exports.getByTradeMark = (req, res) => {
  res.json(carService.getByTradeMark(req.querry.trademark))
};

exports.post = (req, res) => {
  res.json(carService.add(new Car(req.body.name, req.body.trademark, req.body.year_of_manufacture, req.body.model_year, req.body.sale_date)));
};

exports.put = (req, res) => {
  res.json(
    carService.update(
      req.params.id,
      new Car(req.body.name, req.body.trademark, req.body.year_of_manufacture, req.body.model_year, req.body.sale_date)
    )
  );
};

exports.delete = (req, res) => {
  res.json(carService.delete(req.params.id));
};
