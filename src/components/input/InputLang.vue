<template>
  <div class="lang">
    <label for="lang">Язык</label>
    <input name="lang" list="lang" placeholder="Язык" v-model="inputValue" required />
    <datalist id="lang">
      <option v-for="lang in langList" :key="lang" :value="lang">{{ lang }}</option>
    </datalist>
    <div class="valid-container">
      <span id="langErrMsg" class="error" v-if="isInvalid" v-text="invalidMessage"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputLang',
  data() {
    return {
      langList: ['Русский', 'Английский', 'Китайский', 'Испанский'],

      inputValue: 'Русский',
      isInvalid: false,
      invalidMessage: 'Язык необходимо выбрать из указанного списка'
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
      this.isInvalid = !this.langList.includes(this.inputValue)
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
