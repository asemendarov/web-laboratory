<template>
  <div class="msg-exception">
    <div class="msg-body">
      <strong v-text="msg"></strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  name: "MsgException",
  data() {
    return {
      // pass
    };
  },
  computed: {
    // pass
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.msg-exception {
  & .msg-body {
    padding: 8px;
    border: 1px solid $color-exception;
  }
}
</style>