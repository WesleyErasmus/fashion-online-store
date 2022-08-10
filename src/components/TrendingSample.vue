<template>
   <!-- Featured Products -->
    <div class="featured-products-container row">
      <h1>Trending Collection</h1>
      <span
        ><RouterLink :to="{ name: 'FeaturedProducts' }" class="see-all">
          see all</RouterLink
        >
      </span>
      <div class="card-group">
        <div v-for="featured in products" :key="featured.id" class="card">
          <router-link :to="{ name: 'Product', params: { id: featured.id } }">
            <div class="img-box">
            <img
              :src="
                'https://source.unsplash.com/random/?fashion/id' + featured.id
              "
              alt="Just Dropped"
              class="card-img-top"
            />
            </div>
          </router-link>
          <div class="card-body"></div>
          <div class="card-footer">
            <small class="text-muted">#Featured</small>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")
      .then((response) => {
        this.products = response.data;
        console.warn(response);
      });
  },
};
</script>

<style scoped>
.green {
  text-decoration: none;
  color: #000 !important;
  transition: 0.4s;
}
/* Link Hover color */
@media (hover: hover) {
  a:hover {
    color: #000;
  }
}
/* Feature and new products cards */
.see-all {
  color: var(--primary-color) !important;
}

.featured-products-container {
  padding: 5rem 0;
}
</style>