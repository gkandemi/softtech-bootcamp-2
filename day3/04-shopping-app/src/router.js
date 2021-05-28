import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home")
  },
  {
    name: "Cart",
    path: "/cart",
    component: () => import("@/views/Cart")
  },
  {
    name: "ProductList",
    path: "/product-list",
    component: () => import("@/views/Admin/Product/ProductList")
  },
  {
    name: "NewProduct",
    path: "/new-product",
    component: () => import("@/views/Admin/Product/NewProduct")
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// router.beforeEach((to,from,next) => {
// })

export default router;
