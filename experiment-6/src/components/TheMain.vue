<template>
  <main class="the-main">
    <div class="the-main__container">
      <slot></slot>
    </div>
  </main>
</template>
<script>
export default {
  name: "TheMain",
  data() {
    return {
      // pass
    };
  },
};
</script>

<style lang="scss">
// 1rem - 10px

.the-main {
  padding: 1.8rem;

  display: flex;
  justify-content: center;

  &__container {
    flex: 0 1 800px;
  }
}
</style>
