<template>
  <div id="signal-lens" @click="signalLensClick" :style="style">
    <slot>
      <!-- pass -->
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  name: 'SignalLens',
  data() {
    return {
      opacity: 0.2
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
    signalLensClick() {
      console.log('router.push >>', this.name)
      this.$router.push(`/${this.name}`)
    }
  }
}
</script>

<style scoped>
#signal-lens {
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
