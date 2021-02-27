<template>
  <div class="agreement">
    <label for="agreement">
      <input type="checkbox" name="agreement" v-model="inputChecked" required /> Принимаю
      <a href="*">условия</a> использования
    </label>
    <div class="valid-container">
      <span
        id="agreErrMsg"
        class="error"
        v-if="!blockErrMsg && isInvalid"
        v-text="invalidMessage"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checked: Boolean
  },
  name: 'InputAgreement',
  data() {
    return {
      inputChecked: this.checked,
      isInvalid: false,
      invalidMessage: 'Необходимо принять пользовательское соглашение',

      blockErrMsg: true
    }
  },
  watch: {
    inputChecked() {
      this.validation()
      this.emitChange()
    }
  },
  mounted() {
    this.validation()
    this.emitChange()
  },
  methods: {
    validation() {
      this.isInvalid = !this.inputChecked
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
