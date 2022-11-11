<template>
  <el-tabs type="border-card" editable :stretch="true">
    <el-tab-pane v-for="item in list" :label="item.name"></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { type NavTabList } from "@type/index";
defineProps<{
  list: NavTabList[];
}>();
</script>

<style></style>
