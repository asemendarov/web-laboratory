<template>
  <div class="lang">
    <label for="lang">Язык</label>
    <input name="lang" list="lang" placeholder="Язык" v-model="inputValue" required />
    <datalist id="lang">
      <option v-for="lang in langList" :key="lang" :value="lang">{{ lang }}</option>
    </datalist>
    <div class="valid-container">
      <span
        id="langErrMsg"
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
  name: 'InputLang',
  data() {
    return {
      langList: ['Русский', 'Английский', 'Китайский', 'Испанский'],

      inputValue: this.value,
      isInvalid: false,
      invalidMessage: 'Язык необходимо выбрать из указанного списка'
    }
  },
  mounted() {
    this.validation()
    this.emitChange()
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

      this.isInvalid = !this.langList.includes(this.inputValue)
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
