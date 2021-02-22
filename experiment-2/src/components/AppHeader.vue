<template>
  <div class="app-header position-relative header-wrapper">
    <header class="header d-flex flex-row flex-nowrap flex-auto">
      <app-menu-control
        class="header-item header-main-control d-none d-md-flex flex-center mr-16"
        width="32px"
        height="32px"
      />
      <app-logo class="header-item header-logo d-flex mr-16" width="32px" height="32px" />
      <div class="header-item header-main d-md-none d-flex flex-auto mr-16 width-full">
        <app-search class="header-search d-flex mr-16" />
        <app-navigation class="header-navigation d-flex mr-16" />
      </div>
      <app-theme-control
        class="header-item header-theme-control d-flex flex-center"
        width="24px"
        height="24px"
      />
    </header>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import AppNavigation from '@/components/AppNavigation'
import AppSearch from '@/components/AppSearch'
import AppThemeControl from '@/components/AppThemeControl'
import AppMenuControl from '@/components/AppMenuControl'

export default {
  components: { AppLogo, AppSearch, AppNavigation, AppThemeControl, AppMenuControl },
  name: 'AppHeader',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.header-main-control.d-md-none {
  display: none !important;
}

.header {
  padding: 16px 32px;

  align-self: stretch;

  background: rgb(22, 27, 34);
}

@media (max-width: 808px) {
  .header {
    padding-inline: 16px;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-none {
    display: none !important;
  }

  .header-logo {
    flex: auto;
    justify-content: center;
  }
}
</style>
