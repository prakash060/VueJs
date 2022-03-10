<template>
  <div class="base-card">
    <div class="card">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.base-card {
  position: relative;
  margin-left: 20%;
  padding: 0;
  width: 50%;
}
</style>