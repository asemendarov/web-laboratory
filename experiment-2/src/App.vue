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
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
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
</style>
