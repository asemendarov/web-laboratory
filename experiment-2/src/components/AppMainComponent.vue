<template>
  <div class="app-main-component">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/$headers/AppHeader'
import AppMain from '@/components/$mains/AppMain'
import AppFooter from '@/components/$footers/AppFooter'

export default {
  components: { AppHeader, AppMain, AppFooter },
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
