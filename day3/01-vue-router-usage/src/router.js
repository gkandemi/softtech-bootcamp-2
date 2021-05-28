import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
const customRoutes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "About",
    path: "/about",
    // meta: {},
    component: About
  },
  {
    name: "Client",
    path: "/client/:clientId",
    component: () => import("@/views/Client")
  }
];

const router = createRouter({
  routes: customRoutes,
  history: createWebHashHistory()
  //   history: createWebHistory(),
});

export default router;
