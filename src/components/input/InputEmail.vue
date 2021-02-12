<template>
  <div class="email">
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Введите ваш email"
      v-model="inputValue"
      :pattern="pattern"
      required
    />
    <div class="valid-container">
      <span
        id="emailErrMsg"
        class="error"
        v-if="inputValue && isInvalid"
        v-text="invalidMessage"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  name: 'InputEmail',
  data() {
    return {
      inputValue: this.value,
      isInvalid: true,
      invalidMessage: 'Поле "Email" должно содержать только Вашу электронную почту',

      regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    }
  },
  mounted() {
    this.validation()
    this.emitChange()
  },
  computed: {
    pattern() {
      return this.regex.toString().slice(1, -1)
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
      this.isInvalid = !this.regex.test(this.inputValue)
    },
    emitChange() {
      this.$emit('change', this.$data)
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
