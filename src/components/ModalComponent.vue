<template>
  <div class="modal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <!-- /// -->
            <div class="modal-header">
              <slot name="header"> default header </slot>
            </div>
            <!-- /// -->
            <div class="modal-body">
              <slot name="body"> default body </slot>
            </div>
            <!-- /// -->
            <div class="modal-footer">
              <slot name="footer">
                <div class="default-button-control">
                  <button class="default-button default-button-ok" type="button" @click="emitResult('ok')">OK</button>
                  <button class="default-button default-button-cancel" type="button" @click="emitResult('cancel')">Cancel</button>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  data() {
    return {
      // pass
    };
  },
  methods: {
    emitResult(event) {
      this.$emit("result", event);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.modal {
  &-mask {
    display: table;

    width: 100%;
    height: 100%;

    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    max-width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px $color-shadow;
  }

  &-header h1 {
    font-size: 2.4rem;
    margin-top: 0;
    color: $color-header;
  }

  &-body {
    margin: 20px 0;
  }

  // button

  & .default-button-control {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    align-items: center;
    justify-content: space-around;

    & .default-button {
      padding: 4px;
      flex: 0 1 100px;
      border: 1px solid black;
    }
  }

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    opacity: 0;
  }
}
</style>