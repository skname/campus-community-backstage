import { createApp } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import directive from "@/directive/index";
import "./style.css";
import App from "./App.vue";
import Route from "./router/index";
import Pinia from "@/store/index";
const app = createApp(App);

// 配置 element 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(directive);
app.use(Route);
app.use(Pinia);
app.mount("#app");
