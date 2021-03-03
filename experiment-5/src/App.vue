<template>
  <div id="app">
    <router-view />
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/********************
**  Точки останова:
**  1. 808px - основная (глобальная)
**
**
**
********************/

/* Logo Font */
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");
/* Main Font */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

/* Basic Settings */
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

:root {
  font-family: "Roboto", sans-serif;

  /* ---- VAR ---- */
  --color-text-default: rgb(238, 238, 238);
  --color-background-default: rgb(13, 17, 23);

  --color-background-header: rgb(22, 27, 34);

  --color-text-hover: rgb(204, 204, 204);
  --color-button-hover: rgb(253, 176, 33);
  --color-input-focus: rgba(253, 176, 33, 0.438);

  --color-link-footer: rgb(85, 132, 185);

  --color-scrollbar: rgb(48, 54, 61);
  /* ------------- */
}

html,
body {
  height: 100%;
  min-height: 100%;
}

html {
  font-size: 14px;
}

@media (max-width: 808px) {
  html,
  input {
    font-size: 16px;
  }
}

body {
  line-height: 150%;
}

#app {
  min-height: inherit;

  color: var(--color-text-default);
  background-color: var(--color-background-default);
}

/* My Normalization */

h1 {
  font-size: 32px;
  line-height: 150%;
  font-weight: 400;
}

a {
  user-select: none;
  white-space: nowrap;
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: var(--color-text-hover);
}

input,
button {
  width: 100%;
  border: none;
  outline: none;
  color: inherit;
  background: inherit;
}

button {
  cursor: pointer;
}

input::placeholder {
  user-select: none;
}

button:hover {
  color: var(--color-button-hover);
}

/* Global Class */

.unselectable {
  user-select: none;
}

.nowrap {
  white-space: nowrap;
}

.list-style-none {
  list-style: none;
}

.scrollbox {
  overflow-y: auto;
  overflow-x: hidden;

  /* Autoprefixer not working */
  -webkit-overflow-scrolling: touch;
  -moz-overflow-scrolling: touch;
  -ms-overflow-scrolling: touch;
  -o-overflow-scrolling: touch;

  scrollbar-width: 7px;
  scrollbar-color: var(--color-scrollbar);

  scrollbar-face-color: var(--color-scrollbar);
  scrollbar-shadow-color: var(--color-scrollbar);
  scrollbar-highlight-color: var(--color-scrollbar);
}
.scrollbox::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
.scrollbox::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: var(--color-scrollbar);
  box-shadow: 0 0 1px var(--color-scrollbar);
  -webkit-box-shadow: 0 0 1px var(--color-scrollbar);
}

/* Global Margin and Padding Class */
.mr-16 {
  margin-right: 16px;
}

.mn-0-12 {
  margin: 0 12px;
}

.pd-15-30 {
  padding: 15px 30px;
}

.pd-0-12 {
  padding: 0 12px;
}

.pd-15-20 {
  padding: 15px 20px;
}

@media (max-width: 808px) {
  .md-mr-16 {
    margin-right: 16px !important;
  }
}

/* Global Position Class */
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}

/* Global Flex Class */
.d-none {
  display: none;
}

.d-flex {
  display: flex;
}

.flex-auto {
  flex: auto;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.flex-as-stretch {
  align-self: stretch;
}

.flex-jc-space-between {
  justify-content: space-between;
}

.flex-jc-stretch {
  justify-content: stretch;
}

.flex-ai-center {
  align-items: center;
}

.flex-jc-center {
  justify-content: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.flex-column {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

@media (max-width: 808px) {
  .md-d-flex {
    display: flex !important;
  }

  .md-d-none {
    display: none !important;
  }

  .md-flex-wrap {
    flex-wrap: wrap !important;
  }

  .md-flex-auto {
    flex: auto !important;
  }

  .md-flex-center {
    align-items: center !important;
    justify-content: center !important;
  }

  .md-flex-full-width {
    flex: 1 1 100% !important;
  }

  .md-flex-column {
    flex-direction: column;
  }
}

@media (max-width: 319px) {
  .md-319-d-none {
    display: none !important;
  }
}

/* ----------------- */
</style>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
