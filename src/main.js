import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import header from "./views/layout/header"
import left from "./views/layout/left"
import footer from "./views/layout/footer"
import TokenManager from "./utils/token_manager"
import Server from "@/utils/server";


console.log("in main.js")

// TokenManager.Clear();

var token = TokenManager.Get()
if(token && typeof(token) != "undefined" ){
    Server.setToken(token)
}
var myVue = createApp(App)

myVue.config.globalProperties.$TokenManager = TokenManager
myVue.config.globalProperties.$Server = Server

myVue.use(store).use(router).component("v-header",header).component("v-left",left).component("v-footer",footer).mount("#app");
