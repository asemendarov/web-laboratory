<template>
  <div class="agreement">
    <label for="agreement">
      <input type="checkbox" name="agreement" v-model="agreChecked" required /> Принимаю
      <a href="*">условия</a> использования
    </label>
    <span id="agreErrMsg" class="error">{{ errMsg.invalidDefault }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  data() {
    return {
      agreChecked: true,

      errMsg: {
        invalidDefault: 'Validation error message',
        invalidAgre: 'Необходимо принять пользовательское соглашение'
      }
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
