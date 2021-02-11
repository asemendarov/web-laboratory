<template>
  <div class="view-modal">
    <h1>Регистрация</h1>
    <p>Уже есть аккаунт? <a href="#">Войти</a></p>
    <form action="#" method="POST" @submit="checkForm">
      <div class="text">
        <label for="name">Имя</label>
        <input
          type="text"
          name="name"
          placeholder="Введите Ваше имя"
          v-model="nameValue"
          pattern="^([a-zA-Zа-яА-Я']+[-\s]?)+$"
          required
        />
        <span id="nameErrMsg" class="error">{{ errMsg.invalidDefault }}</span>
      </div>

      <div class="email">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Введите ваш email"
          v-model="emailValue"
          pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          required
        />
        <span id="emailErrMsg" class="error">{{ errMsg.invalidDefault }}</span>
      </div>

      <div class="tel">
        <label for="tel">Номер телефона</label>
        <input
          type="tel"
          name="tel"
          placeholder="Введите номер телефона"
          v-model="telValue"
          pattern="^(([+]?7)?|8)[\s]?([(][\s]?[0-9]{3}[\s]?[)]|[0-9]{3})[\s]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$"
          required
        />
        <span id="telErrMsg" class="error">{{ errMsg.invalidDefault }}</span>
      </div>

      <div class="lang">
        <label for="lang">Язык</label>
        <input name="lang" list="lang" placeholder="Язык" v-model="langValue" required />
        <datalist id="lang">
          <option v-for="lang in langList" :key="lang" :value="lang"></option>
        </datalist>
        <span id="langErrMsg" class="error">{{ errMsg.invalidDefault }}</span>
      </div>

      <div class="agreement">
        <label for="agreement">
          <input type="checkbox" name="agreement" v-model="agreChecked" required /> Принимаю
          <a href="*">условия</a> использования
        </label>
      </div>

      <div class="registration">
        <input
          type="submit"
          name="registration"
          value="Зарегистрироваться"
          :disabled="regDisabled"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ViewModal',
  data() {
    return {
      nameValue: 'qwe',
      emailValue: 'q@q',
      telValue: '7 (999) 999-99-99',
      langValue: 'Русский',
      agreChecked: true,
      regDisabled: false,

      langList: ['Русский', 'Английский', 'Китайский', 'Испанский'],

      errMsg: {
        invalidDefault: 'Validation error message',
        invalidName: 'Поле "Имя" не может содержать цифры и символы кроме пробела и дефиса',
        invalidEmail: 'Поле "Email" должно содержать только Вашу электронную почту',
        invalidTel:
          'Поле "Номер телефона" может содержать только 11 цифр, круглые скобки, дефис и знак плюс. Например +7 (123) 456-78-91 или 89997771122',
        invalidLang: '',
        invalidAgre: ''
      }
    }
  },

  created() {
    // pass
  },

  watch: {
    nameValue(newName, oldName) {
      this.validationNameValue(newName)
    },
    emailValue(newEmail, oldEmail) {
      this.validationEmailValue(newEmail)
    },
    telValue(newTel, oldTel) {
      this.validationTelValue(newTel)
    },
    langValue(newLang, oldLang) {
      this.validationLangValue(newLang)
    },
    agreChecked(newAgre, oldAgre) {
      this.validationAgreChecked(newAgre)
    }
  },

  methods: {
    validationNameValue(nameValue) {
      const nameRegExp = /^([a-zA-Zа-яА-Я']+[-\s]?)+$/
      return (this.regDisabled = !nameRegExp.test(this.nameValue)) // переделать
    },
    validationEmailValue(emailValue) {
      const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return (this.regDisabled = !emailRegExp.test(this.emailValue)) // переделать
    },
    validationTelValue(telValue) {
      const telRegExp = /^(([+]?7)?|8)[\s]?([(][\s]?[0-9]{3}[\s]?[)]|[0-9]{3})[\s]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/
      return (this.regDisabled = !telRegExp.test(this.telValue)) // переделать
    },
    validationLangValue(langValue) {
      return (this.regDisabled = !this.langList.includes(langValue)) // переделать
    },
    validationAgreChecked(agreChecked) {
      return (this.regDisabled = !this.agreChecked)
    },

    checkForm(event) {
      // необходимо доделать реализацию
      this.validationNameValue(this.nameValue)
      this.validationEmailValue(this.emailValue)
      this.validationTelValue(this.telValue)
      this.validationLangValue(this.langValue)
      this.validationAgreChecked(this.agreChecked)

      event.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-modal {
  padding: 40px 30px;
  margin: auto;

  min-height: 789px;
  width: 460px;
  max-width: 460px;

  background: #c4c4c4;
  -webkit-box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;

  background-color: #ffffff;
}

.view-modal > h1 {
  font-size: 34px;
  line-height: 44px;

  margin-bottom: 8px;
}

.view-modal > p {
  line-height: 22px;

  margin-bottom: 56px;
}

label {
  display: block;

  margin-bottom: 7px;
}

a {
  text-decoration: none;
  color: #0880ae;
}

span[class='error'] {
  display: block;
  visibility: hidden;
  margin: 8px 0;

  font-size: 14px;
  line-height: 18px;

  color: #ff7171;
}

input {
  height: 52px;
  width: 100%;

  background: #ffffff;
  border: 1px solid #dbe2ea;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;

  padding: 16px;
}

input:focus {
  border: 2px solid #dbe2ea;
}

.agreement {
  margin-bottom: 32px;
}

input[name='agreement'] {
  height: 24px;
  width: 24px;

  vertical-align: bottom;

  margin: 0px;
  padding: 0px;
}

input[name='registration'] {
  height: 57px;

  background: #0880ae;
  -webkit-box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;

  margin: 0;
}

input[name='registration']:disabled {
  background: #dbe2ea;
}

input:valid:not(:placeholder-shown) + span[class='error'] {
  visibility: hidden;
}

input:invalid:not(:placeholder-shown) + span[class='error'] {
  visibility: visible;
}

/* debug */
main * {
  /* border: 1px solid teal; */
}
</style>
