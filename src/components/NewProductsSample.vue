<template>
   <!-- New Products -->
    <div class="new-products-container row">
      <h1>New Collection</h1>
      <span
        ><RouterLink :to="{ name: 'NewProducts' }" class="see-all">
          see all</RouterLink
        >
      </span>
      <div class="card-group">
        <div v-for="newin in products" :key="newin.id" class="card">
          <router-link :to="{ name: 'Product', params: { id: newin.id } }">
            <img
              :src="'https://source.unsplash.com/random/?fashion/' + newin.id"
              alt="Just Dropped"
              class="card-img-top"
            />
          </router-link>
          <div class="card-body"></div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
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
}
</script>

<style scoped>
/* Link colors [used to override universal links colors] */
a,
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
.card {
  padding: var(--card-padding);
}
.new-products-container {
  padding: 5rem 0;
}

</style>
