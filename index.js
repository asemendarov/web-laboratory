Vue.component("inputName", {
  props: ["defaultValue"],

  data() {
    return {
      nameValue: this.defaultValue,
      nameErrMsg: "Validation error message",
      isValid: false,

      errMsg: {
        invalidDefault: "Validation error message",
        invalidName: "Имя не может содержать цифры и символы кроме пробела и дефиса",
      },
    };
  },

  template: `
      <div class="text">
        <label for="name">Имя</label>
        <input type="text" name="name" placeholder="Введите Ваше имя" v-model:value="nameValue" pattern="^([a-zA-Zа-яА-Я']+[-\s]?)+$" required />
        <span id="nameErrMsg" class="error" v-text="nameErrMsg">Validation error message</span>
      </div>
    `,

  watch: {
    nameValue(newName, oldName) {
      this.checkName(newName);
      console.log(`${newName} ->>> ${!!newName}`);
    },
  },

  methods: {
    checkName(name) {
      this.isValid = this.validationNameValue(name);

      if (!this.isValid) {
        this.nameErrMsg = this.nameValue ? this.errMsg.invalidName : this.errMsg.invalidDefault;
      } else {
        this.nameErrMsg = this.errMsg.invalidDefault;
      }

      this.$emit("update");
    },

    validationNameValue(value) {
      const nameRegExp = /^([a-zA-Zа-яА-Я']+[-\s]?)+$/;
      return nameRegExp.test(value);
    },
  },

  created() {
    this.checkName(this.nameValue);
    console.log(">>>> Mountend inputName");
  },
});

Vue.component("inputEmail", {
  props: ["defaultValue"],

  data() {
    return {
      emailValue: this.defaultValue,
      emailErrMsg: "Validation error message",
      isValid: false,

      errMsg: {
        invalidDefault: "Validation error message",
        invalidEmail: "Email должно содержать только Вашу электронную почту",
      },
    };
  },

  template: `
    <div class="email">
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="Введите ваш email" v-model:value="emailValue" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required />
      <span id="emailErrMsg" class="error" v-text="emailErrMsg">Validation error messag</span>
    </div>
  `,

  watch: {
    emailValue(newEmail, oldEmail) {
      this.checkEmail(newEmail);
    },
  },

  methods: {
    checkEmail(email) {
      this.isValid = this.validationEmailValue(email);

      if (!this.isValid) {
        this.emailErrMsg = this.emailValue ? this.errMsg.invalidEmail : this.errMsg.invalidDefault;
      } else {
        this.emailErrMsg = this.errMsg.invalidDefault;
      }

      this.$emit("update");
    },

    validationEmailValue(value) {
      const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return emailRegExp.test(value);
    },
  },

  created() {
    this.checkEmail(this.emailValue);
    console.log(">>>> Mountend inputEmail");
  },
});

Vue.component("inputTel", {
  props: ["defaultValue"],

  data() {
    return {
      telValue: this.defaultValue,
      telErrMsg: "Validation error message",
      isValid: false,

      errMsg: {
        invalidDefault: "Validation error message",
        invalidTel: "Номер телефона может содержать только 11 цифр, круглые скобки, дефис и знак плюс. Например +7 (123) 456-78-91 или 89997771122",
      },
    };
  },

  // bug template
  // Регулярное выражение в шаблоне отрабатывает неправильно. Причина тому не очень понятна. Возможно, проблема в стилях.
  template: `
    <div class="tel">
      <label for="tel">Номер телефона</label>
      <input type="tel" name="tel" placeholder="Введите номер телефона" v-model:value="telValue" pattern="^(([+]?7)?|8)[\s]?([(][\s]?[0-9]{3}[\s]?[)]|[0-9]{3})[\s]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$" required />
      <span id="telErrMsg" class="error" v-text="telErrMsg">Validation error messag</span>
    </div>
  `,

  watch: {
    telValue(newTel, oldTel) {
      this.checkTel(newTel);
    },
  },

  methods: {
    checkTel(tel) {
      this.isValid = this.validationTelValue(tel);

      if (!this.isValid) {
        this.telErrMsg = this.telValue ? this.errMsg.invalidTel : this.errMsg.invalidDefault;
      } else {
        this.telErrMsg = this.errMsg.invalidDefault;
      }

      this.$emit("update");
    },

    validationTelValue(value) {
      const telRegExp = /^(([+]?7)?|8)[\s]?([(][\s]?[0-9]{3}[\s]?[)]|[0-9]{3})[\s]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/;
      return telRegExp.test(value);
    },
  },

  created() {
    this.checkTel(this.telValue);
    console.log(">>>> Mountend inputTel");
  },
});

Vue.component("inputLang", {
  props: ["defaultValue"],

  data() {
    return {
      langValue: this.defaultValue,
      langErrMsg: "Validation error message",
      isValid: false,

      langList: ["Русский", "Английский", "Китайский", "Испанский"],

      errMsg: {
        invalidDefault: "Validation error message",
        invalidLang: "Язык необходимо выбрать из предложенного списка",
      },
    };
  },

  template: `
    <div class="lang">
      <label for="lang">Язык</label>
      <datalist id="lang">
        <option v-for="(lang, index) in langList" :value="lang" :key="index"></option>
      </datalist>
      <input name="lang" list="lang" placeholder="Язык" v-model:value="langValue" @click="resetLang" required />
      <span id="langErrMsg" class="error" v-text="langErrMsg">Validation error messag</span>
    </div>
  `,

  watch: {
    langValue(newLang, oldLang) {
      this.checkLang(newLang);
    },
  },

  methods: {
    checkLang(lang) {
      this.isValid = this.validationLangValue(lang);

      if (!this.isValid) {
        this.langErrMsg = this.langValue ? this.errMsg.invalidLang : this.errMsg.invalidDefault;
      } else {
        this.langErrMsg = this.errMsg.invalidDefault;
      }

      this.$emit("update");
    },

    validationLangValue(langValue) {
      return this.langList.includes(langValue);
    },

    resetLang(event) {
      this.langValue = "";
    },
  },

  created() {
    this.checkLang(this.langValue);
    console.log(">>>> Mountend inputLang");
  },
});

Vue.component("inputAgreement", {
  props: ["defaultValue"],

  data() {
    return {
      // agreChecked: !!this.defaultValue,
      agreChecked: false,
      agreErrMsg: "Validation error message",
      isValid: false,

      errMsg: {
        invalidDefault: "Validation error message",
        invalidAgre: "Необходимо принять пользовательское соглашение",
      },
    };
  },

  template: `
    <div class="agreement">
      <label for="agreement"> <input type="checkbox" name="agreement" v-model:checked="agreChecked" required /> Принимаю <a href="*">условия</a> использования </label>
    </div>
  `,

  watch: {
    agreChecked(newAgre, oldAgre) {
      this.checkAgre(newAgre);
    },
  },

  methods: {
    checkAgre(arge) {
      this.isValid = this.validationAgreChecked(arge);

      if (!this.isValid) {
        this.agreErrMsg = this.agreValue ? this.errMsg.invalidAgre : this.errMsg.invalidDefault;
      } else {
        this.agreErrMsg = this.errMsg.invalidDefault;
      }

      this.$emit("update");
    },

    validationAgreChecked(agreChecked) {
      return this.agreChecked;
    },
  },

  created() {
    this.checkAgre(this.agreChecked);
    console.log(">>>> Mountend inputAgreement");
  },
});

const app = new Vue({
  el: "#app",

  data: {
    regDisabled: false,
  },

  watch: {
    //pass
  },

  methods: {
    validationComponents() {
      if (this.$children.filter((component) => !component.isValid).length) {
        this.regDisabled = true;
      } else {
        this.regDisabled = false;
      }
    },

    checkForm(event) {
      // необходимо доделать реализацию
      this.validationComponents();

      event.preventDefault();
    },
  },

  created() {
    //pass
  },
});
