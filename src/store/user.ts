import { defineStore } from "pinia";
import { postAction } from "@/request/index";
import type { LoginType } from "@/type/index";
export const useUserStore = defineStore("user", {
  state: () => ({
    userDate: {
      username: "",
      picHead: "",
    },
  }),
  getters: {
    getName: (state): string => state.userDate.username + "",
  },
  actions: {
    async login({ username, password }: LoginType) {
      // try {
      //   const res = await postAction("/login", {
      //     username,
      //     password,
      //   });
      //   this.userDate = res;
      // } catch {}
      // 调试
      this.userDate = {
        username: "石凯",
        picHead: "http",
      };
    },
  },
});
