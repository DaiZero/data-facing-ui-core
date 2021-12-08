<template>
  <div class="input-group">
    <slot name="prepend"></slot>
    <slot name="append"></slot>
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DfBaseComponent } from '../../composables';

export default defineComponent({
  name: 'Input',
  setup() {
    return {} as DfBaseComponent;
  },
}) 
</script>

<style>

</style>