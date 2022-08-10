<template>
  <div id="main" class="product-page">
    <div class="product">
      <!-- Product template -->
      <div v-if="product">
        <h1>Product Details</h1>

        <div class="product-container">
          <div class="product-image-container">
            <div class="img-box">
              <img
                class="product-img"
                :src="product.images"
                alt="Product Image"
              />
            </div>

            <!-- Product images array -->
            <div v-for="item in product.images" :key="item">
              <div class="img-box">
                <img class="product-img" :src="item" alt="Product Image" />
              </div>
            </div>
          </div>

          <!-- End of product images container -->
          <div class="product-details">
            <span class="product-id">Product id: {{ product.id }}</span>

            <h3 class="product-title">{{ product.title }}</h3>

            <div class="product-price">R{{ product.price }}</div>

            <div class="product-department">
              Department: {{ product.category.name }}
            </div>

            <div class="product-description-title">Product Details</div>

            <div class="product-description">{{ product.description }}</div>

            <!-- Add to cart button -->
            <button class="add-to-cart-btn" @click="addToCart(product)">
              <span class="material-symbols-outlined shopping-cart-icon">
                add_shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
          <!-- End of product details container -->
        </div>

        <!-- <QuantityCounter /> -->
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
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

    axios
      .get("https://api.escuelajs.co/api/v1/products/" + this.id)
      .then((response) => {
        this.product = response.data;
        console.warn(response);
      });
  },
};

// =================================================

// ==================================================
</script>

<style scoped>
.product-container {
  display: flex;
}
.product-image-container {
  position: relative;
  width: 590px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
}
.img-box {
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  margin: 0.2rem;
}
.product-img {
  width: 280px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.product-img:hover {
  z-index: 100;
  position: relative;
  transform: scale(1.2);
  cursor: zoom-in;
}
.product-details {
  width: 450px;
  margin-left: 2rem;
}
.product-title {
  padding: 0 0.5rem;
}
.product-price {
  font-size: calc(14px + 1rem);
  font-weight: bold;
  padding: 0 0.5rem;
}
.product-id {
  padding: 0 0.5rem;
  font-size: calc(8px + 0.2rem);
}
.product-department {
  color: grey;
  padding: 0 0.5rem;
}
.product-description-title {
  padding: 0 0.5rem;
  margin-top: 3rem;
  color: rgb(102, 102, 102);
  font-weight: 600;
  padding-bottom: 0.2rem;
}
.product-description {
  padding: 0 0.5rem;
  color: grey;
  font-size: calc(8px + 0.35rem);
}
.add-to-cart-btn {
  margin-top: 3rem;
  width: 100%;
  background: var(--primary-color);
  padding: .5rem;
  border-radius: 8px;
  /* font-weight: bold; */
  color: #fff;
  font-size: calc(13px + 0.5rem);
  box-shadow: var(--card-shadows);
}
.shopping-cart-icon {
  position: relative;
  bottom: -4px;
  margin-right: 13px;
}
.add-to-cart-btn:hover {
  opacity: 0.8;
}
.material-symbols-outlined {
  font-size: 28px;
}
</style>
