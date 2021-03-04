<template>
  <div class="app-main">
    <main class="main">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {
      // pass
    };
  },
  mounted() {
    // pass
  },
  methods: {
    // pass
  },
};
</script>

<style lang="sass" scoped>
.main-content
  @apply tw-mt-8 tw-mx-auto tw-px-4 tw-max-w-7xl
</style>
