<template>
<div>
<div class="design-right-side">
<div class="design-right-side__header">
</div>
<div class="design-right-side__content">
  design-right-side__content
</div>
</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  name: 'DesignRightSide',
  setup() {
    return {};
  },
})
</script>

<style>
.design-right-side {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.design-right-side__header {
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.design-right-side .design-right-side-content {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
