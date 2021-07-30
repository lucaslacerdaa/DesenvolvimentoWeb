class CarService {
    constructor() {
      this.cars = [];
      this.id = 0;
    }
  
    add(car) {
      this.id++;
      car.id = this.id;
      this.cars.push(car);
    }
  
    getAll() {
      return this.cars;
    }
  
    getById(id) {
      return this.cars.find((car) => car.id == id);
    }

    getByNum(num) {
      return this.cars.filter(function (el) {
        return el.id <= num;
      });
    }

    getByTradeMark(trademark) {
      return this.cars.filter(function (el) {
        return el.trademark == trademark;
      });
    }
  
    update(id, car) {
      this.cars.forEach(function (e) {
        if (id && id == e.id) {
          for (var i in car) {
            e[i] = car[i];
          }
        }
      });
    }
  
    delete(id) {
      this.cars = this.cars.filter(function (el) {
        return el.id != id;
      });
    }
  }
  
  module.exports = CarService;
  