<template>
  <nav class="app-navigation">
    <router-link class="nav__item" :to="{ name: 'posts' }">News</router-link>
    <router-link class="nav__item" to="">Articles</router-link>
    <router-link class="nav__item" to="">Discussion</router-link>
    <router-link class="nav__item" to="">Codex</router-link>
    <router-link class="nav__item" to="">Rating</router-link>
  </nav>
</template>
<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      // pass
    };
  },
};
</script>
<style lang="sass" scoped>
.nav__item
  @apply tw-flex tw-items-center tw-mr-4
  @apply md:tw-mr-0 md:tw-py-1 md:tw-border-t md:tw-border-very-dark-grayish-blue-700
</style>
