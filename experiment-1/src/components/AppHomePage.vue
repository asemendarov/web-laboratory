<template>
  <div class="homepage">
    <first-screen-home-page />
    <second-screen-home-page />
    <third-screen-home-page />

    <div class="slide">
      <div class="slide-box">
        <!-- pass -->
      </div>
    </div>

    <footer class="slide">
      <div class="slide-box">
        <!-- pass -->
      </div>
    </footer>
  </div>
</template>

<script>
import FirstScreenHomePage from '@/components/screens/FirstScreenHomePage'
import SecondScreenHomePage from '@/components/screens/SecondScreenHomePage'
import ThirdScreenHomePage from '@/components/screens/ThirdScreenHomePage'

export default {
  name: 'AppHomePage',
  components: { FirstScreenHomePage, SecondScreenHomePage, ThirdScreenHomePage },
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

.screen-box {
  margin: 0 auto;
  padding: 0 10px;

  max-width: 1130px;
}

.button {
  padding: 15px 30px;

  white-space: nowrap;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #99862a;
}
</style>
