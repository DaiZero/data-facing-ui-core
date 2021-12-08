<template>
<div>
    <div class="design-header">
        <div class="design-header__logo">
            <img src="https://www.gravatar.com/avatar/{{ md5(config('app.email')) }}?s=200" alt="{{ config('app.name') }}" />
        </div>
        <div class="design-header__title">
            <h1>{{ config('app.name') }}</h1>
        </div>
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