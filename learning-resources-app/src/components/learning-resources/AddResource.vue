<template>
  <base-dialog
    v-if="showErrorDialog"
    title="Input is invalid"
    @closeDialog="closeDialog"
  >
    <template #default>
      <p>
        Unfortunately at least one or more inputs are invalid.Please check all
        the input fields and make sure you enter at lease few characters in each
        of the input feilds.
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError" mode="primary">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input
          class="form-control"
          type="text"
          name="title"
          id="title"
          placeholder="Enter resource title"
          ref="titleInput"
        />
      </div>
      <div class="form-group">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          name="description"
          id="description"
          placeholder="Enter resource description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="link" class="form-label">Link</label>
        <input
          class="form-control"
          type="text"
          name="link"
          id="link"
          placeholder="Enter link for resources"
          ref="linkInput"
        />
      </div>
      <div class="form-group form-footer">
        <base-button mode="primary" @click="cancel">Cancel</base-button>
        <base-button type="submit" mode="primary">Save</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
import BaseDialog from "../ui/BaseDialog.vue";
export default {
  components: { BaseDialog, BaseButton },
  inject: ["addResource", "setSelectedTab"],
  data() {
    return {
      showErrorDialog: false,
    };
  },
  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const desc = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;

      const newResource = {
        title: title,
        description: desc,
        link: link,
      };

      const isValidForm = !this.validateForm(newResource);

      if (!isValidForm) {
        this.showErrorDialog = true;
        return;
      }
      this.addResource(newResource);
    },

    validateForm(resource) {
      return (
        resource.title.trim() === "" ||
        resource.description.trim() === "" ||
        resource.link.trim() === ""
      );
    },

    confirmError() {
      this.showErrorDialog = false;
    },

    cancel() {
      this.setSelectedTab("stored-resource");
    },

    closeDialog() {
      this.showErrorDialog = false;
    },
  },
};
</script>
<style scoped>
.form-footer > button {
  margin: 10px;
}
</style>