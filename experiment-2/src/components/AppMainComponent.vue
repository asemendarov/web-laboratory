<template>
  <div class="app-main-component">
    <app-header />
  </div>
</template>

<script>
import AppHeader from '@/components/headers/AppHeader'
export default {
  components: { AppHeader },
  name: 'AppMainComponent',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.app-main-component {
  height: inherit;
}
</style>
