<template>
  <div class="aritcle-contain">
    <!-- 搜索 -->
    <el-col>
      <el-row>
        <el-col :span="3">
          <el-select placeholder="文章类型" v-model="searchData.cid">
            <el-option
              v-for="(item, index) in CidMap"
              :key="index"
              :label="item.label"
              :value="index"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-input
            label="openID"
            placeholder="openId"
            v-model="searchData.openId"
          ></el-input>
        </el-col>
        <el-col :span="3" :push="1">
          <el-input
            label="openID"
            placeholder="昵称"
            v-model="searchData.nickName"
          ></el-input>
        </el-col>
      </el-row>
      <!-- 按钮 -->
      <el-row>
        <el-button
          type="success"
          :icon="Search"
          plain
          v-buttonshake="handleSearch"
          >搜索</el-button
        >
      </el-row>
      <el-row>
        <el-button type="primary" @click="handleBatchDelete"
          >批量删除</el-button
        >
      </el-row>
    </el-col>
    <!-- table 展示 -->
    <el-row class="content-table">
      <el-table
        :data="listData"
        v-loading="isLoading"
        height="100%"
        style="width: 100%"
        @selection-change="handleMultipleTableSelectChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="aid" label="ID" width="55" />
        <el-table-column prop="openId" label="openId" width="300" />
        <el-table-column
          prop="cidMap"
          align="center"
          label="发布类型"
          width="100"
        />
        <el-table-column prop="nickName" label="昵称" width="180" />
        <el-table-column prop="headPic" label="头像" width="300" />
        <el-table-column prop="content" label="内容" width="300" />
        <el-table-column prop="picInfos" label="配图" width="500" />
        <el-table-column
          prop="click"
          label="点赞数"
          width="100"
          align="center"
        />
        <el-table-column
          prop="readNum"
          label="阅读量"
          align="center"
          width="180"
        />
        <el-table-column prop="createTime" label="发表时间" width="180" />
        <el-table-column label="操作" fixed="right" width="200" align="center">
          <template #default="socpe">
            <el-popconfirm
              title="确认删除?"
              confirm-button-type="danger"
              :data-article="listData"
              @confirm="() => handleDelete(socpe.row)"
            >
              <template #reference>
                <el-button type="danger" :icon="Delete" circle />
              </template>
            </el-popconfirm>
            <el-popconfirm title="确认添加精选?" @confirm="handleStart">
              <template #reference>
                <el-button type="warning" :icon="Star" circle />
              </template>
            </el-popconfirm>

            <el-button type="primary" :icon="Edit" circle @click="handleEdit" />
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 分页 -->
    <el-row class="bottom" justify="end">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        @current-change="handlePageChange"
      />
    </el-row>
    <ArticleModal
      :is-show="isShowDialog"
      :handle-close-modal="handleCloseModal"
      :handle-confirm="handleConfirm"
    />
  </div>
</template>
<script setup lang="ts">
import { Delete, Star, Edit, Search } from "@element-plus/icons-vue";
import { useTableInit, type TableStatusType } from "@/hooks/index";
import { toRefs } from "vue";
import ArticleModal from "./articleModal.vue";

import { url, searchData, CidMap } from "./index";
/*
私有 : url
公共 : 分页
*/

const {
  status,
  handlePageChange,
  handleDelete,
  handleEdit,
  handleSearch,
  handleCloseModal,
  handleConfirm,
  handleMultipleTableSelectChange,
  handleBatchDelete,
} = useTableInit("ArticleList", url, searchData);
const { listData, isLoading, total, pageSize, isShowDialog } =
  toRefs<TableStatusType>(status);
// 添加精选
const handleStart = function () {
  console.log("添加精选");
};
</script>

<style scoped>
.aritcle-contain {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.el-row {
  width: 100%;
  flex-wrap: nowrap;
}
.content-table {
  height: 60vh;
}

.bottom {
  margin-top: 20px;
  padding-right: 200px;
}
</style>
