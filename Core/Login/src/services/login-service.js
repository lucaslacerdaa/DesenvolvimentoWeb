const loginRepo = require("../repositories/login-repo");

class LoginService {
  add(login) {
    return loginRepo.save(login);
  }
  getAll() {
    return loginRepo.findAll();
  }
}

module.exports = LoginService;
