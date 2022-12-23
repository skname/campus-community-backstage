<template>
  <el-row class="container">
    <el-col :span="4" class="nav-left">
      <NavMenu :navList="navList" :title="title" @handleSelect="handleSelect"></NavMenu>
    </el-col>
    <el-col :span="19" class="content-right" :push="1">
      <el-row v-show="reactiveState.navTablist.length">
        <NavTab :list="reactiveState.navTablist" @changeTabName="changeTabName" @tabNameRemove="tabNameRemove"
          :selected="reactiveState.selectTabName"></NavTab>
      </el-row>
      <el-row>
        <el-col :span="24">
          <router-view v-slot="{ Component }">
            <keep-alive :max="10">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { onBeforeUnmount, Ref, ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { NavMenuList, HandleMenuEvent, HandleTabEvent } from "@/type/index";
import NavMenu from "@/component/nav/NavMenu.vue";
import NavTab from "@/component/nav/NavTab.vue";
import { navList, title } from "./index";
import { useSessionStorage } from "@/hooks/index";

interface State {
  selectTabName: string,
  navTablist: NavMenuList[]
}

const Router = useRouter();
const keys: number[] = []; // 防止重复添加窗口
// const selectTabName: Ref<string> = ref(navList[0].name);

const state: State = {
  selectTabName: navList[0].name,
  navTablist: []
};

let [newState, removeStorage] = useSessionStorage<State>('HomeStorage', state);

let reactiveState = reactive(newState);

// 处理窗口页面
const handleSelect: HandleMenuEvent = (index) => {
  const currTab: NavMenuList = navList[index];
  reactiveState.selectTabName = currTab.name;
  // 防止重复添加
  if (!keys.includes(index)) {
    keys.push(index);
    reactiveState.navTablist.push(currTab);
    Router.push(currTab.path);
    return;
  }
  Router.replace(currTab.path);
};

const changeTab = function (
  newName: string,
  callback: (item: NavMenuList, index?: number) => void
): void {
  reactiveState.navTablist.forEach((item, index) => {
    newName === item.name && callback(item, index);
  });
};

// 处理 tab 组件回调
const changeTabName: HandleTabEvent = function (name) {
  changeTab(name, ({ path }) => {
    Router.replace(path);
  });
};

const tabNameRemove: HandleTabEvent = function (name) {
  changeTab(name, (item, index) => {
    let targetIndex: number = index! - 1 < 0 ? index! + 1 : index! - 1;
    const targetTab: NavMenuList = navTablist[targetIndex];
    Router.replace(targetTab.path);
    navTablist.splice(index!, 1);
    keys.splice(index!, 1);
  });
};

</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: scroll-y;
}

.nav-left {
  height: 100%;
  background: #545c64;
}

.content-right,
.content {
  height: 100%;
}
</style>
