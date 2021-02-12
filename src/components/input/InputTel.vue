<template>
  <div class="tel">
    <label for="tel">Номер телефона</label>
    <input
      type="tel"
      name="tel"
      placeholder="Введите номер телефона"
      v-model="inputValue"
      :pattern="pattern"
      required
    />
    <div class="valid-container">
      <span id="telErrMsg" class="error" v-if="isInvalid" v-text="invalidMessage"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTel',
  data() {
    return {
      inputValue: '7 (999) 999-99-99',
      isInvalid: false,
      invalidMessage:
        'Поле "Номер телефона" может содержать только 11 цифр, круглые скобки, дефис и знак плюс. Например +7 (123) 456-78-91 или 89997771122',

      regex: /^[0-9-+\s()]+$/
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
