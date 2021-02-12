<template>
  <div class="form-authorization">
    <h1>Авторизация</h1>
    <p>
      Нет аккаунта?
      <router-link :to="{ name: 'FormRegistration' }">Зарегистрироваться</router-link>
    </p>
    <form action="#" method="POST" @submit="checkForm">
      <input-email :value="valueEmail" :check-value="false" />
      <input-password :check-value="false" />

      <div class="input-authorization">
        <input
          type="submit"
          name="authorization"
          value="Авторизоваться"
          :disabled="isDisabledSubmit"
        />
      </div>
    </form>
  </div>
</template>

<script>
import InputEmail from '@/components/input/InputEmail'
import InputPassword from '@/components/input/InputPassword'

export default {
  props: {
    regHref: String,
    valueEmail: String
  },

  name: 'FormAuthorization',

  components: { InputEmail, InputPassword },
  data() {
    return {
      isDisabledSubmit: false
    }
  },

  methods: {
    checkForm(event) {
      alert('Авторизация')
      event.preventDefault() // remove for production
    }
  }
}
</script>

<style scoped>
.form-authorization {
  padding: 40px 30px;
  margin: auto;

  width: 460px;
  max-width: 460px;
  min-height: 545px;

  border-radius: 24px;

  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  -webkit-box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
}

.form-authorization > h1 {
  font-size: 34px;
  line-height: 44px;

  margin-bottom: 8px;
}

.form-authorization > p {
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

input[type='submit']:disabled {
  background: #dbe2ea;
}

.input-authorization {
  margin-top: 25px;
}
</style>
