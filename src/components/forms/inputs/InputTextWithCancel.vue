<template>
  <div class="input-text-with-cancel">
    <label class="input-text-with-cancel__label">
      <input class="input-text-with-cancel__input" type="text" :value="value" @change="handlerChangeInput" v-bind="$attrs" />
      <div class="input-text-with-cancel__icon-control icon-wrap">
        <icon-x-circle class="icon-cancel" @click.native="handlerClickCancel" />
      </div>
    </label>
  </div>
</template>

<script>
import IconXCircle from "@/components/icons/IconXCircle";

export default {
  name: "InputTextWithCancel",
  components: { IconXCircle },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: { type: String },
  },
  data() {
    return {
      backupValue: null,
    };
  },
  mounted() {
    this.backupValue = this.value;
  },
  methods: {
    handlerChangeInput(event) {
      this.$emit("change", event.target.value);
    },
    handlerClickCancel() {
      this.$emit("change", this.backupValue);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.input-text-with-cancel {
  &__label {
    display: flex;
    align-items: center;

    border-bottom: 1px solid lighten($color-text, 65);

    &:focus-within {
      border-bottom-color: lighten($color-text, 20);
    }
  }

  &__input {
    cursor: pointer;
    width: 100%;

    &:disabled {
      background: inherit;

      & ~ .icon-wrap {
        display: none;
      }
    }

    & ~ .icon-wrap {
      cursor: pointer;

      color: lighten($color-text, 65);

      & .icon-cancel:hover {
        color: $color-exception;
      }
    }

    &:focus {
      cursor: text;

      & ~ .icon-wrap {
        color: lighten($color-text, 20);

        & .icon-cancel:hover {
          color: $color-exception;
        }
      }
    }
  }
}
</style>

