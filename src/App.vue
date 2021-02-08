<template>
  <div id="app">
    <json-reader />
  </div>
</template>

<script>
import JsonReader from './components/JsonReader'

export default {
  name: 'App',
  components: {
    JsonReader
  }
}
</script>

<style>
@import url(https://necolas.github.io/normalize.css/8.0.1/normalize.css);

*,
h1,
h2,
h3 {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* font-size: 12px; */
}

html,
body {
  height: 100%;

  display: flex;
  flex-direction: column;
}

#app {
  flex: 1 0 auto;
  display: flex;

  background-color: #222;
  color: #eee;
}
</style>
