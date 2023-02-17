<template>
  <div class="container">
    <ArticleForm
      class="article-form-component"
      :article-info="articleData"
      :url="url"
    ></ArticleForm>
  </div>
</template>

<script lang="ts" setup>
import ArticleForm from "./articleForm.vue";
import { ArticleFormType } from "./index";
const articleData: ArticleFormType = {
  cid: 0,
  openId: "",
  content: "",
  picInfo: "",
};
const url = "/article/upload";
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.article-form-component {
  width: 50%;
  overflow: hidden;
}
</style>
