import { createStore } from "vuex";
const store = createStore({
  state: {
    productList: ["Elma", "Armut", "Kiraz"],
    user: {
      name: "gokhan",
      lname: "Kandemir",
      username: "gkandemir",
      password: "345345ß∂ƒsdf#45sdf##½½½"
    },
    theme: "dark"
  },
  mutations: {
    setTheme(state, theme) {
      // ...
      state.theme = theme;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }, user) {
      setTimeout(() => {
        commit("setUser", user);
      }, 2000);
    }
  },
  getters: {
    _productList(state) {
      return state.productList;
    },
    _currentUser(state) {
      //   const user = JSON.parse(JSON.stringify(state.user))
      const user = {
        ...state.user
      };
      delete user.password;
      return user;
    },
    _activeTheme: state => state.theme
  }
});

export default store;
