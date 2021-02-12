<template>
  <div class="agreement">
    <label for="agreement">
      <input type="checkbox" name="agreement" v-model="agreChecked" required /> Принимаю
      <a href="*">условия</a> использования
    </label>
    <div class="valid-container">
      <span id="agreErrMsg" class="error" v-if="isInvalid" v-text="invalidMessage"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  data() {
    return {
      agreChecked: true,
      isInvalid: false,
      invalidMessage: 'Необходимо принять пользовательское соглашение'
    }
  },
  watch: {
    agreChecked(newAgre, oldAgre) {
      this.validationAgreChecked(newAgre)
    }
  },
  methods: {
    validationAgreChecked(agreChecked) {
      // return (this.regDisabled = !this.agreChecked)
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
