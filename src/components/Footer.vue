<template>
  <div id="footer" class="footer">
    <footer class="footer-wrapper">
      <header>
        <div class="newsletter">Subscribe to our NEWSLETTER</div>
        <div class="signup">
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div class="blogs"><button>SIGNUP</button></div>
      </header>
      <div class="footer-inner">
        <main>
          <div class="footer-links">
            <ul class="footer-links-container">
              <li class="link-heading">Shipping</li>
              <li>Online Store</li>
              <li>Terms and conditions</li>
              <li>Campaigns and flash sales</li>
              <li>Retail outlets</li>
            </ul>

            <ul class="footer-links-container">
              <li class="link-heading">Partners</li>
              <li>Customer service</li>
              <li>Faqs</li>
              <li>Account details</li>
              <li>Returns policy</li>
            </ul>

            <ul class="footer-links-container">
              <li class="link-heading">Buy gift vouchers</li>
              <li>Orders</li>
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Credit</li>
            </ul>
            <section class="logo-voucher">
              <div class="logo">WEBSITE LOGO</div>
              <div class="voucher">Register for your Discount</div>
            </section>
          </div>
        </main>
        <div class="sm-links">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-tiktok"></i></a>
          <a href=""><i class="fa-brands fa-youtube"></i></a>
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

input {
  padding: 0.25rem;
  width: 20rem;
}

::placeholder {
  font-size: calc(8px + 0.3rem);
}
.signup {
}
.newsletter {
  padding-bottom: 5px;
  color: #c1c1c1;
  font-weight: 600;
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
  color: #c1c1c1;
  font-weight: 600;
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
  font-size: 12px;
}
li:hover { 
  opacity: .8;
  cursor: pointer;
  color: #fff;
}

.link-heading {
  color: #fff;
  font-size: 13px;
}

.sm-links {
  background: #242626;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
a {
  color: #fff;
  padding: 1rem;
}
a:hover {
  transform: scale(1.5);
  background: none;
    color: hsla(160, 100%, 37%, 1);
}
</style>
