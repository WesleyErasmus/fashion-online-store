<template>
  <h1>This is the Shop page</h1>
  <div v-if="products.length">
    <div class="row product-layout" v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <div class="p-title">{{ product.title }}</div>
        <img
        class="product-img"
        :src="product.images"
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
    // axios.get("https://fakestoreapi.com/products").then((response) => {
    //   this.products = response.data;
    //   console.warn(response);
    // });
    axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
      this.products = response.data;
      console.warn(response);
    });
  },
};
</script>

<style scoped>
.product-img {
  width: 200px;
}
.product-layout {
  display: inline-flex;
}
.p-title {
  font-size: 12px;
}

</style>
