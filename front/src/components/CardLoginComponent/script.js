// export default {
//     name: 'CardLogin'
// }
export default {
  name: "CardLogin",
  data() {
    return {
      errors: [],
      user: "",
      password: "",
    };
  },
  methods: {
    //Fazer função que faz validação de caracteres do user e do password e que após validar, envia os dados para o back e só então ele autoriza a entrada do usuário.
    validatorsLogin() {
      this.errors = [];

      var enter = true;
      
      if (this.user.trim() === "" ||
        (String(this.user).length) < 6 ||
        (String(this.user).length) > 8) {
        this.errors.push("User inválido");
        enter = false;
      }

      if (this.password.trim() === "" ||
        (String(this.password).length) < 8 ||
        (String(this.password).length) < 14) {
        this.errors.push("Senha inválida");
        enter = false;
      }

      if (enter === true) {
        console.log("Válidos");
      }
    },
    login() {
      console.log('Function do login')
    }
  }
}