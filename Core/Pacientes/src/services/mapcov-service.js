const pacientesRepo = require("../repositories/pacientes-repo");

class MapcovService {
  
    add(paciente) {
      return pacientesRepo.save(paciente);
    }
  
    getAll() {
      return pacientesRepo.findAll();
    }
    
    getById(id) {
      return pacientesRepo.findOne(id);
    }
  }
  
  module.exports = MapcovService;
  