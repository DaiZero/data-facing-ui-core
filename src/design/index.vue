<template>
<div>
    <el-container style="height: 100%;" >
      <el-header class="flex items-center shadow-md">
        <tool-header />
      </el-header>
      <el-container style="display:flex;height:calc(100vh - 40px);" >
        <el-aside style="width:200px;height:100%;" >
          <tool-widget-list style="height:50%" />
          <tool-widget-tree style="height:50%" />
        </el-aside>
        <el-main style="width:-webkit-fill-available;height:100%;">
          <df-page />
        </el-main>
        <el-aside style="width:200px;height:100%;" >
          <tool-widget-prop />
        </el-aside>
      </el-container>
    </el-container>
</div>
</template>
<script lang="ts" setup>
import DfPage from "./pages/index.vue"
import ToolHeader from "./components/tool-header/index.vue"
import ToolWidgetList from "./components/tool-widget-list/index.vue"
import ToolWidgetProp from "./components/tool-widget-prop/index.vue"
import ToolWidgetTree from "./components/tool-widget-tree/index.vue"
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  /* line-height: 60px; */
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}
</style>