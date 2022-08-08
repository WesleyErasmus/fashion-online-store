<template>
  <div class="product">
    <h1>Product Details</h1>
    <div v-if="product">
      <h6>Product Id: {{ product.id }}</h6>
      <h3>{{ product.title }}</h3>
      <img
        class="product-img thumbnail"
        :src="product.images"
        alt="Product Image"
      />
      <div class="full-size-btn">
        <a href="#img1"> View Full Size Image </a>
      </div>
      <h5>{{ product.title }}</h5>
      <h6>R{{ product.price }}</h6>
      <QuantityCounter />
      <button @click="addToCart(product)">Add to Cart</button>

      <a href="#_">
        <img :src="product.image" alt="img2" id="img1" class="lightbox" />
      </a>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>

  <!-- =========================================== -->

  <!-- =========================================== -->
</template>

<script>
import axios from "axios";
import Spinner from "/src/components/Spinner.vue";
import QuantityCounter from "/src/components/QuantityCounter.vue";
export default {
  components: { Spinner, QuantityCounter },
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      product: null,
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

      // Adding products to the front of the watchList
      if (this.shoppingCart.unshift(product)) {
      }

      // Save to local storage function
      this.saveToLocalStorage();

      console.log(this.shoppingCart);
    },

    // Save products to watch-list function
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.shoppingCart);
      localStorage.setItem("shoppingCart", parsed);
    },
  },
  mounted() {
    // Display local storage products in the DOM
    if (localStorage.getItem("shoppingCart")) {
      try {
        this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      } catch (e) {
        localStorage.removeItem("shoppingCart");
      }
    }

    // axios
    //   .get("https://fakestoreapi.com/products/" + this.id)
    //   .then((response) => {
    //     this.product = response.data;
    //     console.warn(response);
    //   });
     axios.get("https://api.escuelajs.co/api/v1/products/" + this.id).then((response) => {
      this.product = response.data;
      console.warn(response);
    });
  },
};

// =================================================

// ==================================================
</script>

<style scoped>

.product-img {
  width: 250px;
}

.full-size-btn {
  padding: 15px 0;
}

/* // ========================================= */

.lightbox {
  display: none;
  position: fixed;
  z-index: 999;
  /* height: 95%; */
  text-align: center;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.lightbox img {
  max-width: 90%;
  max-height: 80%;
}

.lightbox:target {
  display: block;
  outline: none;
  border: 1px solid #000;
  padding-right: 30vw;
  padding-left: 30vw;
  margin: 10px 0 10px 0;
  width: 94%;
  background: #fff;
}
</style>
