<template>
  <div class="tel">
    <label for="tel">Номер телефона</label>
    <input
      type="tel"
      name="tel"
      placeholder="Введите номер телефона"
      v-model="telValue"
      pattern="^[0-9-+\s()]+$"
      required
    />
    <span id="telErrMsg" class="error">{{ errMsg.invalidDefault }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputTel',
  data() {
    return {
      telValue: '7 (999) 999-99-99',

      errMsg: {
        invalidDefault: 'Validation error message',
        invalidTel:
          'Поле "Номер телефона" может содержать только 11 цифр, круглые скобки, дефис и знак плюс. Например +7 (123) 456-78-91 или 89997771122'
      }
    }
  },
  watch: {
    telValue(newTel, oldTel) {
      this.validationTelValue(newTel)
    }
  },
  methods: {
    validationTelValue(telValue) {
      // const telRegExp = /^[0-9-+\s()]+$/
      // return (this.regDisabled = !telRegExp.test(this.telValue)) // переделать
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
