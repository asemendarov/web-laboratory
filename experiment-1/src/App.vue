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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');
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

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;

  color: #eeeeee;
  background-color: #222222;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

address {
  font-style: inherit;
}

img {
  width: 100%;
  height: auto;
}

input {
  display: block;
  min-width: 100%;
}

.link {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.link:hover {
  position: relative;
}

.link:hover::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.15);
}

.aligncenter {
  text-align: center;
}

.grid-box {
  margin: 0 auto auto auto;
  display: grid;
}

.slide {
  display: grid;
  grid: [row1-start] ' . slide-box . ' [row1-end] / auto minmax(auto, 1110px) auto;
  gap: 0 10px;
}

.slide-box {
  grid-area: slide-box;
}
</style>
