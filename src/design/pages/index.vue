<template>
  <div class="df-page" @dragover="e=>e.preventDefault()"   @drop="onDrop">
        <vue-drag-resize class="df-page-comp-box" v-for="item in compList" :key="item.id" 
        :style="`transform:translate(${item.x}px,${item.y}px)`"
        :w="200" :h="200"
        draggable="true"
        >
           {{item.id}}
        </vue-drag-resize>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import VueDragResize from 'vue-drag-resize'
let i:number=0;
const compList:any[]=reactive([])
const onDrop=(e:DragEvent)=>{
  if (e instanceof DragEvent) {
    console.log("this is drag event");
  }
compList.push(
  {
  id:i++,
  x:e.offsetX,
  y:e.offsetY
  })
}
</script>
<style>
.df-page {
  background-color: aqua;
  height: 100%;
  position: relative;
}
.df-page-comp-box{
  position: absolute;
  height: 40px;
  outline:1px solid rebeccapurple
}
</style>