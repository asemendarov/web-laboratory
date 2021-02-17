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
html,
body {
  height: 100%;
}
#app {
  height: inherit;
  background-color: #222222;
  color: #eeeeee;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
}
</style>
