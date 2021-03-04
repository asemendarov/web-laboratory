<template>
  <div class="app-search">
    <form class="from-container tw-flex tw-flex-auto" action="" method="get">
      <label class="input-wrapper tw-relative tw-flex tw-flex-auto tw-items-center tw-justify-center" for="search">
        <input class="input tw-px-3 tw-flex-auto" type="text" name="search" placeholder="Search" />
        <img class="search-key-slash tw-mx-3" src="@/assets/svg/search-key-slash.svg" alt="Search key slash" />
        <div class="box tw-absolute scrollbox">
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

<style scoped>
.input-wrapper {
  min-height: 28px;

  border-radius: 6px;
  background: var(--color-background-default);
}

.input {
  justify-self: stretch;
  align-self: stretch;

  border-radius: 6px;
}

.input:focus {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid var(--color-input-focus);
  border-bottom: none;
}

.input:not(:focus) ~ .box {
  display: none;
}

.input-wrapper .box {
  top: 100%;
  left: 0;

  width: 100%;

  background: var(--color-background-default);
  border: 1px solid var(--color-input-focus);
  border-top: 1px solid var(--color-scrollbar);

  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  z-index: 999;

  max-height: 400px;
}
</style>
