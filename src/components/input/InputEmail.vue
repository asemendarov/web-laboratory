<template>
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
    <div class="valid-container">
      <span id="emailErrMsg" class="error" v-if="isInvalid" v-text="invalidMessage"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputEmail',
  data() {
    return {
      emailValue: 'q@q',
      isInvalid: false,
      invalidMessage: 'Поле "Email" должно содержать только Вашу электронную почту'
    }
  },
  watch: {
    emailValue(newEmail, oldEmail) {
      this.validationEmailValue(newEmail)
    }
  },
  methods: {
    validationEmailValue(emailValue) {
      // const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      // return (this.regDisabled = !emailRegExp.test(this.emailValue)) // переделать
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
