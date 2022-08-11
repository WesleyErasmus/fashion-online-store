<template>
  <div id="main" class="product-page">
    <div class="product">
      <!-- Product template -->
      <div v-if="product">
        <h1 class="page-heading">Product Details</h1>

        <div class="product-container">
          <div class="product-image-container">
            <div class="img-box">
              <img
                class="product-img"
                :src="product.images + 0"
                alt="Product Image 1"
                @click="toggleModal1"
              />
            </div>
            <!-- <p>Image 1</p> -->
            <div class="img-box">
              <img
                class="product-img"
                :src="product.images + 1"
                alt="Product Image 2"
                @click="toggleModal2"
              />
            </div>
            <!-- <p>Image 2</p> -->

            <div class="img-box">
              <img
                class="product-img"
                :src="product.images + 2"
                alt="Product Image 3"
                @click="toggleModal3"
              />
            </div>
            <!-- <p>Image 3</p> -->
            <!-- =============================================== -->
            <teleport to="#modals" v-if="showModal1">
              <Modal @close="toggleModal1">
                <img
                  class="product-img-zoomed"
                  :src="product.images + 0"
                  alt="Product Image 1"
                />
                <template v-slot:links>
                  <button class="close-modal-button" @click="toggleModal1"><span class="material-symbols-outlined"> close </span></button>
                </template>
              </Modal>
            </teleport>
            <teleport to="#modals" v-if="showModal2">
              <Modal @close="toggleModal2">
                <img
                  class="product-img-zoomed"
                  :src="product.images + 1"
                  alt="Product Image 2"
                />
                <template v-slot:links>
                  <button class="close-modal-button" @click="toggleModal2"><span class="material-symbols-outlined"> close </span></button>
                </template>
              </Modal>
            </teleport>
            <teleport to="#modals" v-if="showModal3">
              <Modal @close="toggleModal3">
                <img
                  class="product-img-zoomed"
                  :src="product.images + 2"
                  alt="Product Image 3"
                />
                <template v-slot:links>
                  <button class="close-modal-button" @click="toggleModal3">
                    <span class="material-symbols-outlined"> close </span>
                  </button>
                </template>
              </Modal>
            </teleport>
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
import Modal from "/src/components/Modal.vue";
export default {
  components: { Spinner, QuantityCounter, Modal },
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      product: null,
      shoppingCart: [],
      showModal1: false,
      showModal2: false,
      showModal3: false,
    };
  },
  methods: {
    // Product Zoom Modal
    toggleModal1() {
      this.showModal1 = !this.showModal1;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
    toggleModal3() {
      this.showModal3 = !this.showModal3;
    },
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

</script>

<style scoped>
.product-page {
  box-shadow: var(--card-shadows);
}
.product {
  margin-top: 2vw;
  padding: 2rem;
}
.product-container {
  display: flex;
  flex-direction: row;
  padding: 2vw 0;
}
.product-image-container {
  position: relative;
  width: 590px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
}
.img-box {
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  margin: 0.2rem;
}
.product-img {
  width: 270px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.product-img:hover {
  position: relative;
  transform: scale(1.2);
  cursor: zoom-in;
}
.product-img-zoomed {
  width: 100%;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
.product-img-zoomed:hover {
  position: relative;
}
.close-modal-button {
  padding: 0;
  margin: 0;
  background: transparent;
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
  color: var(--primary-color);
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
  padding: 0.5rem;
  border-radius: 6px;
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
