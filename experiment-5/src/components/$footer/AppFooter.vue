<template>
  <div class="app-footer tw-relative footer-wrapper">
    <footer class="footer tw-flex tw-px-8 tw-py-4 __md__ md:tw-flex-col md:tw-items-center md:tw-justify-center">
      <ul class="ul tw-flex tw-items-center tw-justify-between __md__ md:tw-items-center md:tw-justify-center md:tw-flex-full">
        <li class="li tw-flex tw-items-center tw-justify-center __md__ md:tw-mr-4">
          <span class="tw-whitespace-nowrap">© 2021 Alpha Centauri</span>
        </li>
        <li class="li tw-flex tw-items-center tw-justify-center __md__ md:tw-mr-4"><router-link to="">API</router-link></li>
        <li class="li tw-flex tw-items-center tw-justify-center __md__ md:tw-mr-4">
          <router-link to="">Codex</router-link>
        </li>
      </ul>
      <app-logo class="footer-item footer-logo tw-flex tw-items-center tw-justify-center tw-flex-auto __md__ md:tw-hidden" width="32px" height="32px" :full="false" alpha="55" />
      <ul class="ul tw-flex tw-items-center tw-justify-between __md__ md:tw-items-center md:tw-justify-center md:tw-flex-full">
        <li class="li tw-flex tw-items-center tw-justify-center __md__ md:tw-mr-4">
          <router-link to="">Contact</router-link>
        </li>
        <li class="li tw-flex tw-items-center tw-justify-center __md__ md:tw-mr-4">
          <router-link to="">Privacy</router-link>
        </li>
        <li class="li tw-flex tw-items-center tw-justify-center __md__ md:tw-mr-4">
          <router-link :to="{ name: 'About' }">About</router-link>
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
  margin: 0 auto
  max-width: 1280px

.footer
  margin-top: 40px

  border-top: 1px solid var(--color-scrollbar)

.ul
  width: 40%

a
  color: var(--color-link-footer)

a:hover
  text-decoration: underline
</style>
