<template>
  <el-row>
    <el-col :span="4">
      <NavMenu :navList="navList" :title="title"></NavMenu>
    </el-col>
    <el-col :span="20">
      <el-row v-show="navTablist.length">
        <NavTab :list="navTablist"></NavTab>
      </el-row>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import NavMenu from "@component/nav/NavMenu.vue";
import NavTab from "@component/nav/NavTab.vue";
import type { NavMenuList, NavTabList } from "@type/index";
import { reactive } from "vue";

const title: string = "青年大学习";

const navList: NavMenuList[] = [
  {
    id: 0,
    name: "学习情况",
    url: "",
  },
  {
    id: 1,
    name: "二级导航栏",
    url: "",
  },
];

const navTablist: NavTabList[] = reactive([
  {
    id: 0,
    name: "shik",
  },
]);
</script>
<style scoped></style>
