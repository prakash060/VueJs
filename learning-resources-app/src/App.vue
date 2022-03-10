<template>
  <div class="container-fluid justify-content-center">
    <div class="row">
      <the-header title="This is my header"></the-header>
    </div>
    <div class="row">
      <div class="d-inline-block">
        <the-resources></the-resources>
      </div>
    </div>
  </div>
</template>

<script>
import TheResources from "./components/learning-resources/TheResources.vue";
export default {
  components: {
    TheResources,
  },
};
</script>
