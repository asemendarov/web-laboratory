<template>
  <div class="app-header tw-relative header-wrapper">
    <header class="header d-flex flex-row flex-nowrap flex-auto __md__ md-flex-wrap" :class="[classDetails]">
      <!-- /// -->
      <app-menu-control class="header-item header-main-control d-none flex-center tw-mr-4 __md__ md-d-flex" width="32px" height="32px" @app-click="menuControl" />
      <!-- /// -->
      <app-logo class="header-item header-logo d-flex tw-mr-4 __md__ md-flex-auto md-flex-center" width="32px" height="32px" />
      <div class="header-item header-main d-flex flex-auto tw-mr-4 __md__ md-flex-column md-flex-full-width Details-content">
        <app-search class="header-search d-flex tw-mr-4 md:tw-mr-0 __md__ md-flex-column" />
        <app-navigation class="header-navigation d-flex tw-mr-4 md:tw-mr-0 __md__ md-flex-column" />
      </div>
      <!-- /// -->
      <app-theme-control class="header-item header-theme-control d-flex flex-center" width="24px" height="24px" />
      <!-- /// -->
    </header>
  </div>
</template>

<script>
import AppLogo from "@/components/AppLogo";

import AppSearch from "@/components/$header/components/AppSearch";
import AppNavigation from "@/components/$header/components/AppNavigation";

import AppThemeControl from "@/components/$controls/AppThemeControl";
import AppMenuControl from "@/components/$controls/AppMenuControl";

export default {
  components: {
    AppLogo,
    AppSearch,
    AppNavigation,
    AppThemeControl,
    AppMenuControl,
  },
  name: "AppHeader",
  data() {
    return {
      isEnabledDetails: null,
    };
  },
  computed: {
    classDetails() {
      return this.isEnabledDetails ? "Details--on" : "Details--off";
    },
  },
  methods: {
    menuControl(isEnabled) {
      this.isEnabledDetails = isEnabled;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 16px 32px;

  align-self: stretch;

  background: var(--color-background-header);
}

.header-search {
  transition: margin 0.5s ease-in-out;
}

.header-search:focus-within {
  width: 100%;
  max-width: 808px;
}

.header-search:focus-within >>> .search-key-slash {
  display: none;
}

@media (max-width: 808px) {
  .header {
    padding-right: 16px;
    padding-left: 16px;
  }
  .header-main {
    order: 999;
  }
  .header-main {
    margin-right: 0 !important;
  }
  .header-search {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .header-navigation >>> .nav__item {
    border-top: 1px solid var(--color-scrollbar);
  }

  .Details--off .Details-content {
    display: none;
  }
}
</style>
