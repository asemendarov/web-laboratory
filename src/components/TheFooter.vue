<template>
  <footer class="the-footer">
    <div class="the-footer__container">
      <slot></slot>
    </div>
  </footer>
</template>
<script>
export default {
  name: "TheFooter",
  data() {
    return {
      // pass
    };
  },
};
</script>

<style lang="scss">
// 1rem - 10px

.the-footer {
  margin-top: 3.6rem;
  padding: 1.8rem;

  display: flex;
  justify-content: center;

  &__container {
    flex: 0 1 800px;
  }
}
</style>
