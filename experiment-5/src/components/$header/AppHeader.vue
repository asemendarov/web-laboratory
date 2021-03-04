<template>
  <div class="app-header tw-relative header-wrapper">
    <header class="header tw-flex tw-flex-row tw-flex-nowrap tw-flex-auto __md__ md:tw-flex-wrap" :class="[classDetails]">
      <!-- /// -->
      <app-menu-control class="header-item header-main-control tw-hidden tw-items-center tw-justify-center tw-mr-4 __md__ md:tw-flex" width="32px" height="32px" @app-click="menuControl" />
      <!-- /// -->
      <app-logo class="header-item header-logo tw-flex tw-mr-4 __md__ md:tw-flex-auto md:tw-items-center md:tw-justify-center" width="32px" height="32px" />
      <div class="header-item header-main tw-flex tw-flex-auto tw-mr-4 __md__ md:tw-flex-col md:tw-flex-full Details-content">
        <app-search class="header-search tw-flex tw-mr-4 md:tw-mr-0 __md__ md:tw-flex-col" />
        <app-navigation class="header-navigation tw-flex tw-mr-4 md:tw-mr-0 __md__ md:tw-flex-col" />
      </div>
      <!-- /// -->
      <app-theme-control class="header-item header-theme-control tw-flex tw-items-center tw-justify-center" width="24px" height="24px" />
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

<style lang="sass" scoped>
.header
  @apply tw-bg-very-dark-mostly-black-700

.header
  padding: 16px 32px

  align-self: stretch

  &-search
    transition: margin 0.5s ease-in-out

  &-search:focus-within
    width: 100%
    max-width: 808px

  &-search:focus-within::v-deep .search-key-slash
    display: none

@media (max-width: 808px)
  .header
    padding-right: 16px
    padding-left: 16px

  &-main
    order: 999

  &-main
    margin-right: 0 !important

  &-search
    margin-top: 20px
    margin-bottom: 20px

  &-navigation::v-deep .nav__item
    border-top: 1px solid var(--color-scrollbar)

  .Details--off .Details-content
    display: none
</style>
