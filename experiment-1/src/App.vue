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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&display=swap');

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
html,
body {
  min-height: 100%;
}

#app {
  height: inherit;
  background-color: #222222;

  color: #eeeeee;

  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
}

address {
  font-style: inherit;
}

img {
  height: auto;
  width: 100%;
}

.link {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.img-wrap {
  margin: 0 auto;
  display: block;
}

.aligncenter {
  text-align: center;
}

.flex-box {
  display: flex;
}

.grid-box {
  margin: 0 auto auto auto;
  display: grid;
}

.slide {
  display: grid;
  grid: [row1-start] ' . slide-box . ' [row1-end] / auto minmax(auto, 1920px) auto;
  gap: 0 10px;
}

.slide-box {
  grid-area: slide-box;
}
</style>
