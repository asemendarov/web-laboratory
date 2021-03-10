<template>
  <header class="the-header">
    <nav class="header-container">
      <router-link to="/">Главная</router-link>
      <router-link to="/about">Контакты</router-link>
    </nav>
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  data() {
    return {
      // pass
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.the-header {
  padding: 18px;

  display: flex;
  justify-content: center;

  & .header-container {
    flex: 0 1 800px;
  }
}

.the-header {
  background-color: $bg-header;

  & nav {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
