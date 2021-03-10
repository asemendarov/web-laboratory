<template>
  <footer class="the-footer">
    <div class="footer-container">
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
// @import

.the-footer {
  padding: 18px;

  display: flex;
  justify-content: center;

  & .footer-container {
    flex: 0 1 800px;
  }
}

.the-footer {
  margin-top: 36px;
}
</style>
