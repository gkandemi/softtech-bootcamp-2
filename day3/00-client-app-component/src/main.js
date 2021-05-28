import { createApp } from "vue";
import App from "./App.vue";
import appHeader from "@/components/appShared/appHeader";

createApp(App)
  .component("appHeader", appHeader)
  .mount("#app");
