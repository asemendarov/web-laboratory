<template>
  <div class="traffic-light">
    <h1>Светофор</h1>
    <span v-text="textTime"></span>
    <signal-lens name="red" whom="yellow" color="red" :delay="10000" default @redirect="redirect" />
    <signal-lens name="yellow" whom="green" color="yellow" :delay="3000" @redirect="redirect" />
    <signal-lens name="green" whom="red" color="green" :delay="15000" @redirect="redirect" />
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

      idInterval: null,
      stepUpdate: 100,
      textTime: '...',

      startTimeOperation: null,
      passedTimeOperation: 0
    }
  },

  created() {
    window.addEventListener('beforeunload', this.beforeWindowUnload)
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.beforeWindowUnload)
  },

  watch: {
    $route(to, from) {
      this.passedTimeOperation = 0
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

    this.loadPassedTimeOperation()
    this.routeСontrol(this.$route)
  },

  methods: {
    // Обработчик события перезагрузки станицы
    beforeWindowUnload(event) {
      this.savePassedTimeOperation()
    },

    // Сохраняет прошедшее время, затраченное на обработку операции
    savePassedTimeOperation() {
      if (!this.startTimeOperation) return

      window.sessionStorage.setItem(
        `${this.$options._scopeId}-passedTime`,
        new Date() - this.startTimeOperation
      )
    },

    // Загружает прошедшее время, затраченное на обработку операции
    loadPassedTimeOperation() {
      const time = window.sessionStorage.getItem(`${this.$options._scopeId}-passedTime`)

      if (!time) return

      this.passedTimeOperation = time
      // window.sessionStorage.removeItem(`${this.$options._scopeId}-passedTime`)
    },

    // Запускает сигнальную линзу у светофора в соответствии с маршрутом
    startTrafficLight() {
      if (this.idInterval) {
        clearInterval(this.idInterval)
      }

      const currentSignalLens = this.signalLensArrey.find(
        (lens) => lens.name === this.$route.params.name
      )

      this.startTimeOperation = new Date() - this.passedTimeOperation

      this.idInterval = setInterval(() => {
        const leftTime = currentSignalLens.updatedСondition(this.startTimeOperation)
        this.textTime = this.formatTime(leftTime)
      }, this.stepUpdate)
    },

    // Проверка маршрута со списком зарегистрированных сигнальных линз
    routeСontrol(to, from) {
      if (!this.signalLensArrey.length) {
        throw new Error('В компоненте TrafficLight должен быть хотя бы один SignalLens')
      }

      if (this.signalLensArrey.some((lens) => lens.name === to.params.name)) {
        /* Действия при совпадении /:name с одним из компонентов SignalLens */

        this.startTrafficLight()
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

    // Обрабатывает запросы сигнальных линз на перенаправление
    redirect(toName) {
      if (this.$route.params.name === toName) return

      if (this.idInterval) clearInterval(this.idInterval)

      this.$router.push({
        name: this.$router.currentRoute.name,
        params: { name: toName }
      })
    },

    // Форматирует время
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
