<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="sass">
#app
  @apply tw-min-h-full tw-text-very-light-gray-200 tw-bg-very-dark-mostly-black-800

.scrollbox
  // Удалить эти стили <--------------------- !!!
  -webkit-overflow-scrolling: touch
  -moz-overflow-scrolling: touch
  -ms-overflow-scrolling: touch
  -o-overflow-scrolling: touch

  scrollbar-width: 7px
  scrollbar-color: var(#30363d)

  scrollbar-face-color: var(#30363d)
  scrollbar-shadow-color: var(#30363d)
  scrollbar-highlight-color: var(#30363d)

  @apply tw-overflow-y-auto tw-overflow-y-hidden

  &::-webkit-scrollbar
    -webkit-appearance: none
    width: 7px

  &::-webkit-scrollbar-thumb
    border-radius: 3px
    background-color: var(#30363d)
    box-shadow: 0 0 1px var(#30363d)
    -webkit-box-shadow: 0 0 1px var(#30363d)
</style>
