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
      <span
        id="nameErrMsg"
        class="error"
        v-if="checkValue && !blockErrMsg && inputValue && isInvalid"
        v-text="invalidMessage"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    blockErrMsg: Boolean,
    checkValue: {
      type: Boolean,
      default: true
    }
  },
  name: 'InputText',
  data() {
    return {
      inputValue: this.value,
      isInvalid: false,
      invalidMessage: 'Поле "Имя" не может содержать цифры и символы кроме пробела и дефиса',

      regex: /^[a-zA-Zа-яА-Я-\s]+$/
    }
  },
  mounted() {
    this.validation()
    this.emitChange()
  },
  computed: {
    pattern() {
      return this.checkValue ? this.regex.toString().slice(1, -1) : ''
    }
  },
  watch: {
    inputValue() {
      this.validation()
      this.emitChange()
    }
  },
  methods: {
    validation() {
      if (!this.checkValue) return

      this.isInvalid = !this.regex.test(this.inputValue)
    },
    emitChange() {
      if (!this.checkValue) return

      this.$emit('change', this.$data)
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
