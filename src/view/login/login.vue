<template>
    <div class="back">
        <login-item class="login-box"></login-item>
    </div>
</template>

<script setup lang="ts">
import LoginItem from '@/component/login/LoginItem.vue'
</script>

<style scoped>
.back {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/img/login-bg.png');
}

.login-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>