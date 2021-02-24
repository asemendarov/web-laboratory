<template>
  <div class="app-main">
    <main class="main">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      // pass
    }
  },
  mounted() {
    // pass
  },
  methods: {
    // pass
  }
}
</script>
<style scoped>
.main-content {
  margin-top: 32px;
  margin-inline: auto;
  padding-inline: 16px;
  max-width: 1280px;
}
</style>
