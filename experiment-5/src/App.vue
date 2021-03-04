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

<style>
/********************
**  Точки останова:
**  1. 808px - основная (глобальная)
********************/

/* Basic Settings */
:root {
  @apply tw-font-sans;

  --color-text-default: rgb(238, 238, 238);
  --color-background-default: rgb(13, 17, 23);

  --color-background-header: rgb(22, 27, 34);

  --color-text-hover: rgb(204, 204, 204);
  --color-button-hover: rgb(253, 176, 33);
  --color-input-focus: rgba(253, 176, 33, 0.438);

  --color-link-footer: rgb(85, 132, 185);

  --color-scrollbar: rgb(48, 54, 61);
}

#app {
  @apply tw-min-h-full;

  color: var(--color-text-default);
  background-color: var(--color-background-default);
}

/* My Normalization */

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

/* ----------------- */
</style>
