<template>
  <div id="traffic-light">
    <h1>Светофор</h1>
    <span v-text="spanText"></span>
    <router-link id="red" to="/red" :class="classColor.red" />
    <router-link id="yellow" to="/yellow" :class="classColor.yellow" />
    <router-link id="green" to="/green" :class="classColor.green" />
  </div>
</template>

<script>
export default {
  props: [],
  name: 'TrafficLight',
  data() {
    return {
      UUIDv4: new Map(), // debug param

      classColor: {
        _red: false,
        _yellow: false,
        _green: false,

        get red() {
          return { 'red-color': true, opacity: !this._red }
        },
        get yellow() {
          return { 'yellow-color': true, opacity: !this._yellow }
        },
        get green() {
          return { 'green-color': true, opacity: !this._green }
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

        getDelay(path) {
          if (path === '/red') return this._red
          else if (path === '/yellow') return this._yellow
          else if (path === '/green') return this._green
          else return this.default
        }
      },

      idInterval: null,
      spanText: '...',

      beginFlicker: 3000,
      stretchFlicker: 500,

      endTimeOperation: null
    }
  },

  created() {
    let keys = Object.keys(sessionStorage)
    for (let key of keys) {
      console.log(`${key}: ${sessionStorage.getItem(key)}ms`)
    }
  },

  mounted() {
    this.endTimeOperation = sessionStorage.endTimeOperation
    this.startTrafficLight()
  },

  watch: {
    $route(to, from) {
      this.startTrafficLight(to.path)
    },

    endTimeOperation(newTime) {
      sessionStorage.endTimeOperation = newTime
    },

    // debug watch
    idInterval(newId, oldId) {
      if (oldId && this.UUIDv4.has(oldId)) {
        this.UUIDv4.delete(oldId)
      }

      this.UUIDv4.set(newId, this.uuidv4())
      console.log(
        `UUIDv4:\t${this.UUIDv4.get(newId)}\tsize: ${
          this.UUIDv4.size
        }\tnew: ${newId}, old: ${oldId}`
      )
    }
  },

  methods: {
    async startTrafficLight(path = this.$route.path) {
      this.updateCollor(path)

      const ms = this.delayColor.getDelay(path)
      this.startTimer(ms, 100).then(() => this.changeTraffcLight())
    },

    async startTimer(ms, step = 50) {
      if (this.idInterval) {
        clearInterval(this.idInterval)
        this.endTimeOperation = null
      }

      const currentTime = new Date()

      if (this.endTimeOperation) {
        ms = this.endTimeOperation
      }

      return new Promise((resolve, reject) => {
        this.idInterval = setInterval(() => {
          this.endTimeOperation = ms - (new Date() - currentTime)

          this.calcFlicker(this.endTimeOperation)

          if (this.endTimeOperation <= 0) {
            clearInterval(this.idInterval)
            resolve()
          }

          this.spanText = this.formatTime(this.endTimeOperation)
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
      if (ms <= 0) return '0:000'

      return `${~~(ms / 1000)}:${ms % 1000}`
    },

    updateCollor(path = this.$route.path) {
      this.classColor.change(path === '/red', path === '/yellow', path === '/green')
    },

    // debug function
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    }
  }
}
</script>

<style scoped>
#traffic-light {
  margin: auto;
  padding: 20px;

  width: 250px;
  max-width: 250px;

  border: 2px solid #eeeeee;
  border-radius: 30px;
}

#traffic-light > h1 {
  text-align: center;
}

#traffic-light > span {
  text-align: center;
  padding-bottom: 10px;
}

a {
  display: block;

  margin: 10px 0;
  padding: 50% 0;
  width: 100%;
  height: 0;

  background-color: #eeeeee;
  border: 2px solid #eeeeee;
  border-radius: 50%;
}

.red-color {
  background-color: rgb(255, 0, 0);
}

.yellow-color {
  background-color: rgb(255, 255, 0);
}

.green-color {
  background-color: rgb(0, 128, 0);
}

.opacity {
  opacity: 0.2;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';
}

span {
  display: block;
}
</style>
