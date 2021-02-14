<template>
  <div class="signal-lens" @click.stop="emitRedirect(name)" :style="style">
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

      leftTime: null
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
  watch: {
    $route() {
      this.opacity = 0.2
    }
  },
  methods: {
    updatedСondition(startTimeOperation) {
      this.leftTime = this.delay - (new Date() - startTimeOperation)

      this.calcFlicker(this.leftTime)

      if (this.leftTime <= 0) {
        this.emitRedirect(this.whom)
      }
    },

    calcFlicker(time) {
      if (time > this.flicker) {
        this.opacity = 1
        return
      }

      if (~~((time + time / this.stretchFlicker) / this.stretchFlicker) % 2) {
        this.opacity = 1
      } else {
        this.opacity = 0.2
      }
    },

    emitRedirect(toName) {
      this.$emit('redirect', toName)
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
