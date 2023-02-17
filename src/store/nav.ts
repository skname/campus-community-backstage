import { defineStore, Store } from "pinia";
import { useRouter } from "vue-router";
import { StorageSession } from "@/utils/index";
type navStoreType = {
  winList: {
    // 当前打开的所有窗口
    name: string;
    path: string;
  }[];
  currWin: string; // 当前打开的窗口名
  key: string[]; // 记录当前打开的窗口名字
};

export const useNavStore = defineStore<"nav", navStoreType>("nav", {
  state: () => {
    // 如果 session 中有数据，则从 session 中取出
    const initData: navStoreType = (StorageSession.getItem(
      "navStore"
    ) as navStoreType) || {
      winList: [],
      currWin: "",
      key: [],
    };

    return initData;
  },
});

// 更改 currWin 后自动跳转路由
export const useCurrWinWithRouter = (store: Store<"nav", navStoreType>) => {
  const Router = useRouter();
  // 每次更改  currWin 后跳转路由
  store.$subscribe((mutation, state) => {
    // @ts-ignore
    if (mutation.events.key == "currWin") {
      const currTab = state.currWin;
      const item = state.winList.find((item) => item.name === currTab);
      Router.replace(item!.path);
    }
  });
  // 每次修改完之后，将导航数据保存到 session 中
  store.$subscribe(() => {
    StorageSession.setItem("navStore", store.$state);
  });
};
