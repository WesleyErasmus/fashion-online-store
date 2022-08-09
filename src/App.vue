<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header id="header" class="sticky-top">
    <!-- Router page links -->
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'Shop' }">Shop</RouterLink>
        <RouterLink :to="{ name: 'Cart' }">Cart</RouterLink>
        <RouterLink :to="{ name: 'About' }">About</RouterLink>
        <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
        <RouterLink :to="{ name: 'FeaturedProducts' }">Trending</RouterLink>
        <RouterLink :to="{ name: 'NewProducts' }">New In</RouterLink>
      </nav>
    </div>
    
    <!-- Redirect buttons -->
    <div class="redirect-btn-container">
      <nav>
         <a class="back-to-top-btn" href="#">Back to top</a>
        <a class="redirect-btn" @click="back">Back</a>
        <a class="redirect-btn" @click="forward">Forward</a>
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer/>
</template>

<script>
import Footer from '../src/components/Footer.vue'
export default {
  components: { Footer },
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style scoped>

header {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  padding: 1rem 0 2rem 0;
  text-align: center;
  background: #fff;
}
.back-to-top-btn {
  color: rgb(158, 158, 158);
}
nav a.router-link-exact-active {
  color: #000;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.redirect-btn-container {
  display: inline-block;
  margin-top: 2rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}
</style>
