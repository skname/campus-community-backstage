<template>
  <el-tabs
    v-model="selected"
    :closable="true"
    @tab-change="handleSelected"
    @tab-remove="handleRemove"
  >
    <el-tab-pane v-for="item in list" :label="item.name" :name="item.name">
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { HandleTabEvent } from "@/type/index";
defineProps<{
  list: Array<{ name: string; path: string }>;
  selected: string;
}>();

const emit = defineEmits<{
  (e: "changeTabName", name: string): void;
  (e: "tabNameRemove", name: string): void;
}>();
// 处理选择 tab
const handleSelected: HandleTabEvent = function (name) {
  emit("changeTabName", name);
};

// 处理删除 tab
const handleRemove: HandleTabEvent = function (name) {
  emit("tabNameRemove", name);
};
</script>

<style scoped>
.content {
  width: 100%;
  background: red;
  height: 100%;
}
</style>
