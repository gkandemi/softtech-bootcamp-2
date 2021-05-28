import { createApp } from "vue";
import App from "./App.vue";
import appHeader from "@/components/appShared/appHeader";

import router from "./router";
import store from "./store";

import customAxios from "@/utils/customAxios";

const app = createApp(App);

app.config.globalProperties.$customAxios = customAxios;

app.use(router);
app.use(store);
app.component("appHeader", appHeader);
app.mount("#app");
