<template>
  <li>
    <base-card>
      <header class="header card-header">
        <div class="row">
          <div class="col">
            <h2>{{ resource.title }}</h2>
          </div>
          <div class="col-auto">
            <base-button mode="danger" @click="deleteResource(resource.id)"
              >Delete</base-button
            >
          </div>
        </div>
      </header>
      <p>{{ resource.description }}</p>
      <a class="btn btn-primary" :href="resource.link"> Resources </a>
    </base-card>
  </li>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  inject: ["removeResource"],
  props: {
    resource: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteResource(id) {
      this.removeResource(id);
    },
  },
};
</script>
<style scoped>
li {
  margin-bottom: 10px;
}
</style>