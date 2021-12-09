<template>
    <div class="design-header">
        <div class="design-header__logo">
        </div>
        <div class="design-header__title">
            <h1>设计头啊啊啊啊</h1>
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