<template>
  <div class="app-header position-relative header-wrapper">
    <header class="header d-flex flex-row flex-nowrap flex-auto">
      <app-logo class="header-item header-logo d-flex mr-16" width="32px" height="32px" />
      <div class="header-item d-flex flex-auto mr-16">
        <app-search class="header-search d-flex mr-16" />
        <app-navigation class="header-navigation d-flex mr-16" />
      </div>
      <div class="header-item d-flex">
        <router-link class="header-log-in d-flex flex-center" to="">Log In</router-link>
      </div>
    </header>
  </div>
</template>

<script>
import AppLogo from './AppLogo.vue'
import AppNavigation from './AppNavigation.vue'
import AppSearch from './AppSearch.vue'

export default {
  components: { AppLogo, AppSearch, AppNavigation },
  name: 'AppHeader',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.header {
  padding: 16px 32px;

  align-self: stretch;

  background: rgb(22, 27, 34);
}

.header-log-in {
  padding: 0 20px;
  min-height: 28px;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;

  font-size: 90%;
}

.header-log-in:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
