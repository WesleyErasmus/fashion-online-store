<template>
  <h1>This is the Shop page</h1>
  <div v-for="product in products" :key="product.id">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
      <div>{{ product.title }}</div>
    </router-link>
    <button @click="addToCart(product)" >Add to Cart</button>
  </div>
</template>

<script>
// axios import
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      shoppingCart: [],
    };
  },
  methods: {
    // Add products to shopping cart function
    addToCart(product) {
      // Ensure that the watch-list array is not empty
      if (!this.shoppingCart) {
        return;
      }

      // Prevents duplicate movies in the watchList
      if (this.shoppingCart.some((e) => e == product)) {
        return;
      }

      // Adding movies to the front of the watchList
      if (this.shoppingCart.unshift(product)) {
      }

      // Save to local storage function
      this.saveToLocalStorage();

      console.log(this.shoppingCart);
    },

    // Remove movies from watch-list function
    removeFromCart(product) {
      const remove = this.shoppingCart.filter((i) => i != product);

      this.shoppingCart = remove;

      this.saveToLocalStorage();
    },

    // Save movies to watch-list function
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.shoppingCart);
      localStorage.setItem("shoppingCart", parsed);
    },
  },
  mounted() {
    // Display local storage movies in the DOM
    if (localStorage.getItem("shoppingCart")) {
      try {
        this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      } catch (e) {
        localStorage.removeItem("shoppingCart");
      }
    }

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.products = response.data;
        console.warn(response);
      });
  },
};
</script>

<style></style>
