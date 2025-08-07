import { initRouter} from "./router";

(function(){
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('.root') as HTMLElement;
  const body = document.querySelector('body');
  body!.style.margin = "0";
  body!.style.padding = "0";
  body!.style.boxSizing = "border-box";
  initRouter(root)
});
})()