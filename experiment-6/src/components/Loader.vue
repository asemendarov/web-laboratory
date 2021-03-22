<template>
  <div class="loader">
    <div class="loader__wrap">
      <div class="loader__spin" :style="[width, height]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    size: {
      type: Number,
      default: 80,
    },
  },
  data() {
    return {
      // pass
    };
  },
  computed: {
    width() {
      return { width: `${this.size}px` };
    },
    height() {
      return { height: `${this.size}px` };
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

// 1rem = 10px

.loader {
  margin-top: 2rem; /*20px*/
  margin-bottom: 2rem; /*20px*/

  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__spin {
    border: 10px solid lighten($color-loader, 40);
    border-top: 10px solid $color-loader;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>