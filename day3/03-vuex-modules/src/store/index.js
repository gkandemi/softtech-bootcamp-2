import { createStore } from "vuex";
import product from "./modules/product";
import customer from "./modules/customer";
const store = createStore({
  state: {
    globalState: "GLOBAL",
    product: true
  },
  mutations: {
    setUI() {},
    setProduct() {
      alert("Global");
    }
  },
  actions: {},
  getters: {},
  modules: {
    product,
    customer
  }
});

export default store;
