<template>
  <div class="lang">
    <label for="lang">Язык</label>
    <select name="lang" list="lang" placeholder="Язык" v-model="langValue" required>
      <option v-for="lang in langList" :key="lang" :value="lang">{{ lang }}</option>
    </select>
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
      langValue: 'Русский',
      langList: ['Русский', 'Английский', 'Китайский', 'Испанский'],

      isInvalid: false,
      invalidMessage: 'Язык необходимо выбрать из указанного списка'
    }
  },
  watch: {
    langValue(newLang, oldLang) {
      this.validationLangValue(newLang)
    }
  },
  methods: {
    validationLangValue(langValue) {
      // return (this.regDisabled = !this.langList.includes(langValue)) // переделать
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
