import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import header from "./views/layout/header"
import left from "./views/layout/left"
import footer from "./views/layout/footer"

var myVue = createApp(App)
// myVue.config.globalProperties.$menuId = "0"

myVue.use(store).use(router).component("v-header",header).component("v-left",left).component("v-footer",footer).mount("#app");
