<template>
  <div class="tool-left-side" >
    <div class="tool-left-side-comps">
     1
    </div>
    <div class="tool-left-side-comp-tree" style="position: relative;">
      <div style="position: absolute;height: 40px;outline:1px solid rebeccapurple"
      draggable="true"
      >
         qqqq222222
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 //import draggable from 'vuedraggable'
 //import VueDragResize from 'vue-drag-resize'

</script>
<style>
.tool-left-side {
  height: 100%;
}
.tool-left-side-comps{
  background-color: rgb(191, 219, 87);
  height: 50%;
}
.tool-left-side-comp-tree{
  background-color:rgb(90, 179, 208);
  height: 50%;
}
</style>