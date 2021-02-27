<template>
  <div class="password">
    <label for="password">Пароль</label>
    <input
      type="password"
      name="password"
      placeholder="Введите Ваше имя"
      v-model="inputValue"
      :pattern="pattern"
      required
    />
    <div class="valid-container">
      <span
        id="passwordErrMsg"
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
      invalidMessage: `1. Цифра должна встречаться хотя бы один раз. 2. Cтрочная буква должна встречаться хотя бы один раз${'\n'}3. Заглавная буква должна встречаться хотя бы один раз${'\n'}4. Cпециальный символ должен встречаться хотя бы один раз${'\n'}5. Во всей строке не допускаются пробелы ${'\n'}6. Минимальное кол-во символов - 8`,

      regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/
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
