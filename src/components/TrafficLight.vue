<template>
  <div id="traffic-light">
    <router-link id="red" to="/red" :style="redStyle">Перейти к red</router-link>
    <router-link id="yellow" to="/yellow" :style="yellowStyle">Перейти к yellow</router-link>
    <router-link id="green" to="/green" :style="greenStyle">Перейти к greeen</router-link>
  </div>
</template>

<script>
export default {
  name: 'TrafficLight',
  data () {
    return {
      defaultColor: { 'background-color': 'white' },
      redStyle: this.defaultColor,
      yellowStyle: this.defaultColor,
      greenStyle: this.defaultColor
    }
  },

  watch: {
    $route (to, from) {
      // console.log(to)
      if (to.name === 'Red') {
        this.turnOnRed()
        console.log('Меняю цыет на Red')
      } else if (to.name === 'Yellow') {
        this.turnOnYellow()
        console.log('Меняю цыет на Yellow')
      } else if (to.name === 'Green') {
        this.turnOnGreen()
        console.log('Меняю цыет на Green')
      } else {
        this.turnOnRed()
      }
    }
  },

  created () {
    console.log(this.$route)

    this.turnOnRed()

    setInterval(() => {
      if (this.$route.name === 'Red') {
        this.$router.push('/yellow')
      } else if (this.$route.name === 'Yellow') {
        this.$router.push('/green')
      } else if (this.$route.name === 'Green') {
        this.$router.push('/red')
      } else {
        this.$router.push('/red')
      }
    }, 5000)
  },

  methods: {
    resetColor () {
      this.redStyle = this.defaultColor
      this.yellowStyle = this.defaultColor
      this.greenStyle = this.defaultColor
    },
    turnOnRed () {
      this.resetColor()
      this.redStyle = { 'background-color': 'red' }
    },
    turnOnYellow () {
      this.resetColor()
      this.yellowStyle = { 'background-color': 'yellow' }
    },
    turnOnGreen () {
      this.resetColor()
      this.greenStyle = { 'background-color': 'green' }
    }
  }
}
</script>

<style scoped>
/* #red {
  background-color: red;
}

#yellow {
  background-color: yellow;
}

#green {
  background-color: green;
} */
</style>
