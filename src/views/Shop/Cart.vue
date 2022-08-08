<template>
  <h1>This is the Cart page</h1>
  <div v-if="!shoppingCart.length">Your Cart is empty</div>
  <div v-for="product in shoppingCart" :key="product.id">
    <img class="product-img" :src="product.images" alt="Product Image" />
    <h3>{{ product.title }}</h3>
    <h4>R{{ product.price }}</h4>

    <button @click="removeFromCart(product)">Remove From Cart</button>
    <div>Total items in cart: {{ cartLength }}</div>
    <div>Total: R{{ priceTotal }}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppingCart: [],
      total: 0,
    };
  },
  computed: {
    cartLength() {
      return this.shoppingCart.length;
    },
    priceTotal() {
      let total = 0;
      this.shoppingCart.forEach((product, i) => {
        total += product.price;
      });
      return total;
    },
  },
  methods: {
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

      console.log(this.shoppingCart);
      console.log(this.shoppingCart.$price);
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
  },
};
</script>

<style>
.product-img {
  width: 150px;
}
</style>
