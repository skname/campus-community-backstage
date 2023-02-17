<template>
  <el-row class="container">
    <div class="nav-left">
      <NavMenu
        class="nav-menu"
        :navList="navList"
        :title="title"
        @handleSelect="handleSelect"
      ></NavMenu>
    </div>
    <div class="content-right">
      <!-- 用户信息展示栏 、注销等 -->
      <el-row class="header"></el-row>
      <el-row v-show="winList.length">
        <NavTab
          :list="winList"
          @changeTabName="changeTabName"
          @tabNameRemove="tabNameRemove"
          :selected="currWin"
        ></NavTab>
      </el-row>
      <el-row class="viewWindow">
        <router-view v-slot="{ Component }">
          <keep-alive :max="10">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-row>
    </div>
  </el-row>
</template>
<script setup lang="ts">
import { NavMenuItem, HandleMenuEvent, HandleTabEvent } from "@/type/index";
import NavMenu from "@/component/nav/NavMenu.vue";
import NavTab from "@/component/nav/NavTab.vue";
import { navList, title } from "./index";
import { useNavStore, useCurrWinWithRouter } from "@/store/index";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const NavStore = useNavStore();
const Router = useRouter();
useCurrWinWithRouter(NavStore);

const { winList, currWin, key } = storeToRefs(NavStore);

// 处理导航选择
const handleSelect: HandleMenuEvent = (index) => {
  let currTab: NavMenuItem;
  if (index.includes("-")) {
    const [start, end] = index.split("-");
    currTab = navList[Number(start) - 1].children![Number(end) - 1]!;
  } else {
    currTab = navList[Number(index) - 1];
  }
  // 防止重复添加
  if (!key.value.includes(currTab.name)) {
    key.value.push(currTab.name);
    winList.value.push({
      name: currTab.name,
      path: currTab.path!,
    });
  }
  // 修改当前展示窗口
  currWin.value = currTab.name;
};

// 处理 tab 组件修改回调
const changeTabName: HandleTabEvent = function (winName) {
  currWin.value = winName;
};

const handleWinRemove = (nameClose: string, index: number) => {
  if (index == 0 && currWin.value == nameClose) {
    key.value.shift();
    winList.value.shift();
    currWin.value = winList.value[0].name;
    return;
  }
  key.value.splice(index, 1);
  winList.value.splice(index, 1);
  currWin.value == nameClose && (currWin.value = key.value[index - 1]);
};

const tabNameRemove: HandleTabEvent = function (name) {
  // 删除导航栏
  const len = winList.value.length;
  if (len == 1) {
    winList.value = [];
    key.value = [];
    return Router.replace("/");
  }
  winList.value.forEach((item, index) => {
    if (item.name === name) {
      handleWinRemove(name, index);
    }
  });
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.container .content-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.el-col,
.nav-menu {
  height: 100%;
  width: 100%;
}
.header {
  flex-shrink: 0;
  width: 100%;
  height: 50px;
  background-color: beige;
}
/* 显示窗口 */
.viewWindow {
  flex: 1;
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
}
</style>
