<template>
  <div id="app">
    <the-header />
    <the-main>
      <router-view />
    </the-main>
    <the-footer>
      <!-- pass -->
    </the-footer>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import TheMain from "@/components/TheMain";

export default {
  name: "App",
  components: { TheHeader, TheMain, TheFooter },
  mounted() {
    this.routerControl(this.$route);
  },
  watch: {
    $route: "routerControl",
  },
  methods: {
    routerControl() {},
  },
};
</script>

<style lang="scss">
// Import Fonts
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap");
// Import Normalize
@import "~@/assets/scss/normalize";
@import "~@/assets/scss/tw-normalize";
@import "~@/assets/scss/my-normalize";
// Import Other
@import "~@/assets/scss/variables";
@import "~@/assets/scss/media";
@import "~@/assets/scss/table";
@import "~@/assets/scss/icon";

#app {
  font-family: "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  line-height: 1.5;
  font-style: normal;
  font-weight: 400;
  color: $color-text;
}
</style>
