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
            <img
              :src="
                'https://source.unsplash.com/random/?fashion/id' + featured.id
              "
              alt="Just Dropped"
              class="card-img-top"
            />
          </router-link>
          <div class="card-body"></div>
          <div class="card-footer">
            <small class="text-muted">#Featured</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Home Page Blogs -->
    <div class="blog-posts-container row">
      <!-- # Blog 1 -->
      <div class="col">
        <a href="https://www.vogue.com/tag/misc/winter-fashion" target="_blank">
          <div class="card text-bg-dark">
            <img
              src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title-1">#BLOG</h5>
              <h1 class="card-title-2">WINTER TRENDS</h1>
              <p class="blog-description">
                Everything you need to know and shop this winter, from current
                trends, styling tips, outfit ideas, and more.
              </p>
            </div>
          </div>
        </a>
      </div>

      <!-- # Blog 2 -->
      <div class="col">
        <a
          href="https://www.vogue.com/article/matching-summer-street-style"
          target="_blank"
        >
          <div class="card text-bg-dark">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title-1">#BLOG</h5>
              <h1 class="card-title-2">MATCHING OUTFITS</h1>
              <p class="blog-description">
                Good things come in twos—or threes, or fours. This is especially
                true when it comes to street style.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- End of blogs container -->

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
  </div>
  <!-- End of Home Page Wrapper -->
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
/* Feature and new products cards */
.see-all {
  color: var(--primary-color) !important;
}
.card {
  padding: var(--card-padding);
}
.featured-products-container {
  padding: 5rem 0;
}
.new-products-container {
  padding: 5rem 0;
}

/* Blogs */
/* Transparent black filter over blog images */
.card-img-overlay {
  background: rgba(0, 0, 0, 0.54);
  border-radius: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
/* Blog card images */
.card-img {
  border-radius: 0;
}
/* Card column containers */
.col {
  padding: var(--card-padding);
}
/* Card titles for blogs */
.card-title-1 {
  font-style: italic;
  color: var(--primary-color);
  font-weight: bold;
}
.card-title-2 {
  font-weight: bold;
}
/* End of card titles for blogs */
/* End of Blogs */

</style>
