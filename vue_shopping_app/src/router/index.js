import { createRouter, createWebHashHistory } from "vue-router";
import ProductList from "../components/product/ProductList.vue";
import CartList from "../components/cart/CartList.vue";

const routes = [
  {
    path: "/inventory",
    component: ProductList,
  },
  {
    path: "/cart",
    component: CartList,
  },
  {
    path: "/",
    redirect: "/inventory",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
