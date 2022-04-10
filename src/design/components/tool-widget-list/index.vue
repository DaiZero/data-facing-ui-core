<template>
    <div class="tool-left-side-comps">
      <div  v-for="comp in compList" :key="comp.name" 
      style="margin:0 0 20px 20px;height:40px;width:100px;outline:1px solid rebeccapurple;"
      draggable="true" @mousedown="(e)=>onWidgetMouseDown(e,comp)" >
         {{comp.name}}
      </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useDragCompStore } from '../../store/compDrag'

const compList:any[]=reactive([]);
compList.push({name:"组件001"})
compList.push({name:"组件002"})
compList.push({name:"组件3"})
const onWidgetMouseDown=(e:MouseEvent,comp:any)=>{
  const {dragComp}:any=useDragCompStore()
  dragComp.name=comp.name
  dragComp.x=e.offsetX
  dragComp.y=e.offsetY
}
</script>
<style>
.tool-left-side-comps{
  background-color: rgb(191, 219, 87);
}
</style>