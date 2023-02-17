<template>
  <div class="container">
    <el-form v-model="articleFormData" width="100%">
      <el-form-item label="选择发布类型">
        <el-select v-model="articleFormData.cid">
          <el-option
            v-for="(item, index) in CidMap"
            :key="index"
            :label="item.label"
            :value="index"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="openID">
        <el-input v-model="articleFormData.openId"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="articleFormData.content"></el-input>
      </el-form-item>
      <UploadImage
        :limit="uploadProps.limit"
        :is-drag="uploadProps.isDrag"
        :auto-upload="uploadProps.autoUpload"
        :multipleble="uploadProps.multipleble"
        @handleChangeFile="handleChangeFile"
      ></UploadImage>
      <el-form-item>
        <el-button @click="handleUpload">发表</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { CidMap } from "@/view/manageArticle/allArticle/index";
import { ArticleFormType } from "./index";
import UploadImage from "@/component/upload/UploadImage.vue";
import type {
  UploadProps,
  UploadFileType,
  ComponentPropsType,
} from "@/component/upload/index";
import { useUploadByQi } from "@/hooks/index";
import { generateArticlePath } from "@/hooks/qiniuyun/path";
import { reactive } from "vue";
import { postAction } from "@/request";
import { isUndef, customMessage } from "@/utils/index";

const props = defineProps<{
  articleInfo: ArticleFormType;
  url: string;
}>();
// 初始化值
const articleFormData: ArticleFormType = reactive(props.articleInfo);
const formData: {
  file: UploadFileType[];
} = {
  file: [],
};
// 上传配置
const uploadProps: ComponentPropsType = {
  isDrag: true,
  limit: 9,
  autoUpload: false,
  multipleble: true,
};

const [uploadFile] = useUploadByQi();
// 上传
const handleUpload = async () => {
  if (
    (isUndef(articleFormData.content) && isUndef(formData.file)) ||
    isUndef(articleFormData.openId)
  ) {
    return customMessage("不能为空！", "warning");
  }
  if (!isUndef(formData.file)) {
    const path = generateArticlePath();
    const urls = await uploadFile(formData.file, path);
    articleFormData.picInfo = urls;
  }

  postAction(props.url, articleFormData);
};

// 重置
const handleReset = function () {
  articleFormData.cid = 0;
  articleFormData.content = "";
  articleFormData.openId = "";
};

// 监听文件改变
const handleChangeFile: UploadProps["handleFilesChange"] = (
  uploadFile,
  uploadFiles
) => {
  formData.file = uploadFiles;
};
</script>

<style scoped>
.el-form {
  width: 60%;
}
</style>
