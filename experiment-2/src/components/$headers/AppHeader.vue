<template>
  <div class="app-header position-relative header-wrapper">
    <header
      class="header d-flex flex-row flex-nowrap flex-auto __md__ md-flex-wrap"
      :class="[classDetails]"
    >
      <!-- /// -->
      <app-menu-control
        class="header-item header-main-control d-none flex-center mr-16 __md__ md-d-flex"
        width="32px"
        height="32px"
        @app-click="menuControl"
      />
      <!-- /// -->
      <app-logo
        class="header-item header-logo d-flex mr-16 __md__ md-flex-auto md-flex-center"
        width="32px"
        height="32px"
      />
      <div
        class="header-item header-main d-flex flex-auto mr-16 __md__ md-flex-column md-flex-full-width Details-content"
      >
        <app-search class="header-search d-flex mr-16 __md__ md-flex-column" />
        <app-navigation class="header-navigation d-flex mr-16 __md__ md-flex-column" />
      </div>
      <!-- /// -->
      <app-theme-control
        class="header-item header-theme-control d-flex flex-center"
        width="24px"
        height="24px"
      />
      <!-- /// -->
    </header>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'

import AppSearch from '@/components/$headers/components/AppSearch'
import AppNavigation from '@/components/$headers/components/AppNavigation'

import AppThemeControl from '@/components/$controls/AppThemeControl'
import AppMenuControl from '@/components/$controls/AppMenuControl'

export default {
  components: { AppLogo, AppSearch, AppNavigation, AppThemeControl, AppMenuControl },
  name: 'AppHeader',
  data() {
    return {
      isEnabledDetails: null
    }
  },
  computed: {
    classDetails() {
      return this.isEnabledDetails ? 'Details--on' : 'Details--off'
    }
  },
  methods: {
    menuControl(isEnabled, event) {
      this.isEnabledDetails = isEnabled
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

@media (max-width: 808px) {
  .header {
    padding-inline: 16px;
  }
  .header-main {
    order: 999;
  }
  .header-main,
  .header-main >>> .mr-16 {
    margin-right: 0 !important;
  }
  .header-search {
    margin-block: 20px;
  }
  .header-navigation >>> .nav__item {
    border-top: 1px solid #30363d;
  }

  .Details--off .Details-content {
    display: none;
  }
}
</style>
