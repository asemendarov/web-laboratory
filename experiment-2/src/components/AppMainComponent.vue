<template>
  <div class="app-main-component">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/$header/AppHeader'
import AppMain from '@/components/$main/AppMain'
import AppFooter from '@/components/$footer/AppFooter'

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
