import { App, DirectiveBinding } from "vue";
export const buttonshake = function (app: App) {
  app.directive("buttonshake", {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      let timer: any;
      el.addEventListener("click", () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          const { value } = binding;
          value();
          clearTimeout(timer);
          timer = null;
        }, 1000);
      });
    },
  });
};
