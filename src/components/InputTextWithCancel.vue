<template>
  <div class="input-text-with-cancel">
    <label class="input-text-with-cancel__label">
      <input class="input-text-with-cancel__input" type="text" :value="value" :disabled="isDisabled" @change="handlerChangeInput" v-bind="$attrs" />
      <div class="input-text-with-cancel__control icon-control icon-wrap">
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
    value: { type: [String] },
    disabled: { type: [Boolean, Array] },
  },
  data() {
    return {
      backupValue: null,
    };
  },
  mounted() {
    this.backupValue = this.value;
  },
  computed: {
    isDisabled() {
      return Array.isArray(this.disabled) ? this.disabled.includes(this.value) : this.disabled;
    },
  },
  methods: {
    handlerChangeInput(event) {
      this.$emit("change", event.target.value);
    },
    handlerClickCancel() {
      if (this.value === this.backupValue) return;

      this.$emit("change", this.backupValue);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

// 1rem = 10px

.input-text-with-cancel {
  &__label {
    display: flex;
    align-items: center;

    border-bottom: 0.1rem solid lighten($color-text, 65);

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

