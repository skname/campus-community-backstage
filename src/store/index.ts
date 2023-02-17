import { createPinia } from "pinia";
interface PluginContext {
  store: Record<string, unknown>;
}

const Pinia = createPinia();
const Plugin1 = function ({ store }: PluginContext) {
  store.hello = "Hellow Pinia";
};

Pinia.use(Plugin1);
export default Pinia;
export * from "./user";
export * from "./nav";
