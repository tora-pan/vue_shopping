import axios from "axios";

const state = {
  cartItems: [],
};

// MUTATIONS
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

// ACTIONS
const actions = {
  // get cart item
  getCartItems({ commit }) {
    axios.get("/api/cart").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  // add cart item
  addCartItem({ commit }, cartItem) {
    axios.post("/api/cart", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  // remove cart item
  removeCartItem({ commit }, cartItem) {
    axios.delete(`/api/cart/delete/${cartItem.id}`).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  // remove all cart items
  removeAllCartItems({ commit }) {
    axios.delete("/api/cart/delete/all").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
};

// GETTERS
const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  },
  cartQuantity: (state) => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
