<template>
  <div class="view-modal">
    <h1>Регистрация</h1>
    <p>Уже есть аккаунт? <a href="#">Войти</a></p>
    <form action="#" method="POST" @submit="checkForm">
      <input-text :value="valueName" @change="validation" />
      <input-email :value="valueEmail" @change="validation" />
      <input-tel :value="valueTel" @change="validation" />
      <input-lang :value="valueLang" @change="validation" />
      <input-agreement :checked="checkedAgreement" @change="validation" />

      <div class="registration">
        <input
          type="submit"
          name="registration"
          value="Зарегистрироваться"
          :disabled="isDisabledSubmit"
        />
      </div>
    </form>
  </div>
</template>

<script>
import InputText from './input/InputText.vue'
import InputEmail from './input/InputEmail.vue'
import InputTel from './input/InputTel.vue'
import InputLang from './input/InputLang.vue'
import InputAgreement from './input/InputAgreement.vue'

export default {
  name: 'ViewModal',
  components: { InputText, InputEmail, InputTel, InputLang, InputAgreement },
  data() {
    return {
      // options for debugging
      valueName: '',
      valueEmail: '',
      valueTel: '',
      valueLang: '',
      checkedAgreement: false,

      isDisabledSubmit: false
    }
  },

  created() {
    // pass
  },

  mounted() {
    if (this.isDisabledSubmit) {
      this.validation()
    }
  },

  watch: {
    // pass
  },

  methods: {
    validation() {
      if (this.$children.filter((vue) => vue.$data.isInvalid).length) {
        this.isDisabledSubmit = true
      } else {
        this.isDisabledSubmit = false
      }
    },

    checkForm(event) {
      this.validation()

      if (this.isDisabledSubmit) {
        event.preventDefault()
      }

      alert('Валидация прошла спешно')
      event.preventDefault() // remove for production
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* --------------- Debug CSS ---------------*/
.view-modal >>> * {
  /* border: 1px solid black; */
}
/* ------------------------------------------*/

.view-modal {
  padding: 40px 30px;
  margin: auto;

  width: 460px;
  max-width: 460px;
  min-height: 789px;

  border-radius: 24px;

  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  -webkit-box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
}

.view-modal > h1 {
  font-size: 34px;
  line-height: 44px;

  margin-bottom: 8px;
}

.view-modal > p {
  margin-bottom: 56px;

  line-height: 22px;
}

a {
  text-decoration: none;
  color: #0880ae;
}

input[type='submit'] {
  padding: 16px;

  height: 57px;
  width: 100%;

  border: 1px solid #dbe2ea;
  border-radius: 6px;

  background: #0880ae;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  -webkit-box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
}

input[type='submit']:focus {
  border: 2px solid #dbe2ea;
}

input[name='registration']:disabled {
  background: #dbe2ea;
}
</style>
