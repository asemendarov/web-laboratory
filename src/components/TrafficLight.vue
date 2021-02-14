<template>
  <div class="traffic-light">
    <h1>Светофор</h1>
    <span v-text="textTime"></span>
    <signal-lens
      v-for="(options, key) in optionsList"
      :key="key"
      v-bind="options"
      @redirect="redirect"
    />
  </div>
</template>

<script>
import SignalLens from '@/components/SignalLens'

export default {
  components: { SignalLens },
  name: 'TrafficLight',
  data() {
    return {
      UUIDv4: new Map(), // debug param

      signalLensArrey: [],
      optionsList: [
        {
          name: 'red',
          whom: 'yellow',
          color: 'red',
          delay: 10000,
          default: 'default'
        },
        {
          name: 'yellow',
          whom: 'green',
          delay: 3000,
          color: 'yellow'
        },
        {
          name: 'green',
          whom: 'red',
          delay: 15000,
          color: 'green'
        }
      ],

      idInterval: null,
      stepUpdate: 100,
      textTime: '...'
    }
  },
  watch: {
    /* Предварительная проверка запрашиваемого компонента */
    $route(to, from) {
      if (this.routeСontrol(to, from)) {
        this.startTrafficLight()
      }
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
  mounted() {
    this.$children
      .filter((vue) => {
        return vue.$options.name === SignalLens.name
      })
      .forEach((vue) => {
        this.signalLensArrey.push(vue)
      })

    /* Предварительная проверка запрашиваемого компонента */
    if (this.routeСontrol(this.$route)) {
      this.startTrafficLight()
    }
  },

  methods: {
    routeСontrol(to, from) {
      if (this.signalLensArrey.some((lens) => lens.name === to.params.name)) {
        /* Действия при совпадении /:name с одним из компонентов SignalLens */

        return true
      } else {
        /* Действия при отсутствии совпадения /:name с одним из компонентов SignalLens */

        let defaultLens = this.signalLensArrey.find((lens) => lens.$attrs.hasOwnProperty('default'))

        if (!defaultLens) {
          defaultLens = this.signalLensArrey[0]
        }

        this.$router.push({
          name: this.$router.currentRoute.name,
          params: { name: defaultLens.name }
        })
      }
    },

    startTrafficLight() {
      this.startClockGenerator()
    },

    startClockGenerator() {
      if (this.idInterval) {
        clearInterval(this.idInterval)
      }

      const currentSignalLens = this.signalLensArrey.find(
        (lens) => lens.name === this.$route.params.name
      )

      const startTimeOperation = new Date()

      return new Promise((resolve, reject) => {
        this.idInterval = setInterval(() => {
          currentSignalLens.updatedСondition(startTimeOperation)
          this.textTime = this.formatTime(currentSignalLens.leftTime)
        }, this.stepUpdate)
      })
    },

    handlerRedirect(event) {
      if (this.idInterval) {
        clearInterval(this.idInterval)
      }
    },

    redirect(toName) {
      if (this.$route.params.name === toName) return

      if (this.idInterval) clearInterval(this.idInterval)

      this.$router.push({
        name: this.$router.currentRoute.name,
        params: { name: toName }
      })
    },

    formatTime(ms) {
      if (!ms || ms <= 0) return '0:000'

      return `${~~(ms / 1000)}:${ms % 1000}`
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
.traffic-light {
  margin: auto;
  padding: 20px;
  width: 250px;
  max-width: 250px;
  border: 2px solid #eeeeee;
  border-radius: 30px;
}
.traffic-light > h1 {
  text-align: center;
}
.traffic-light > span {
  display: block;
  text-align: center;
  padding-bottom: 10px;
}
</style>
