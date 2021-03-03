<template>
  <nav class="app-navigation">
    <router-link class="nav__item d-flex flex-ai-center tw-mr-4 md:tw-mr-0" :to="{ name: 'posts' }">News</router-link>
    <router-link class="nav__item d-flex flex-ai-center tw-mr-4 md:tw-mr-0" to="">Articles</router-link>
    <router-link class="nav__item d-flex flex-ai-center tw-mr-4 md:tw-mr-0" to="">Discussion</router-link>
    <router-link class="nav__item d-flex flex-ai-center tw-mr-4 md:tw-mr-0" to="">Codex</router-link>
    <router-link class="nav__item d-flex flex-ai-center tw-mr-4 md:tw-mr-0" to="">Rating</router-link>
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
<style scoped>
.nav__item {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
