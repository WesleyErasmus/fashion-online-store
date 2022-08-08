<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <div>Total items in cart: {{ cartLength }}</div>
    <div>Total: R{{ priceTotal }}</div>
    <div v-if="!shoppingCart.length">Your Cart is empty</div>
    <div v-if="shoppingCart.length" class="container">
      <div class="row">
        <div
          class="card col-lg-2 col-md-3 col-sm-4 col-6 mb-4 mt-4"
          v-for="product in shoppingCart"
          :key="product.id"
        >
          <img :src="product.images" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h6 class="card-title">{{ product.title }}</h6>
            <p class="card-text">
              {{ product.category.name }}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">R{{ product.price }}</small>
          </div>
          <button @click="removeFromCart(product)">Remove From Cart</button>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>

    <div class="checkout">
      <div>Total: R{{ priceTotal }}</div>
       <RouterLink :to="{ name: 'UserForm' }">
      <button class="checkout-btn">Proceed To Checkout</button>
      </RouterLink>
    </div>

    <!-- End of Cart Page Wrapper -->
  </div>
</template>

<script>
import Spinner from "/src/components/Spinner.vue";
export default {
  components: { Spinner },
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

<style scoped>
.checkout {
  float: right;
}
</style>
