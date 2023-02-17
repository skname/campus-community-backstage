<template>
  <div id="nav-component">
    <el-menu
      @select="handleSelected"
      active-text-color="#fff"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      :style="isCollapse ? '' : 'width:280px;'"
    >
      <el-row class="header" justify="center" align="middle">
        <h2 v-show="!isCollapse" class="title">{{ title }}</h2>
        <el-icon
          class="icon-collapse"
          :size="25"
          @click="handleCollapse"
          :style="isCollapse ? '' : 'right:10px;'"
          ><Fold
        /></el-icon>
      </el-row>
      <SubMenu v-for="item in navList" :data="item"> </SubMenu>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { NavMenuList, HandleMenuEvent } from "@/type/index";
import SubMenu from "./SubMenu.vue";
// 定义参数
defineProps<{
  navList: NavMenuList;
  title: string;
}>();

const isCollapse = ref(false);
const handleCollapse = function () {
  isCollapse.value = !isCollapse.value;
};

// 定义回调事件
const emit = defineEmits<{
  (e: "handleSelect", index: string): void;
}>();

const handleSelected: HandleMenuEvent = function (index) {
  emit("handleSelect", index);
};
</script>

<style scoped>
#nav-component {
  color: #fff;
  width: 100%;
}
.el-menu {
  height: 100%;
}
.header {
  width: 100%;
  position: relative;
  height: 60px;
}
.icon-collapse {
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
}
.icon-collapse:hover {
  background-color: rgba(240, 248, 255, 0.247);
}
</style>
