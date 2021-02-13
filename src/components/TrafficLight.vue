<template>
  <div id="traffic-light">
    <h1>Светофор</h1>
    <span v-text="spanText"></span>
    <signal-lens name="red" color="red" default />
    <signal-lens name="yellow" color="yellow" />
    <signal-lens name="green" color="green" />
  </div>
</template>

<script>
import SignalLens from '@/components/SignalLens'

export default {
  components: { SignalLens },
  name: 'TrafficLight',
  data() {
    return {
      signalLensArrey: [],
      spanText: '...'
    }
  },
  watch: {
    $route(to, from) {
      this.routeСontrol(to, from)
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

    this.routeСontrol(this.$route)

    console.log()
  },
  methods: {
    routeСontrol(to, from) {
      if (this.signalLensArrey.some((lens) => lens.name === to.params.name)) {
        /* Действия при совпадении /:name с одним из компонентов SignalLens */
        // pass
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
  display: block;
  text-align: center;
  padding-bottom: 10px;
}
</style>
