<template>
  <div id="nav-component">
    <el-menu default-active="0">
      <el-row justify="center"
        ><h2>{{ title }}</h2></el-row
      >
      <el-menu-item v-for="item in navList" :index="item.id + ''">{{
        item.name
      }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { type NavMenuList } from "@type/index";
const props = defineProps<{
  navList: NavMenuList[];
  title: string;
}>();
</script>

<style scoped>
#nav-component {
  width: 100%;
}
</style>
