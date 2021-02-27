<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
/* Main Font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

/* Basic Settings */
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

:root {
  font-family: 'Roboto', sans-serif;

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

body {
  font-size: 14px;
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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

input::-webkit-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
}

input::-moz-placeholder {
  -moz-user-select: none;
  user-select: none;
}

input:-ms-input-placeholder {
  -ms-user-select: none;
  user-select: none;
}

input::-ms-input-placeholder {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input::placeholder {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

button:hover {
  color: var(--color-button-hover);
}

/* Global Class */

.unselectable {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.flex-auto {
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
}

.flex-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.flex-as-stretch {
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;
}

.flex-jc-space-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.flex-jc-stretch {
  -webkit-box-pack: stretch;
  -ms-flex-pack: stretch;
  justify-content: stretch;
}

.flex-ai-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
}

.flex-jc-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.flex-wrap {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.flex-nowrap {
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.flex-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flex-row {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

@media (max-width: 808px) {
  .md-d-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .md-d-none {
    display: none !important;
  }

  .md-flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }

  .md-flex-auto {
    -webkit-box-flex: 1 !important;
    -ms-flex: auto !important;
    flex: auto !important;
  }

  .md-flex-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    -ms-grid-row-align: center !important;
    align-items: center !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }

  .md-flex-full-width {
    -webkit-box-flex: 1 !important;
    -ms-flex: 1 1 100% !important;
    flex: 1 1 100% !important;
  }

  .md-flex-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
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
