<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TrafficLight from './components/TrafficLight.vue'

export default {
  components: { TrafficLight },
  name: 'App'
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

#app {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  background-color: #222222;
  color: #eeeeee;
}
</style>
