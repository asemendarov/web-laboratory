<template>
  <div class="app-search">
    <form class="from-container d-flex" action="" method="get">
      <label class="input-wrapper d-flex flex-auto flex-center" for="search">
        <input type="text" name="search" placeholder="Search" />
        <img class="unselectable" src="@/assets/svg/search-key-slash.svg" alt="Search key slash" />
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  padding: 0 12px;

  min-height: 28px;

  border-radius: 6px;
  background: rgb(13, 17, 23);
}
</style>
