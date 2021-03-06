<template>
  <div class="app-footer">
    <footer class="footer">
      <ul class="ul footer-item">
        <li class="li">
          <span class="tw-whitespace-nowrap">© 2021 Alpha Centauri</span>
        </li>
        <li class="li"><router-link to="">API</router-link></li>
        <li class="li">
          <router-link to="">Codex</router-link>
        </li>
      </ul>
      <app-logo class="footer-logo footer-item" width="32px" height="32px" :full="false" alpha="55" />
      <ul class="ul footer-item">
        <li class="li">
          <router-link to="">Contact</router-link>
        </li>
        <li class="li">
          <router-link to="">Privacy</router-link>
        </li>
        <li class="li">
          <router-link :to="{ name: 'about' }">About</router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
import AppLogo from "@/components/AppLogo";

export default {
  components: { AppLogo },
  name: "AppFooter",
  data() {
    return {
      // pass
    };
  },
};
</script>
<style lang="sass" scoped>
.app-footer
  @apply tw-relative tw-mx-auto tw-my-0 tw-max-w-7xl

.footer
  @apply tw-mt-10 tw-px-8 tw-py-4 tw-flex tw-border-t tw-border-very-dark-grayish-blue-700
  @apply md:tw-flex-col md:tw-items-center md:tw-justify-center

  &-logo
    @apply tw-flex tw-items-center tw-justify-center tw-flex-auto
    @apply md:tw-hidden

.ul
  @apply tw-w-2/5 tw-flex tw-items-center tw-justify-between
  @apply md:tw-items-center md:tw-justify-center md:tw-flex-auto

.li
  @apply tw-flex tw-items-center tw-justify-center
  @apply md:tw-mr-4

a
  @apply tw-text-moderate-blue-500

  &:hover
    @apply tw-underline
</style>
