import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Route from "./router/index";
const app = createApp(App);
app.use(Route);
app.mount("#app");
