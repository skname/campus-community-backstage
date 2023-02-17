<template>
  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup lang="ts">
defineProps<{
  dialogImageUrl: string;
  dialogVisible: boolean;
}>();
</script>

<style scoped>
.dialog {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
</style>
