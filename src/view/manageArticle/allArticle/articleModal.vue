<template>
  <!-- 对话框 -->
  <el-dialog
    v-model="isShow"
    title="Warning"
    width="50%"
    @close="handleCloseModal"
    center
  >
    <template #header> <h3>文章内容修改</h3> </template>
    <el-form>
      <el-form-item>
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCloseModal">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 修改 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
defineProps<{
  isShow: boolean;
  handleCloseModal: () => void;
  handleConfirm: () => void;
}>();
</script>

<style scoped></style>
