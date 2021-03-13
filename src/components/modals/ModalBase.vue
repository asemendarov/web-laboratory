<template>
  <div class="modal-base">
    <div class="modal-base__mask">
      <div class="modal-base__wrapper">
        <div class="modal-base__container">
          <!-- /// -->
          <div class="modal-base__header">
            <slot name="header">default header</slot>
          </div>
          <!-- /// -->
          <div class="modal-base__body">
            <slot name="body">default body</slot>
          </div>
          <!-- /// -->
          <div class="modal-base__footer">
            <slot name="footer">default footer</slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBase",
  data() {
    return {
      // pass
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.modal-base {
  &__mask {
    display: table;

    width: 100%;
    height: 100%;

    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    max-width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px $color-shadow;
  }

  &__body {
    margin: 20px 0;
  }
}
</style>