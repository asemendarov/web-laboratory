<template>
  <div id='app'>
    <h1>Светофор</h1>
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
#app * {
  box-sizing: border-box;

  margin: 10px auto;
  padding: 10px;

  text-align: center;
  border: 1px solid black;
  border-radius: 10px;

  width: 400px;
  max-width: 400px;
}

a {
  display: block;
  text-decoration: none;
  color: black;
}

</style>
