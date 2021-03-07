<template>
  <div class="app-header header-wrapper tw-relative">
    <header class="header" :class="[classDetails]">
      <!-- /// -->
      <app-menu-control class="header-item header-main-control" width="32px" height="32px" @app-click="menuControl" />
      <!-- /// -->
      <app-logo class="header-item header-logo" width="32px" height="32px" />
      <div class="header-item header-main Details-content">
        <app-search v-if="isSearchEnabled" class="header-search" />
        <app-navigation class="header-navigation" />
      </div>
      <!-- /// -->
      <app-theme-control class="header-item header-theme-control" width="24px" height="24px" />
      <!-- /// -->
    </header>
  </div>
</template>

<script>
import AppLogo from "@/components/AppLogo";

import AppSearch from "@/components/$forms/AppSearch";
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
    isSearchEnabled() {
      return this.$route.name !== "search";
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
  &
    @apply tw-px-8 tw-py-4 tw-flex tw-flex-row tw-flex-nowrap tw-flex-auto tw-self-stretch tw-bg-very-dark-mostly-black-700
    @apply md:tw-flex-wrap md:tw-px-4

  &-main-control
    @apply tw-mr-4 tw-hidden tw-items-center tw-justify-center
    @apply md:tw-flex

  &-logo
    @apply tw-mr-4 tw-flex
    @apply md:tw-flex-auto md:tw-items-center md:tw-justify-center

  &-main
    @apply tw-mr-4 tw-flex tw-flex-auto tw-transition tw-delay-500 tw-ease-in-out
    @apply md:tw-mr-0 md:tw-flex-col md:tw-flex-full md:tw-order-last

  &-navigation
    @apply tw-flex tw-mr-4
    @apply md:tw-mr-0 md:tw-flex-col

  &-theme-control
    @apply tw-flex tw-items-center tw-justify-center

  &-search
    @apply tw-mr-4 tw-flex
    @apply md:tw-mr-0 md:tw-my-5 md:tw-flex-col

    &:focus-within
      @apply tw-w-full tw-max-w-4xl

      &::v-deep .search-key-slash
        @apply tw-hidden

@media (max-width: 808px)
  .Details--off .Details-content
    @apply tw-hidden
</style>
