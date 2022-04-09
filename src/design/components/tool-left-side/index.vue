<template>
  <div class="tool-left-side" >
    <div class="tool-left-side-comps">
     1
    </div>
    <div class="tool-left-side-comp-tree" style="position: relative;">
      <div v-for="comp in compList" :key="comp.name" 
      style="margin-bottom: 1vh; height:40px;width:100px;outline:1px solid rebeccapurple"
      draggable="true" @mousedown="(e)=>onWidgetMouseDown(e,comp)"
      >
         {{comp.name}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useDragCompStore } from '../../store/compDrag'

const compList:any[]=reactive([]);
compList.push({name:"组件001"})
compList.push({name:"组件002"})
compList.push({name:"组件003"})
const onWidgetMouseDown=(e:MouseEvent,comp:any)=>{
  const {dragComp}:any=useDragCompStore()
  dragComp.name=comp.name
  dragComp.x=e.offsetX
  dragComp.y=e.offsetY
  //dragCompStore.setComp(comp)
  console.log(e.offsetX,e.offsetY)
  console.log(comp)
}
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