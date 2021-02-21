<template>
  <div class="app-main-component">
    <app-header />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
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
