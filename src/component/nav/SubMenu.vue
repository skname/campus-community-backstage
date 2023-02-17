<template>
  <!-- 多级菜单 -->
  <el-sub-menu v-if="data.children" :index="data.index + ''">
    <template #title>
      <el-icon><component :is="data.icon" /></el-icon>
      <span>{{ data.name }}</span>
    </template>
    <el-menu-item
      v-for="item in data.children"
      :index="data.index + '-' + item.index"
    >
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-sub-menu>
  <!-- 单菜单 -->
  <el-menu-item v-else :index="data.index + ''">
    <el-icon><component :is="data.icon" /></el-icon>
    <span>{{ data.name }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { NavMenuItem } from "@/type/index";
defineProps<{
  data: NavMenuItem;
}>();
</script>

<style scoped></style>
