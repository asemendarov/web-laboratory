<template>
  <header class="the-header">
    <div class="the-header__container">
      <nav class="the-header__navigation">
        <router-link class="link" :to="{ name: 'Home' }">Главная</router-link>
        <router-link class="link" :to="{ name: 'ContactList' }">Список контактов</router-link>
        <!-- <router-link class="link" :to="{ name: 'ContactInfo' }">Контактная информация</router-link> -->
      </nav>
    </div>
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

// 1rem = 10px

.the-header {
  padding: 1.8rem;

  display: flex;
  justify-content: center;

  background-color: $color-header;

  &__container {
    flex: 0 1 800px;
  }

  &__navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  & .link {
    padding: 0.4rem;
    margin: 0.8rem;

    border-bottom: 1px solid darken($color-header, 10);

    &:hover {
      border-color: darken($color-header, 100);
    }
  }
}
</style>
