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
      <span
        id="telErrMsg"
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
  name: 'InputTel',
  data() {
    return {
      inputValue: this.value,
      isInvalid: false,
      invalidMessage:
        'Поле "Номер телефона" может содержать только 11 цифр, круглые скобки, дефис и знак плюс. Например +7 (123) 456-78-91 или 89997771122',

      regex: /^[0-9-+\s()]+$/
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
