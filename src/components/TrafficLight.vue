<template>
  <div id="traffic-light">
    <router-link id="red" to="/red" :class="{ 'red-color': classColor.red }">Перейти к red</router-link>
    <router-link id="yellow" to="/yellow" :class="{ 'yellow-color': classColor.yellow }">Перейти к yellow</router-link>
    <router-link id="green" to="/green" :class="{ 'green-color': classColor.green }">Перейти к greeen</router-link>
    <span v-text="spanText"></span>
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
      delayColor: {
        red: 10000,
        yellow: 3000,
        green: 15000,
        default: 2000,

        getDelay (path = this.$route.path) {
          if (path === '/red') return this.red
          else if (path === '/yellow') return this.yellow
          else if (path === '/green') return this.green
          else return this.default
        }
      },
      idInterval: null,
      spanText: '...'
    }
  },

  watch: {
    $route (to, from) {
      this.startTrafficLight(to.path)
    }
  },

  created () {
    this.startTrafficLight()
  },

  methods: {
    async startTrafficLight (path = this.$route.path) {
      this.updateCollor(path)

      const ms = this.delayColor.getDelay(path)
      this.startTimer(ms, 50).then(() => this.changeTraffcLight())
    },

    async startTimer (ms, step = 50) {
      if (this.idInterval) {
        clearInterval(this.idInterval)
      }

      const currentTime = new Date()

      return new Promise((resolve, reject) => {
        this.idInterval = setInterval(() => {
          let time = ms - (new Date() - currentTime)

          if (time <= 0) {
            console.log(this.idInterval)
            clearInterval(this.idInterval)
            resolve()
          }

          this.spanText = this.formatTime(time)
        }, step)
      })
    },

    changeTraffcLight () {
      if (this.$route.path === '/red') {
        this.$router.push('/yellow')
      } else if (this.$route.path === '/yellow') {
        this.$router.push('/green')
      } else if (this.$route.path === '/green') {
        this.$router.push('/red')
      } else {
        this.$router.push('/red')
      }
    },

    formatTime (ms) {
      const time = new Date(ms)
      return `${time.getSeconds()}:${time.getMilliseconds()}`
    },

    updateCollor (path = this.$route.path) {
      this.classColor.red = path === '/red'
      this.classColor.yellow = path === '/yellow'
      this.classColor.green = path === '/green'
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
