<template>
  <button :class="['btn', ' btn-' + mode]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["mode"],
  data() {
    return {};
  },
};
</script>