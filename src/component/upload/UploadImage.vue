<template>
  <div>
    <el-upload
      :drag="isDrag"
      :limit="limit"
      list-type="picture-card"
      :auto-upload="autoUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-change="handleFilesChange"
      :multiple="multipleble"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
    <PreviewImage
      class="preview-image"
      :dialogImageUrl="dialogImageUrl"
      :dialogVisible="dialogVisible"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadProps, UploadFileType } from "./index";
import PreviewImage from "@/component/previewImage/PreviewImage.vue";

// 安装组件
defineProps<{
  isDrag: boolean;
  limit: number;
  autoUpload: boolean;
  multipleble: boolean;
}>();

const Emit = defineEmits<{
  (
    e: "handleChangeFile",
    uploadFile: UploadFileType,
    uploadFiles: UploadFileType[]
  ): void;
}>();

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

// 处理删除图片
const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  Emit("handleChangeFile", uploadFile, uploadFiles);
};
// 图片预览
const handlePictureCardPreview: UploadProps["onPreview"] = (
  uploadFile: UploadFileType
) => {
  dialogImageUrl.value = uploadFile.url;
  dialogVisible.value = true;
};
const handleFilesChange: UploadProps["handleFilesChange"] = function (
  uploadFile,
  uploadFiles
) {
  Emit("handleChangeFile", uploadFile, uploadFiles);
};
</script>

<style scoped>
.preview-image {
  width: 50vw;
  height: 60vh;
  overflow: hidden;
}
</style>
