<template>
  <!-- Page wrapper -->
  <div id="main" class="home-page">
    <!-- Home page header section -->
    <header class="home-page-header">
      <!-- Featured and New Page links -->
      <div class="page-links">
        <!-- New products page link -->
        <RouterLink :to="{ name: 'NewProducts' }">
          <div class="new-products-link">NEW PRODUCTS</div>
        </RouterLink>
        <!-- Featured products page link -->
        <RouterLink :to="{ name: 'FeaturedProducts' }">
          <div class="feature-products-link">FEATURED PRODUCTS</div>
        </RouterLink>
      </div>
    </header>
    <!-- End of home page header section -->

    <!-- Home page Image Banner -->
    <RouterLink :to="{ name: 'FeaturedProducts' }">
      <div class="img-banner-container">
        <img
          alt="Image Banner"
          class="img-banner"
          src="https://www.kappanordic.com/pub/media/wysiwyg/slider/topbanner_2222x831_Kappa_EN.jpg"
        />
      </div>
    </RouterLink>

    <!-- Featured Products -->
    <TrendingSample id="TrendingSample" />

    <!-- Home Page Blogs -->
    <HomePageBlogs id="HomePageBlogs" />

    <!-- New Products -->
    <NewProductsSample id="NewProductsSample" />
   
  </div>
  <!-- End of Home Page Wrapper -->
</template>

<script>
import TrendingSample from './TrendingSample.vue'
import NewProductsSample from './NewProductsSample.vue'
import HomePageBlogs from './HomePageBlogs.vue'
import axios from "axios";
export default {
  components: { TrendingSample, NewProductsSample, HomePageBlogs },
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
>

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
.home-page {
  padding: 1rem;
  max-width: 1280px;
  display: block;
  margin: 0 auto;
}
/* Top banner links container */
.page-links {
  height: 75px;
  background: #000;
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
}
.new-products-link,
.feature-products-link {
  color: #bbb;
  font-size: calc(16px + 0.4rem);
}
.new-products-link:hover,
.feature-products-link:hover {
  color: #fff;
  cursor: pointer;
}
/* End of top banner links container */

/* Home page top banner img */
.img-banner {
  width: 100%;
}

#TrendingSample { margin-top: 2rem; }

#HomePageBlogs { margin-top: 2rem; }


#NewProductsSample { margin-top: 2rem;}
</style>
