<template>
  <div class="app-menu-control" @click.stop="clickControl">
    <button class="d-flex" type="button" :aria-expanded="isEnabled.toString()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  },
  name: 'AppMenuControl',
  data() {
    return {
      isEnabled: false
    }
  },
  computed: {
    // pass
  },
  mounted() {
    // pass
  },
  methods: {
    clickControl(event) {
      this.isEnabled = !this.isEnabled
      this.$emit('click', this.isEnabled, event)
    }
  }
}
</script>

<style scoped>
/* pass */
</style>
