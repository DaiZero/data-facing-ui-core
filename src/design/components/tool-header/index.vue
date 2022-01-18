<template>
    <div class="design-header">
        <div class="design-header__logo">
        </div>
        <div class="design-header__title" style="display:flex">
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">导入</button>
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">导出</button>
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">编辑</button>
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">撤销</button>
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">预览</button>
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">保存</button>
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">另存</button>
        <button style="background-color: aquamarine;margin-left: 10px;margin-right: 10px;">发版</button>
        <button style="background-color:black;margin-left: 10px;margin-right: 10px;">退出</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
    name: 'DesignHeader',
    setup() {
        return {
        }
    }
})
</script>

<style>
.design-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: #fafafa;
}

.design-header__logo {
    display: flex;
    align-items: center;
}

.design-header__logo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>