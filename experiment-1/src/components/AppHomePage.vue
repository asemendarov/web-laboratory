<template>
  <div class="homepage">
    <first-screen-home-page />
    <second-screen-home-page />
    <third-screen-home-page />
    <fifth-screen-home-page />
    <app-footer />
  </div>
</template>

<script>
import FirstScreenHomePage from '@/components/screens/FirstScreenHomePage'
import SecondScreenHomePage from '@/components/screens/SecondScreenHomePage'
import ThirdScreenHomePage from '@/components/screens/ThirdScreenHomePage'
import FifthScreenHomePage from '@/components/screens/FifthScreenHomePage'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'AppHomePage',
  components: {
    FirstScreenHomePage,
    SecondScreenHomePage,
    ThirdScreenHomePage,
    FifthScreenHomePage,
    AppFooter
  },
  data() {
    return {
      // pass
    }
  }
}
</script>

<style>
.homepage {
  height: inherit;
}

.button {
  padding: 15px 30px;

  white-space: nowrap;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #99862a;
}
</style>
