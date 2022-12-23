import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Route from "./router/index";
import Pinia from "@/store/index";
const app = createApp(App);
app.use(Route);
app.use(Pinia);
app.mount("#app");
