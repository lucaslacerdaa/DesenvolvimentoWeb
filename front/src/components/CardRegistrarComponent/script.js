export default {
  name: "CardRegistrarComponent",
  data() {
    return {
      errors: [],
      user: "",
      email: "",
      password: "",
    };
  },
  methods: {
    //Fazer função que faz validação de caracteres do user e do password e que após validar, envia os dados para o back e só então ele autoriza a entrada do usuário.

    validatorsSignUp() {
      this.errors = [];
      console.log(String(this.user).length);
      console.log(this.user);
      var enter = true;
      if (this.user.trim() === "" ||
        (String(this.user).length) < 6 ||
        (String(this.user).length) > 8) {
        this.errors.push("User inválido");
        enter = false;
      }

      if (this.password.trim() === "" ||
        String(this.password).length < 8 ||
        String(this.password).length < 14) {
        this.errors.push("Senha inválida");
        enter = false;
      }


      if (this.email.trim() === "") {
        this.errors.push("Deve haver um Email");
        enter = false;
      }

      if (enter === true) {
        //this.postRegistrar();
        console.log("válidos");
      }

    },

    postRegistrar() {
      console.log('Function do registrar')
    }
  }
}