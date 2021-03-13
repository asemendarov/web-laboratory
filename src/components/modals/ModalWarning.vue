<template>
  <div class="modal-warning">
    <modal-base v-if="isEnabled">
      <div slot="header">
        <h1 class="modal-warning__title" v-text="title"></h1>
      </div>
      <div slot="body">
        <p class="modal-warning__message" v-text="message"></p>
      </div>
      <div slot="footer">
        <div class="modal-warning__button-control">
          <button class="button modal-warning__button-ok" type="button" @click="emitEventOK">OK</button>
          <button class="button modal-warning__button-cancel" type="button" @click="emitEventCancel">Cancel</button>
        </div>
      </div>
    </modal-base>
  </div>
</template>

<script>
import ModalBase from "./ModalBase.vue";

export default {
  props: {
    // pass
  },
  components: { ModalBase },
  name: "ModalWarning",
  data() {
    return {
      isEnabled: false,
      title: "default title",
      message: "default message",
    };
  },
  methods: {
    show(title, message) {
      this.isEnabled = true;
      this.title = title;
      this.message = message;
    },

    close() {
      this.isEnabled = false;
    },

    emitEventOK() {
      this.close();
      this.$emit("ok");
    },

    emitEventCancel() {
      this.close();
      this.$emit("Cancel");
    },
  },
};
</script>

<style lang="scss">
.modal-warning {
  &__modal-warning__title {
    font-size: 2.4rem;
    margin-top: 0;
    color: $color-header;
  }

  &__button-control {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    align-items: center;
    justify-content: space-around;

    & .button {
      padding: 4px;
      flex: 0 1 100px;
      border: 1px solid black;
    }
  }
}
</style>