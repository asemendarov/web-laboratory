<template>
  <div class="app-search">
    <form class="from-container d-flex flex-auto" action="" method="get">
      <label class="input-wrapper position-relative d-flex flex-auto flex-center" for="search">
        <input class="input pd-0-12 flex-auto" type="text" name="search" placeholder="Search" />
        <img
          class="search-key-slash unselectable mn-0-12"
          src="@/assets/svg/search-key-slash.svg"
          alt="Search key slash"
        />
        <div class="box position-absolute scrollbox">
          <ul class="list-style-none">
            <li class="pd-15-20">QQQQQQQQQQQQQQ</li>
            <li class="pd-15-20">WWWWWWWWWWWWWW</li>
            <li class="pd-15-20">EEEEEEEEEEEEEE</li>
            <li class="pd-15-20">NNNNNNNNNNNNNN</li>
          </ul>
        </div>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  min-height: 28px;

  border-radius: 6px;
  background: rgb(13, 17, 23);
}

.input {
  -ms-grid-column-align: stretch;
  justify-self: stretch;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;

  border-radius: 6px;
}

.input:focus {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid rgba(253, 176, 33, 0.438);
  border-bottom: none;
}

.input:not(:focus) ~ .box {
  display: none;
}

.input-wrapper .box {
  top: 100%;
  left: 0;

  width: 100%;

  background: #0d1117;
  border: 1px solid rgba(253, 176, 33, 0.438);
  border-top: 1px solid #30363d;

  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  z-index: 999;

  max-height: 100px;
}
</style>
