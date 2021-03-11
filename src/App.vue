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
    // routerControl(to) {
    //   console.log(to);
    // },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap");

@import "~@/assets/scss/normalize";
@import "~@/assets/scss/tw-normalize";
@import "~@/assets/scss/table";
@import "~@/assets/scss/variables";

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 10px;
}

html,
body {
  min-height: 100%;
}

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

a {
  text-decoration: none;
  color: $color-text;
  white-space: nowrap;
}

h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}

input,
button {
  padding-left: 8px;
  padding-right: 8px;
}

.icon {
  cursor: pointer;
}
</style>
