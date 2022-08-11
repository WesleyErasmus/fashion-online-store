import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Shop from '../views/shop/Shop.vue'
import Product from "../views/shop/Product.vue";
import Cart from "../views/shop/Cart.vue";
import About from "../views/About.vue";
import Contact from "../views/contact/Contact.vue";
import FeaturedProducts from "../views/FeaturedProducts.vue";
import NewProducts from "../views/NewProducts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/featured",
      name: "FeaturedProducts",
      component: FeaturedProducts,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/shop/:id",
      name: "Product",
      component: Product,
      props: true,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/newproducts",
      name: "NewProducts",
      component: NewProducts,
    },
  ],
});

export default router
