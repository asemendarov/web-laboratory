<template>
  <div class="app-search-page">
    <h1>Поиск по ключевым словам:</h1>
    <app-search />
  </div>
</template>

<script>
import AppSearch from "@/components/$forms/AppSearch";
export default {
  props: ["q"],
  components: { AppSearch },
  name: "AppSearchPage",
  date() {
    return {
      // pass
    };
  },
};
</script>

<style lang="sass" scoped>
.app-search-page::v-deep
  & .app-search
    @apply tw-mt-3

    &:focus-within
      @apply tw-w-full

      & .search-key-slash
        @apply tw-hidden

  & .input-wrapper
    @apply tw-border-white tw-bg-very-dark-mostly-black-700
</style>