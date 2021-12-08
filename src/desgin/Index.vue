<template>
<div>
<el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
          <DesignHeader></DesignHeader>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <DesignLeftSide></DesignLeftSide>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
      <DfPage></DfPage>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        <DesignRightSide></DesignRightSide>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import DfPage from "./pages/index.vue"
import DesignRightSide from "./components/design-right-side/Index.vue"
import DesignLeftSide from "./components/design-left-side/Index.vue"
import DesignHeader from "./components/design/Index.vue"

export default defineComponent({
  name: 'Design',
  components:{DfPage,DesignRightSide,DesignLeftSide,DesignHeader},
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