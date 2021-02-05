<template>
  <div id="traffic-light">
    <router-link id="red" to="/red" :class="{ 'red-color': classColor.red }"
      >Перейти к red</router-link
    >
    <router-link
      id="yellow"
      to="/yellow"
      :class="{ 'yellow-color': classColor.yellow }"
      >Перейти к yellow</router-link
    >
    <router-link
      id="green"
      to="/green"
      :class="{ 'green-color': classColor.green }"
      >Перейти к greeen</router-link
    >
    <span v-text="spanText"></span>
  </div>
</template>

<script>
export default {
  props: [],
  name: 'TrafficLight',
  data() {
    return {
      classColor: {
        _red: false,
        _yellow: false,
        _green: false,

        get red() {
          return this._red
        },
        get yellow() {
          return this._yellow
        },
        get green() {
          return this._green
        },

        change(red = false, yellow = false, green = false) {
          this._red = red
          this._yellow = yellow
          this._green = green
        },

        isSelected() {
          return this._red || this._yellow || this._green
        },

        reset() {
          this._red = this._yellow = this._green = false
        }
      },

      delayColor: {
        _red: 10000,
        _yellow: 3000,
        _green: 15000,
        _default: 2000,

        getDelay(path = this.$route.path) {
          if (path === '/red') return this._red
          else if (path === '/yellow') return this._yellow
          else if (path === '/green') return this._green
          else return this.default
        }
      },

      idInterval: null,
      spanText: '...',

      beginFlicker: 3000,
      stretchFlicker: 500
    }
  },

  watch: {
    $route(to, from) {
      this.startTrafficLight(to.path)
    }
  },

  created() {
    this.startTrafficLight()
  },

  methods: {
    async startTrafficLight(path = this.$route.path) {
      this.updateCollor(path)

      const ms = this.delayColor.getDelay(path)
      this.startTimer(ms, 50).then(() => this.changeTraffcLight())
    },

    async startTimer(ms, step = 50) {
      if (this.idInterval) {
        clearInterval(this.idInterval)
      }

      const currentTime = new Date()

      return new Promise((resolve, reject) => {
        this.idInterval = setInterval(() => {
          let time = ms - (new Date() - currentTime)

          this.calcFlicker(time)

          if (time <= 0) {
            clearInterval(this.idInterval)
            resolve()
          }

          this.spanText = this.formatTime(time)
        }, step)
      })
    },

    async calcFlicker(time) {
      if (time > this.beginFlicker) return

      if (~~((time + time / this.stretchFlicker) / this.stretchFlicker) % 2) {
        this.updateCollor()
      } else {
        this.classColor.reset()
      }
    },

    async changeTraffcLight() {
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

    formatTime(ms) {
      const time = new Date(ms)
      return `${time.getSeconds()}:${time.getMilliseconds()}`
    },

    updateCollor(path = this.$route.path) {
      this.classColor.change(
        path === '/red',
        path === '/yellow',
        path === '/green'
      )
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
