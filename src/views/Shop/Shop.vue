<template>
  <h1>This is the Shop page</h1>
  <div v-if="products.length">
    <div v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <div>{{ product.title }}</div>
        <img
        class="product-img"
        :src="product.image"
        alt="Product Image"
      />
      </router-link>
    </div>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
// axios import
import axios from "axios";
// Components import
import Spinner from "/src/components/Spinner.vue"
export default {
  components: { Spinner },
  data() {
    return {
      products: [],
    };
  },
  methods: {
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.products = response.data;
      console.warn(response);
    });
  },
};
</script>

<style scoped>
.product-img {
  width: 150px;
}
</style>
