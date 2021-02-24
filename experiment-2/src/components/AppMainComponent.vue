<template>
  <div class="app-main-component">
    <app-header />
    <app-main />
  </div>
</template>

<script>
import AppHeader from '@/components/$headers/AppHeader'
import AppMain from '@/components/$mains/AppMain'

export default {
  components: { AppHeader, AppMain },
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
  min-height: inherit;
}
</style>
