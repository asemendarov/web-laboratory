<template>
  <div class="app-footer position-relative footer-wrapper">
    <footer class="footer d-flex pd-15-30 __md__ md-flex-column md-flex-center">
      <ul class="ul list-style-none d-flex flex-ai-center flex-jc-space-between __md__ md-flex-center md-flex-full-width">
        <li class="li d-flex flex-center __md__ md-mr-16">
          <span class="nowrap">© 2021 Alpha Centauri</span>
        </li>
        <li class="li d-flex flex-center __md__ md-mr-16"><router-link to="">API</router-link></li>
        <li class="li d-flex flex-center __md__ md-mr-16">
          <router-link to="">Codex</router-link>
        </li>
      </ul>
      <app-logo class="footer-item footer-logo d-flex flex-center flex-auto __md__ md-d-none" width="32px" height="32px" :full="false" alpha="55" />
      <ul class="ul list-style-none d-flex flex-ai-center flex-jc-space-between __md__ md-flex-center md-flex-full-width">
        <li class="li d-flex flex-center __md__ md-mr-16">
          <router-link to="">Contact</router-link>
        </li>
        <li class="li d-flex flex-center __md__ md-mr-16">
          <router-link to="">Privacy</router-link>
        </li>
        <li class="li d-flex flex-center __md__ md-mr-16">
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
<style scoped>
.app-footer {
  margin: 0 auto;
  max-width: 1280px;
}

.footer {
  margin-top: 40px;

  border-top: 1px solid var(--color-scrollbar);
}

.ul {
  width: 40%;
}

a {
  color: var(--color-link-footer);
}

a:hover {
  text-decoration: underline;
}
</style>
