<template>
<div>
<el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
          <design-header></design-header>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <design-left-side></design-left-side>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
      <df-page></df-page>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        <design-left-side></design-left-side>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import DfPage from "./pages/index.vue"
import DesignHeader from "./components/design-header/index.vue"
import DesignLeftSide from "./components/design-left-side/design-left-side.vue"
import DesignRightSide from "./components/design-right-side/design-right-side.vue"

export default defineComponent({
  name: 'Design',
  components:{DfPage,DesignHeader,DesignLeftSide,DesignRightSide},
  setup() {
  },
})
</script>
<style scoped>
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>