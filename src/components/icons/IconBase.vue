<template>
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 18 18" :aria-labelledby="name" role="presentation">
      <title :id="name" lang="en">{{ name }} icon</title>
      <g :fill="color">
        <slot />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>