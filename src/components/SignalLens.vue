<template>
  <div class="signal-lens" @click.stop="signalLensClick" :style="style">
    <slot>
      <!-- pass -->
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    /* Имя текущей сигнальной линзы */
    name: {
      type: String,
      required: true
    },
    /* Имя сигнальной линзы, которой будет передано управление */
    whom: {
      type: String,
      required: true
    },
    /* Цвет сигнальной линзы  */
    color: {
      type: String,
      required: true
    },
    /* Общее время, которое сигнальная линза должна гореть (в миллисекундах) */
    delay: {
      type: Number,
      default: 3000 // Необходима валидация
    },
    /* Время, которое линза должна мерцать (в миллисекундах) */
    flicker: {
      type: Number,
      default: 3000 // Необходима валидация
    }
  },
  name: 'SignalLens',
  data() {
    return {
      opacity: 0.2,
      stretchFlicker: 500,

      idInterval: null,
      endTimeOperation: null,

      stepUpdate: 100
    }
  },
  computed: {
    style() {
      return {
        background: this.color,
        opacity: this.opacity
      }
    }
  },
  methods: {
    async startSignalLens() {
      this.opacity = 1

      this.startTimer().then(() => this._redirect(this.whom))
    },

    async startTimer() {
      if (this.idInterval) {
        clearInterval(this.idInterval)
        this.endTimeOperation = null
      }

      const currentTime = new Date()

      return new Promise((resolve, reject) => {
        this.idInterval = setInterval(() => {
          this.endTimeOperation = this.delay - (new Date() - currentTime)

          this.calcFlicker(this.endTimeOperation)

          if (this.endTimeOperation <= 0) {
            clearInterval(this.idInterval)
            resolve()
          }
        }, this.stepUpdate)
      })
    },

    async calcFlicker(time) {
      if (time > this.flicker) return

      if (~~((time + time / this.stretchFlicker) / this.stretchFlicker) % 2) {
        this.opacity = 1
      } else {
        this.opacity = 0.2
      }
    },

    _redirect(toName, ...param) {
      if (this.$route.params.name === toName) return

      clearInterval(this.idInterval)

      this.$emit('redirect', ...param)

      this.$router.push({
        name: this.$router.currentRoute.name,
        params: { name: toName }
      })
    },

    signalLensClick() {
      this._redirect(this.name)
    }
  }
}
</script>

<style scoped>
.signal-lens {
  display: flex;

  margin: 10px 0;
  padding: 50% 0;

  width: 100%;
  height: 0;

  border: 2px solid #eeeeee;
  border-radius: 50%;
  background-color: #eeeeee;

  cursor: pointer;
}
</style>
