<template>
  <div class="df-page" @dragover="e=>e.preventDefault()"   @drop="onDrop">
        <vue-drag-resize class="df-page-comp-box" v-for="item in compList" :key="item.id" 
        :style="`transform:translate(${item.x}px,${item.y}px)`"
        :w="100" :h="100"
        draggable="true"
        >
           {{item.id}}-{{item.name}}
        </vue-drag-resize>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import VueDragResize from 'vue-drag-resize'
import { useDragCompStore } from '../store/compDrag'

let i:number=0;
const compList:any[]=reactive([])
const onDrop=(e:DragEvent)=>{
const {dragComp}:any=useDragCompStore()
console.log(dragComp);
compList.push(
  {
  id:i++,
  name:dragComp.name,
  x:e.offsetX-dragComp.x,
  y:e.offsetY-dragComp.y,
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
  outline:1px solid rebeccapurple
}
</style>