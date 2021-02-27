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
      default: 3000,
      validator(value) {
        return value >= 0
      }
    },
    /* Время, которое линза должна мерцать (в миллисекундах) */
    flicker: {
      type: Number,
      default: 3000,
      validator(value) {
        return value >= 0
      }
    }
  },
  name: 'SignalLens',
  data() {
    return {
      opacity: 0.2,
      stretchFlicker: 500
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
    // Обновляет состояние сигнальной линзы
    updatedСondition(startTimeOperation) {
      const leftTime = this.delay - (new Date() - startTimeOperation)

      this.calcFlicker(leftTime)

      if (leftTime <= 0) {
        this.emitRedirect(this.whom)
      }

      return leftTime
    },

    // Просчитывает должна ли в определенный момент времени линза гореть или нет
    async calcFlicker(time) {
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

    // Отправляет запрос на переадресацию
    async emitRedirect(toName) {
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
