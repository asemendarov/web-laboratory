<template>
  <div class="app-search">
    <form class="from-container" @submit.prevent="onSubmit">
      <label class="input-wrapper" for="q">
        <input class="input" type="search" v-model="search" name="q" placeholder="Search" />
        <img class="search-key-slash" src="@/assets/svg/search-key-slash.svg" alt="Search key slash" />
        <div class="box scrollbox">
          <ul>
            <li class="tw-px-5 tw-py-3" v-for="(to, idx) in toLost" :key="idx" v-text="to"></li>
          </ul>
        </div>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppSearch",
  data() {
    return {
      toLost: [
        "WWWWWWWWWWWWWW",
        "EEEEEEEEEEEEEE",
        "NNNNNNNNNNNNNN",
        "WWWWWWWWWWWWWW",
        "QQQQQQQQQQQQQQ",
        "EEEEEEEEEEEEEE",
        "WWWWWWWWWWWWWW",
        "EEEEEEEEEEEEEE",
        "NNNNNNNNNNNNNN",
        "WWWWWWWWWWWWWW",
        "QQQQQQQQQQQQQQ",
        "EEEEEEEEEEEEEE",
        "WWWWWWWWWWWWWW",
        "EEEEEEEEEEEEEE",
        "NNNNNNNNNNNNNN",
        "WWWWWWWWWWWWWW",
        "QQQQQQQQQQQQQQ",
        "EEEEEEEEEEEEEE",
      ],
      search: null,
    };
  },
  mounted() {
    this.routerControl(this.$route);
  },
  watch: {
    $route: "routerControl",
  },
  methods: {
    routerControl() {
      // console.log(to);
    },
    onSubmit() {
      this.$router.push({ name: "search", query: { q: this.search } });
    },
  },
};
</script>

<style lang="sass" scoped>
.search-key-slash
  @apply tw-mx-3

.from-container
  @apply tw-flex tw-flex-auto

.box
  @apply tw-absolute

.input
  &
    @apply tw-px-3 tw-flex-auto tw-justify-self-stretch tw-self-stretch tw-rounded-md

  &:focus
    @apply tw-rounded-bl-none tw-rounded-br-none tw-border tw-border-solid tw-border-very-dark-grayish-blue-700 tw-border-b-0

  &:not(:focus) ~ .box
    @apply tw-hidden

.input-wrapper
  @apply tw-relative tw-flex tw-flex-auto tw-items-center tw-justify-center
  @apply tw-min-h-6 tw-bg-very-dark-mostly-black-800 tw-rounded-md
  @apply md:tw-min-h-8

  & .box
    @apply tw-max-h-80 tw-z-50
    @apply tw-rounded-t-none tw-rounded-b-md
    @apply tw-top-full tw-left-0 tw-w-full tw-border tw-border-solid tw-border-very-dark-grayish-blue-700 tw-bg-very-dark-mostly-black-800
</style>
