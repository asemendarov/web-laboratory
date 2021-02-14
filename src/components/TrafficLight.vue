<template>
  <div class="traffic-light">
    <h1>Светофор</h1>
    <span v-text="spanText"></span>
    <signal-lens
      v-for="(options, key) in optionsList"
      :key="key"
      v-bind="options"
      @redirect="handlerRedirect"
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
      optionsList: [
        {
          name: 'red',
          whom: 'yellow',
          color: 'red',
          default: 'default'
        },
        {
          name: 'yellow',
          whom: 'green',
          color: 'yellow'
        },
        {
          name: 'green',
          whom: 'red',
          color: 'green'
        }
      ],

      UUIDv4: new Map(), // debug param

      signalLensArrey: [],
      spanText: '...'
    }
  },
  watch: {
    /* Предварительная проверка запрашиваемого компонента */
    $route(to, from) {
      if (this.routeСontrol(to, from)) {
        // pass
      }
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
      const currentSignalLens = this.signalLensArrey.find(
        (lens) => lens.name === this.$route.params.name
      )

      currentSignalLens.startSignalLens()
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

    handlerRedirect(event) {
      // Перехватывает события
    },

    startTrafficLight() {
      // pass
    },

    formatTime(ms) {
      if (!ms || ms <= 0) return '0:000'

      return `${~~(ms / 1000)}:${ms % 1000}`
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
