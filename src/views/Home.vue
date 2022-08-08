<template>
  <div class="home-page">
    <header class="home-page-header">
      <h1>Home Page</h1>
    </header>

    <!-- Home page Image Banner -->
    <div class="img-banner-container">
      <img
        alt="Image Banner"
        class="img-banner"
        src="https://assets.superbalistcdn.co.za/1250x/filters:quality(75):format(jpg)/cms/HEADER_bTnW5k8.jpg"
      />
    </div>

    <!-- Featured Products -->
    <RouterLink :to="{ name: 'FeaturedProducts' }">
    <div class="featured-products-container">
      <h1>Trending Items</h1>
      <div class="card-group">
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2760770/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2769323/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2773631/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2615216/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2773045/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
      </div>
    </div>
    </RouterLink>

    <!-- New Products -->
    <RouterLink :to="{ name: 'NewProducts' }">
    <div class="new-products-container">
      <h1>New In</h1>
      <div class="card-group">
        <div class="card">
          <img
           
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2690455/original.jpg"
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2748324/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2773092/original.jpg"
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2757959/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
        <div class="card">
          <img
            src="https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2756710/original.jpg"
           
            alt="Just Dropped"
          />
          <div class="card-body">
            <h6 class="card-title">Card title</h6>
          </div>
          <div class="card-footer">
            <small class="text-muted">#JustDropped</small>
          </div>
        </div>
      </div>
    </div>
    </RouterLink>
  </div>
  <!-- End of Home Page Wrapper -->
</template>

<script setup></script>

<style>
.home-page {
  padding: 1rem;
   max-width: 1280px;
}

.home-page h1 {
  margin-bottom: 3rem;
}

.home-page-header {
  padding: 5rem;
}

.img-banner {
  width: 100%;
  padding: 0 5rem;
}

.featured-products-container {
  padding: 5rem;
}
.new-products-container {
  padding: 5rem;
}
</style>
