<template>
  <div id="main" class="cart-page">
    <h1 class="large-cart-heading">Your Cart: {{ cartLength }}</h1>
    <div class="cart-sum-total">
      <div class="count-text">
        Total items in cart: <span class="count-number">{{ cartLength }}</span>
      </div>
      <div class="total">
        Total: <span class="total-number">R{{ priceTotal }}</span>
      </div>
      <div class="checkout">

        <!-- <RouterLink :to="{ name: 'UserForm' }"> -->
        <button class="checkout-btn">Proceed To Checkout</button>
        <!-- </RouterLink> -->
      </div>
    </div>
    <div v-if="!shoppingCart.length">Your Cart is empty</div>

    <div v-if="shoppingCart.length" class="cart-items">
      <!-- parent -->
      <div class="cart-item" v-for="product in shoppingCart" :key="product.id">
        <!-- child-1 -->
        <div class="parent">
          <div class="img-box child-1">

            <img :src="
              'https://source.unsplash.com/random/?fashion/id' + product.id
            " class="card-img-top" alt="Product Image" />

          </div>

          <!-- child-2 -->
          <div class="child-2 col">
            <div class="card-title">{{ product.title }}</div>
            <div class="card-text">Product details</div>
            <div class="card-description">{{ product.description }}</div>
          </div>

          <!-- child-3 -->
          <div class="child-3 row">
            <div class="price">R{{ product.price }}</div>
          </div>
        </div>
        <div class="button-counter">
          <div>
            <button class="remove-from-cart" @click="removeFromCart(product)">
              <span class="cart-icon material-symbols-outlined">
                remove_shopping_cart </span>Remove
            </button>
          </div>
          <!-- <div>Qty</div> -->
        </div>
      </div>
    </div>

    <!-- End of Cart Page Wrapper -->
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

<style scoped>




.cart-sum-total {
  position: fixed;
  top: 9vw;
  right: 8vw;
  text-align: center;
  padding: 2rem;
  width: 25%;
  background: #fff;
  z-index: 2;
  border-radius: 3px;
}

.count-text {
  font-size: calc(11px + 0.35rem);
  font-weight: bold;
}

.count-number {
  color: var(--primary-color);
  font-weight: bold;
  font-size: calc(11px + 0.6em);
}

/* CART PRODUCT STYLING */

/* Main container */
.cart-items {
  width: 65%;
}

.card-title {
  font-size: calc(12px + 0.4rem);
}

.cart-item {
  margin: var(--card-padding);
  padding: var(--card-padding);
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}

.card-img-top {
  aspect-ratio: 3 / 4;
  width: 73px;
  border-radius: 2px;
}

.parent {
  display: flex;
}

.child-1 {
  margin: var(--card-padding);
  background: transparent;
}

.child-2 {
  padding: var(--card-padding);
}

.child-3 {
  padding: var(--card-padding);
}

.remove-from-cart {
  font-size: calc(10px + 0.3rem);
  font-weight: bold;
}

/* Google icon cart */
.material-symbols-outlined {
  font-size: 20px;
}

.cart-icon {
  position: relative;
  bottom: -4px;
  margin-right: 10px;
}

.button-counter {
  display: flex;
  justify-content: space-between;
}

.card-img-top:hover {
  transform: scale(1);
}

.card-description {
  font-size: calc(9px + 0.3rem);
}

button {
  background: var(--primary-color);
  color: #fff;
}

button:hover {
  opacity: 0.8;
}

.price {
  font-size: calc(10px + 0.5rem);
}

.total {
  font-size: calc(20px + 0.4rem);
  font-weight: bold;
}

.total-number {
  color: var(--primary-color);
}

.checkout-btn {
  width: 100%;
  margin-top: 1rem;
  padding: var(--card-padding);
  font-size: calc(12px + 0.4rem);
}

@media screen and (min-width: 1601px) and (max-width: 1920px) {}

@media screen and (min-width: 1281px) and (max-width: 1600px) {}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  .cart-sum-total {
    top: 15vw;
    right: 8vw;
    width: 30%;
  }

  .cart-items {
    width: 100%;
  }

  .card-img-top {
    aspect-ratio: 3 / 4;
    width: 95px;
    border-radius: 2px;
  }

  .card-description {
    font-size: calc(8px + 0.3rem);
  }

  .large-cart-heading {
    font-size: calc(20px + 0.3rem);
  }
}

@media screen and (min-width: 662px) and (max-width: 840px) {

  .cart-sum-total {
    position: relative;
    top: 0;
    width: 100%;
    right: 0;
  }
.cart-items {
  width: 100%;
}
  .card-img-top {
    aspect-ratio: 3 / 4;
    width: 100px;
    border-radius: 2px;
  }

  .card-description {
    font-size: calc(8px + 0.3rem);
  }

    .large-cart-heading {
      display: none;
    }
}

@media screen and (min-width: 481px) and (max-width: 661px) {

  .cart-sum-total {
    position: relative;
    top: 0;
    width: 100%;
    right: 0;
  }

  .card-img-top {
    aspect-ratio: 3 / 4;
    width: 100px;
    border-radius: 2px;
  }

  .cart-items {
    width: 100%;
  }

  .card-description {
    font-size: calc(8px + 0.3rem);
  }

  .large-cart-heading {
    display: none;
  }
}

@media screen and (min-width: 0) and (max-width: 480px) {
  .cart-sum-total {
      position: relative;
      top: 0;
      width: 100%;
      right: 0;
    }
  
    .card-img-top {
      aspect-ratio: 3 / 4;
      width: 100px;
      border-radius: 2px;
    }
  
    .cart-items {
      width: 100%;
    }
  
    .card-description {
      font-size: calc(8px + 0.2rem);
    }
  
    .large-cart-heading {
      display: none;
    }
}
</style>
