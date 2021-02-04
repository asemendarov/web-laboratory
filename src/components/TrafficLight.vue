<template>
  <div id="traffic-light">
    <router-link id="red" to="/red" :class="{ 'red-color': classColor.red }">Перейти к red</router-link>
    <router-link id="yellow" to="/yellow" :class="{ 'yellow-color': classColor.yellow }">Перейти к yellow</router-link>
    <router-link id="green" to="/green" :class="{ 'green-color': classColor.green }">Перейти к greeen</router-link>
    <span id="base-timer-label" class="base-timer__label" v-text="spanText"></span>
  </div>
</template>

<script>
export default {
  props: [],
  name: 'TrafficLight',
  data () {
    return {
      classColor: {
        red: false,
        yellow: false,
        green: false
      },
      idInterval: null,
      spanText: '...'
    }
  },

  watch: {
    $route (to, from) {
      // console.log(to)
      this.updateCollor(to.path)
    }
  },

  created () {
    // console.log(this.$route)
    this.updateCollor()
  },

  methods: {
    updateCollor (path) {
      if (!path) {
        path = this.$route.path
      }

      if (path === '/red') {
        this.turnOnRed()
        console.log('Меняю цыет на Red')
      } else if (path === '/yellow') {
        this.turnOnYellow()
        console.log('Меняю цыет на Yellow')
      } else if (path === '/green') {
        this.turnOnGreen()
        console.log('Меняю цыет на Green')
      } else {
        // this.turnOnRed()
      }
    },
    setCollor (red, yellow, green) {
      this.classColor.red = !!red
      this.classColor.yellow = !!yellow
      this.classColor.green = !!green
    },
    turnOnRed () {
      this.setCollor(true)
      this.startTimer(2000)
    },
    turnOnYellow () {
      this.setCollor(null, true)
      this.startTimer(2000)
    },
    turnOnGreen () {
      this.setCollor(null, null, true)
      this.startTimer(2000)
    },
    changeTraffcLight () {
      if (this.$route.path === '/red') {
        this.$router.push('/yellow')
      } else if (this.$route.path === '/yellow') {
        this.$router.push('/green')
      } else if (this.$route.path === '/green') {
        this.$router.push('/red')
      } else {
        // this.$router.push('/red')
      }
    },

    startTimer (ms, step = 50) {
      if (this.idInterval) {
        clearInterval(this.idInterval)
      }

      const currentTime = new Date()

      new Promise((resolve, reject) => {
        this.idInterval = setInterval(() => {
          let time = ms - (new Date() - currentTime)

          if (time <= 0) {
            clearInterval(this.idInterval)
            resolve()
          }

          this.spanText = this.formatTimeLeft(time)
        }, step)
      }).then(() => this.changeTraffcLight())
    },

    formatTimeLeft (ms) {
      const time = new Date(ms)
      return `${time.getSeconds()}:${time.getMilliseconds()}`
    }
  }
}
</script>

<style scoped>
.red-color {
  background-color: red;
}

.yellow-color {
  background-color: yellow;
}

.green-color {
  background-color: green;
}

span {
  display: block;
}
</style>
