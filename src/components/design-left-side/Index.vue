<template>
  <div>
    <div class="design-left-side"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DesignLeftSide',
  setup() {
    return {};
  },
});
</script>

<style>
.design-left-side {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-right: 1px solid #e5e5e5;
}
</style>
