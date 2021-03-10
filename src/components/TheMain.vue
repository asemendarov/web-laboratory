<template>
  <main class="the-main">
    <div class="main-container">
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
// @import

.the-main {
  padding: 18px;

  display: flex;
  justify-content: center;

  & .main-container {
    flex: 0 1 800px;
  }
}
</style>
