<template>
  <h1>Product View</h1>
  <div v-if="product">
    <h3>{{ product.title }}</h3>
    <h4>R{{ product.price }}</h4>
    <p>Id: {{ product.id }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      product: null,
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/" + this.id)
      .then((response) => {
        this.product = response.data;
        console.warn(response);
      });
  },
};
</script>

<style></style>
