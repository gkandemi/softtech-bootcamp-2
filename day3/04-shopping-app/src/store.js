import { createStore } from "vuex";

export default createStore({
  state: {
    userCart: []
  },
  mutations: {
    addNewItemToCart(state, cartItem) {
      state.userCart.push(cartItem);
    },
    removeItemFromCart(state, cartItem) {
      state.userCart = state.userCart.filter(c => c.id !== cartItem.id);
    }
  },
  getters: {
    _userCart: state => state.userCart || [],
    _userCartCount: state => state.userCart.length
  }
});
