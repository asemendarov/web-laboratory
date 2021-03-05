<template>
  <div class="app-search">
    <form class="from-container" action="" method="get">
      <label class="input-wrapper" for="search">
        <input class="input" type="text" name="search" placeholder="Search" />
        <img class="search-key-slash" src="@/assets/svg/search-key-slash.svg" alt="Search key slash" />
        <div class="box scrollbox">
          <ul>
            <li class="tw-px-5 tw-py-3">QQQQQQQQQQQQQQ</li>
            <li class="tw-px-5 tw-py-3">WWWWWWWWWWWWWW</li>
            <li class="tw-px-5 tw-py-3">EEEEEEEEEEEEEE</li>
            <li class="tw-px-5 tw-py-3">NNNNNNNNNNNNNN</li>
            <li class="tw-px-5 tw-py-3">WWWWWWWWWWWWWW</li>
            <li class="tw-px-5 tw-py-3">QQQQQQQQQQQQQQ</li>
            <li class="tw-px-5 tw-py-3">WWWWWWWWWWWWWW</li>
            <li class="tw-px-5 tw-py-3">EEEEEEEEEEEEEE</li>
            <li class="tw-px-5 tw-py-3">QQQQQQQQQQQQQQ</li>
            <li class="tw-px-5 tw-py-3">WWWWWWWWWWWWWW</li>
            <li class="tw-px-5 tw-py-3">EEEEEEEEEEEEEE</li>
            <li class="tw-px-5 tw-py-3">QQQQQQQQQQQQQQ</li>
            <li class="tw-px-5 tw-py-3">WWWWWWWWWWWWWW</li>
            <li class="tw-px-5 tw-py-3">EEEEEEEEEEEEEE</li>
            <li class="tw-px-5 tw-py-3">QQQQQQQQQQQQQQ</li>
            <li class="tw-px-5 tw-py-3">WWWWWWWWWWWWWW</li>
            <li class="tw-px-5 tw-py-3">EEEEEEEEEEEEEE</li>
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
      // pass
    };
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
