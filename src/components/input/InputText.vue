<template>
  <div class="text">
    <label for="name">Имя</label>
    <input
      type="text"
      name="name"
      placeholder="Введите Ваше имя"
      v-model="inputValue"
      :pattern="pattern"
      required
    />
    <div class="valid-container">
      <span id="nameErrMsg" class="error" v-if="isInvalid" v-text="invalidMessage"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  data() {
    return {
      inputValue: 'qwe',
      isInvalid: false,
      invalidMessage: 'Поле "Имя" не может содержать цифры и символы кроме пробела и дефиса',

      regex: /^([a-zA-Zа-яА-Я']+[-\s]?)+$/
    }
  },
  computed: {
    pattern() {
      return this.regex.toString().slice(1, -1)
    }
  },
  watch: {
    inputValue() {
      this.validation()
    }
  },
  methods: {
    validation() {
      this.isInvalid = !this.regex.test(this.inputValue)
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
