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
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

html,
body {
  height: 100%;

  display: flex;
  display: -ms-flexbox;
  display: -webkit-box;

  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
}

#app {
  flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  -webkit-box-flex: 1;

  display: flex;
  display: -ms-flexbox;
  display: -webkit-box;

  background-color: #222;
}
</style>
