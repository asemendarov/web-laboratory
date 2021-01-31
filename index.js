const main = new Vue({
  // el: "main",
  el: "#main",
  data: {
    nameValue: "qwe",
    emailValue: "q@q",
    telValue: "7 (999) 999-99-99",
    langValue: "Русский",
    agreChecked: true,
    regDisabled: false,

    langList: ["Русский", "Английский", "Китайский", "Испанский"],

    errMsg: {
      invalidDefault: "Validation error message",
      invalidName: 'Поле "Имя" не может содержать цифры и символы кроме пробела и дефиса',
      invalidEmail: 'Поле "Email" должно содержать только Вашу электронную почту',
      invalidTel: 'Поле "Номер телефона" может содержать только 11 цифр, круглые скобки, дефис и знак плюс. Например +7 (123) 456-78-91 или 89997771122',
      invalidLang: "",
      invalidAgre: "",
    },
  },

  created() {
    // pass
  },

  watch: {
    nameValue(newName, oldName) {
      this.validationNameValue(newName);
    },
    emailValue(newEmail, oldEmail) {
      this.validationEmailValue(newEmail);
    },
    telValue(newTel, oldTel) {
      this.validationTelValue(newTel);
    },
    langValue(newLang, oldLang) {
      this.validationLangValue(newLang);
    },
    agreChecked(newAgre, oldAgre) {
      this.validationAgreChecked(newAgre);
    },
  },

  methods: {
    validationNameValue(nameValue) {
      const nameRegExp = /^([a-zA-Zа-яА-Я']+[-\s]?)+$/;
      return (this.regDisabled = !nameRegExp.test(this.nameValue)); // переделать
    },
    validationEmailValue(emailValue) {
      const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return (this.regDisabled = !emailRegExp.test(this.emailValue)); // переделать
    },
    validationTelValue(telValue) {
      const telRegExp = /^(([+]?7)?|8)[\s]?([(][\s]?[0-9]{3}[\s]?[)]|[0-9]{3})[\s]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/;
      return (this.regDisabled = !telRegExp.test(this.telValue)); // переделать
    },
    validationLangValue(langValue) {
      return (this.regDisabled = !this.langList.includes(langValue)); // переделать
    },
    validationAgreChecked(agreChecked) {
      return (this.regDisabled = !this.agreChecked);
    },

    checkForm(event) {
      // необходимо доделать реализацию
      this.validationNameValue(this.nameValue);
      this.validationEmailValue(this.emailValue);
      this.validationTelValue(this.telValue);
      this.validationLangValue(this.langValue);
      this.validationAgreChecked(this.agreChecked);

      event.preventDefault();
    },
  },
});
