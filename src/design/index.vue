<template>
<div style="width=1000px;height=800px;">
    <el-container>
      <el-header>
        <tool-header></tool-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <tool-left-side></tool-left-side>
        </el-aside>
        <el-main><df-page></df-page></el-main>
        <tool-right-side></tool-right-side>
      </el-container>
    </el-container>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import DfPage from "./pages/index.vue"
import ToolHeader from "./components/tool-header/index.vue"
import ToolLeftSide from "./components/tool-left-side/index.vue"
import ToolRightSide from "./components/tool-right-side/index.vue"

export default defineComponent({
  name: 'Design',
  components:{DfPage,ToolHeader,ToolLeftSide,ToolRightSide},
  setup() {
  },
})
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>