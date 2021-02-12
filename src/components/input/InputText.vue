<template>
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
</template>

<script>
export default {
  name: 'InputText',
  data() {
    return {
      nameValue: 'qwe',

      errMsg: {
        invalidDefault: 'Validation error message',
        invalidName: 'Поле "Имя" не может содержать цифры и символы кроме пробела и дефиса'
      }
    }
  },
  watch: {
    nameValue(newName, oldName) {
      this.validationNameValue(newName)
    }
  },
  methods: {
    validationNameValue(nameValue) {
      // const nameRegExp = /^([a-zA-Zа-яА-Я']+[-\s]?)+$/
      // return (this.regDisabled = !nameRegExp.test(this.nameValue)) // переделать
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
