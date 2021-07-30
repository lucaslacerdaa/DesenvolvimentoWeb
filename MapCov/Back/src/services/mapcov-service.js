class MapcovService {
    constructor() {
      this.pacientes = [];
      this.id = 0;
    }
  
    add(paciente) {
      this.id++;
      paciente.id = this.id;
      this.pacientes.push(paciente);
    }
  
    getAll() {
      return this.pacientes;
    }
  
    getById(id) {
      return this.pacientes.find((paciente) => paciente.id == id);
    }
  
    update(id, paciente) {
      this.pacientes.forEach(function (e) {
        if (id && id == e.id) {
          for (var i in paciente) {
            e[i] = paciente[i];
          }
        }
      });
    }
  
    delete(id) {
      this.pacientes = this.pacientes.filter(function (el) {
        return el.id != id;
      });
    }
  }
  
  module.exports = MapcovService;
  