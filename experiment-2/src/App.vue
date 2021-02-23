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
html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
  line-height: 1.5;
}

html,
body {
  height: 100%;
}

#app {
  height: inherit;

  color: #eeeeee;
  background-color: #222222;
}

/* My Normalization */

a {
  user-select: none;
  white-space: nowrap;
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #ccc;
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
  color: rgb(244, 66, 25);
}

/* Global Class */

.unselectable {
  user-select: none;
}

/* Global Margin and Padding Class */
.mr-16 {
  margin-right: 16px;
}

/* Global Position Class */
.position-relative {
  position: relative;
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

/* ----------------- */
</style>
