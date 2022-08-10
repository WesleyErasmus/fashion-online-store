<template>
  <div id="footer" class="footer">
    <div class="sale-banner">SALE COMING SOON</div>
    <footer class="footer-wrapper">
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
            <section class="logo-discount-container">
              <div class="logo">WEBSITE LOGO</div>
            </section>
          </div>
          <header>
            <div class="newsletter">Become a MEMBER of our fashion community</div>
            <div class="signup-container">
              <!-- <div> -->
                <input
                  v-model="newSubscriber"
                  name="subscriber"
                  type="email"
                  placeholder="Enter your email address"
                />
              <!-- </div> -->
              <div class="blogs">
                <button class="signup-btn" @click="addSubscriber">SIGNUP</button>
              </div>
            </div>
          </header>
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
export default {
  data() {
    return {
      subscriberList: [],
      newSubscriber: null,
    };
  },
  mounted() {
    if (localStorage.getItem("subscriberList")) {
      try {
        this.subscriberList = JSON.parse(
          localStorage.getItem("subscriberList")
        );
      } catch (e) {
        localStorage.removeItem("subscriberList");
      }
    }
  },
  methods: {
    addSubscriber() {
      // ensure they actually typed something
      if (!this.newSubscriber) {
        return;
      }

      this.subscriberList.push(this.newSubscriber);
      this.newSubscriber = "";
      this.saveSubscriber();
    },
    saveSubscriber() {
      const parsed = JSON.stringify(this.subscriberList);
      localStorage.setItem("subscriberList", parsed);
    },
  },
};
</script>

<style scoped>
.sale-banner {
  height: 75px;
  background: #242626;
  color: #fff;
  font-size: calc(15px + 0.5rem);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 5vw;
}
footer {
  /* margin-top: 2rem; */
  /* background: #242626; */
  background: #2f3131;
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
  flex-direction: column;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  align-content: center;
  align-items: center;
}

input {
  padding: 0.25rem;
  width: 18rem;
}

::placeholder {
  font-size: calc(8px + 0.3rem);
}
.signup-container {
  display: flex;
  flex-direction: column;
}
.signup-btn {
border: none;
margin-top: 7px;
padding: 0.5rem 0.75rem;
border-radius: 2px;
font-size: calc(8px + 0.3rem);
float: right;
}
.newsletter {
  padding-bottom: 5px;
  /* color: #c1c1c1; */
  color: #fff;
  font-weight: 600;
}
main {
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  background: #2f3131;
  padding: 0 0 2rem 0;
}
.logo-discount-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
}
.logo {
  color: var(--primary-color);
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
  opacity: 0.8;
  cursor: pointer;
  color: #fff;
}

.link-heading {
  color: #fff;
  font-size: 13px;
}

.sm-links {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #242626;
}
a {
  color: #fff;
  padding: 1rem;
}
a:hover {
  transform: scale(1.5);
  background: none;
  color: var(--primary-color);
}
</style>
