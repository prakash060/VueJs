<template>
  <ul>
    <li>
      <base-card>
        <base-button
          mode="secondary inline-btn"
          @click="setSelectedTab('stored-resource')"
        >
          Stored Resources
        </base-button>
        <base-button
          mode="secondary inline-btn"
          @click="setSelectedTab('add-resource')"
        >
          Add Resources
        </base-button>
      </base-card>
    </li>
  </ul>
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResource from "./StoredResource.vue";
import LearningResource from "./LearningResource.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    StoredResource,
    LearningResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resource",
      storedResources: [
        {
          id: "1",
          title: "Vue Js",
          description: "Learning Vue Js is nice.!",
          link: "https://vuejs.org/",
        },
        {
          id: "2",
          title: "React Js",
          description: "Learning React Js is not yet started.!",
          link: "https://reactjs.org/",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      setSelectedTab: this.setSelectedTab,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resource) {
      const newResource = {
        id: new Date().toISOString(),
        title: resource.title,
        description: resource.description,
        link: resource.link,
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resource";
    },
    removeResource(id) {
      const index = this.storedResources.findIndex((x) => x.id === id);
      this.storedResources.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.inline-btn {
  margin-left: 10px;
}
ul {
  list-style: none;
}
</style>