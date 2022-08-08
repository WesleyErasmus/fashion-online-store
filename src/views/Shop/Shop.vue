<template>
  <div id="main" class="shop-page">
    <h1>This is the Shop page</h1>
    <div v-if="products.length" class="container">
      <!-- <div class="row product-layout" v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <div class="p-title">{{ product.title }}</div>
        <img
        class="product-img"
        :src="product.images"
        alt="Product Image"
      />
      </router-link>
    </div> -->
      <div class="row">
        <div
          class="card col-lg-2 col-md-3 col-sm-4 col-6 mb-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <router-link :to="{ name: 'Product', params: { id: product.id } }">
            <img
              :src="product.images"
              class="card-img-top"
              alt="Product Image"
            />
          </router-link>
          <div class="card-body">
            <h6 class="card-title">{{ product.title }}</h6>
            <p class="card-text">
              {{ product.category.name }}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">R{{ product.price }}</small>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// axios import
import axios from "axios";
// Components import
import Spinner from "/src/components/Spinner.vue";
export default {
  components: { Spinner },
  data() {
    return {
      products: [],
    };
  },
  methods: {},
  mounted() {
    // axios.get("https://fakestoreapi.com/products").then((response) => {
    //   this.products = response.data;
    //   console.warn(response);
    // });
    axios.get("https://api.escuelajs.co/api/v1/products/").then((response) => {
      this.products = response.data;
      console.warn(response);
    });
  },
};
</script>

<style scoped>
.shop-page h1 {
  margin-bottom: 3rem;
}



</style>
