<template>
  <div>
    {{ bText }}
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import BaseComponent from './BaseComponent.vue';
export default defineComponent({
  name: 'DfButton',
  extends: BaseComponent,
  setup() {
    let bText = '222222';
    onMounted(() => {
      alert('222222222222')
    });

    return { bText };
  },
});
</script>
<style scoped></style>
