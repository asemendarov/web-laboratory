<template>
  <header class="the-header">
    <nav class="header-container">
      <router-link :to="{ name: 'Home' }">Главная</router-link>
      <router-link :to="{ name: 'ContactList' }">Список контактов</router-link>
      <router-link :to="{ name: 'ContactInfo' }">Контактная информация</router-link>
    </nav>
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
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 20px;
  }

  & a {
    border-bottom: 1px solid darken($bg-header, 10);

    &:hover {
      border-color: darken($bg-header, 100);
    }
  }
}
</style>
