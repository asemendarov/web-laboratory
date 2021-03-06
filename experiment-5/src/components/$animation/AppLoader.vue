<template>
  <div class="app-loader">
    <div class="cssload-wraper tw-mt-5 tw-mb-5" :style="[paddingY, varBgCollor]">
      <div class="cssload-thecube" :style="[width, height]">
        <div class="cssload-cube cssload-c1"></div>
        <div class="cssload-cube cssload-c2"></div>
        <div class="cssload-cube cssload-c4"></div>
        <div class="cssload-cube cssload-c3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 30,
    },
    color: {
      type: String,
      default: "#2ba0c7", //wheat //hsl(195, 64%, 47%) //rgb(43, 158, 197)
    },
  },
  name: "AppLoader",
  data() {
    return {
      // pass
    };
  },
  computed: {
    paddingY() {
      return { "padding-top": `${this.size / 4}px`, "padding-bottom": `${this.size / 4}px` };
    },
    width() {
      return { width: `${this.size}px` };
    },
    height() {
      return { height: `${this.size}px` };
    },
    varBgCollor() {
      return { "--bgCollor": this.color };
    },
  },
};
</script>

<style lang="sass" scoped>
.cssload-thecube
  @apply tw-mx-auto tw-relative tw-transform tw-rotate-45

  & .cssload-cube
    @apply tw-relative tw-relative tw-transform tw-rotate-45

  & .cssload-cube
    @apply tw-float-left tw-w-1/2 tw-h-1/2 tw-relative tw-transform tw-scale-110

  & .cssload-cube:before
    content: ""
    @apply tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-moderate-blue-500
    @apply tw-animate-cssload tw-origin-full

  & .cssload-c2
    @apply tw-transform tw-scale-110 tw-rotate-90

  & .cssload-c3
    @apply tw-transform tw-scale-110 tw-rotate-180

  & .cssload-c4
    @apply tw-transform tw-scale-110 tw-rotate-270

  & .cssload-c2:before
    animation-delay: 0.35s

  & .cssload-c3:before
    animation-delay: 0.69s

  & .cssload-c4:before
    animation-delay: 1.04s

// setting
.cssload-thecube .cssload-cube:before
  background-color: var(--bgCollor)
</style>