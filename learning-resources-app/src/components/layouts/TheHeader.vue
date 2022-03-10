<template>
  <div class="container-fluid">
    <div
      class="row border-bottom border-secondary shadow p-3 mb-5 rounded page-header"
    >
      <div class="text-center">
        <header>
          <h1>{{ title }}</h1>
        </header>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
<style scoped>
.page-header {
  background-color: rgb(25, 247, 247);
  border-bottom: 2rem rgb(146, 13, 13);
}
</style>