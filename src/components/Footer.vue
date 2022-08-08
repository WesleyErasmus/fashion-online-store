<template>
  <div id="footer" class="footer">
    <footer class="footer-wrapper">
      <header>
        <div>Subscribe to our BLOG</div>
        <div class="signup">
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div class="blogs"><button>SIGNUP</button></div>
      </header>
      <div class="footer-inner">
        <main>

          <div class="footer-links">
            <ul class="footer-links-container">
              <li class="link-heading">Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>

            <ul class="footer-links-container">
              <li class="link-heading">Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>

            <ul class="footer-links-container">
              <li class="link-heading">Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
            <section class="logo-voucher">
            <div class="logo">WEBSITE LOGO</div>
            <div class="voucher">Register for your Voucher</div>
          </section>
          </div>
        </main>
        <div class="sm-links">
          <a href=""><img src="" alt="" />ico</a>
          <a href=""><img src="" alt="" />ico</a>
          <a href=""><img src="" alt="" />ico</a>
          <a href=""><img src="" alt="" />ico</a>
          <a href=""><img src="" alt="" />ico</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #242626;
  color: #9d9d9d;
}
.footer-inner {
  display: block;
  margin: 0 auto;
  background: #2f3131;
}
header {
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  align-content: center;
  align-items: center;
}
.signup {
}
.blogs {
}
main {
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  background: #2f3131;
  padding: 2rem 0;

}
.logo-voucher {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
}
.logo {
   color: hsla(160, 100%, 37%, 1);
}
.voucher {
    padding-bottom: 5px;
    /* text-decoration: underline; */
    border-bottom: 1px solid #FFF;
}
.footer-links {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.footer-links-container {
  list-style-type: none;
  padding: 1rem;
}

li {
  margin: 0.25rem 0;
}
.link-heading {
  color: #fff;
}

.sm-links {
  background: #242626;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
a {
  padding: 1rem;
}
img {
}
</style>
