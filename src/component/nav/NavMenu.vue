<template>
  <div id="nav-component">
    <el-menu @select="handleSelected" active-text-color="#fff" background-color="#545c64" text-color="#fff">
      <el-row justify="center">
        <h2 class="title">{{ title }}</h2>
      </el-row>
      <el-menu-item v-for="(item, index) in navList" :data-index="index" :key="item.id" :index="item.id + ''">{{
          item.name
      }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import type { NavMenuList, HandleMenuEvent } from "@/type/index";
// 定义参数
const props = defineProps<{
  navList: NavMenuList[];
  title: string;
}>();
// 定义回调事件
const emit = defineEmits<{
  (e: "handleSelect", index: number): void;
}>();

const handleSelected: HandleMenuEvent = function (index) {
  emit("handleSelect", index);
};
</script>

<style scoped>
#nav-component {
  width: 100%;
  color: #fff;
}
</style>
