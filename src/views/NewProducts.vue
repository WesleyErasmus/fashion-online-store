<template>
  <div id="main" class="new-products-page">
    <h1>New Collection</h1>
    <div v-if="products.length" class="container">
      <div class="row">
        <div
          class="card col-lg-2 col-md-3 col-sm-4 col-6 mb-4 mt-4"
          v-for="product in newProducts"
          :key="product.id"
        >
          <router-link :to="{ name: 'Product', params: { id: product.id } }">
            <img
              :src="
                'https://source.unsplash.com/random/?fashion/id' + product.id
              "
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
           <p class="price">R{{ product.price }}</p>
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
import axios from "axios";
import Spinner from "/src/components/Spinner.vue"
export default {
    components: { Spinner },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    // Function for filtering out all products within a specific category
    newProducts() {
      return this.products.filter((product) => product.category.id == "4");
    },
  },
  mounted() {
    axios.get("https://api.escuelajs.co/api/v1/products/").then((response) => {
      this.products = response.data;
      console.warn(response);
    });
  },
};
</script>

<style></style>
