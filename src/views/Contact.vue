<template>
  <div id="main" class="contact-page">
    <!-- Contact page header -->
    <header class="contact-page-header">
      <div class="contact-page-header">
        <h1>We'd Love To Hear From YOU</h1>
      </div>
      <div class="sm-links">
        <a class="sm-icon-item" href=""
          ><i class="fa-brands fa-facebook"></i
        ></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-twitter"></i></a>
        <a class="sm-icon-item" href=""
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a class="sm-icon-item" href=""
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-tiktok"></i></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-youtube"></i></a>
      </div>
    </header>
    <!-- Contact page message-us form -->
    <div class="message-container">
      <div class="message-heading">Let's Start a Conversation</div>
      <p class="message-subheading">
        Send us a message and let us know about your experience
      </p>
      <div class="form-wrapper">
        <div class="message-form">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control user-input u"
              id="floatingInput"
              placeholder="Full Name"
            />
            <label for="floatingInput">Full Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control user-input e"
              id="floatingPassword"
              placeholder="Email address"
            />
            <label for="floatingPassword">Email address</label>
          </div>
        </div>
        <div class="form-floating">
          <textarea
            class="form-control message-text-area"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Message</label>
        </div>
        <div>
          <span
            ><button class="sbmt-btn" type="submit">Send Message</button></span
          >
        </div>
      </div>
    </div>
    <!-- Contact page Google Maps location -->

    <div class="map-container">
      <div class="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13245.459500179782!2d18.41507526406142!3d-33.90600759267591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6750cf9544a5%3A0x1dc3860578bb4780!2sV%26A%20Waterfront!5e0!3m2!1sen!2sza!4v1659857418654!5m2!1sen!2sza"
          class="google-maps"
          width="500"
          height="350"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="our-address">
        <h2>Where to find us</h2>
        <h4>Physical Address:</h4>
        <div>Atlas Retail Outlet | Making your Dream Look a Reality</div>
        <div>V&A Waterfront 19 Dock Rd, Cape Town, 8001</div>
        <div class="contact-number">Call us: 021 123 1234</div>
        <div class="email-us">Email us: info@axis.co.za</div>
      </div>
      <!-- <UserForm /> -->
    </div>

    <h1 class="need-help">Need help?</h1>
    <p>Contact our help team on our WhatsApp line
      <a href="">084 123 1234</a> or email <a href="">help@atlas.co.za</a>. </p>
  </div>
</template>

<script>
// import UserForm from "/src/components/UserForm.vue";
export default {
  // components: { UserForm },
  data() {
    return {
      userInformation: "",
    };
  },
};
</script>

<style scoped>
header {
  height: 17vw;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  box-shadow: var(--card-shadows);
}
.sm-links {
  padding-top: 1rem;
}

.sm-icon-item {
  padding: var(--card-padding);
}
.fa-brands {
  font-size: calc(12px + 0.5rem);
  color: #fff;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.fa-brands:hover {
  transform: scale(1.5);
  background: none;
  color: var(--primary-color);
}
/* Message us form */
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
}
.message-heading {
  font-size: calc(25px + 0.5rem);
}
.message-subheading {
  color: var(--primary-color);
  font-weight: bold;
}
.form-wrapper {
  padding: var(--card-padding);
}
.message-form {
  display: flex;
}
.user-input {
  width: 30vw;
}
/* Username input field */
.u {
  margin-right: 7px;
}
/* User email input field */
.e {
  margin-left: 7px;
}
.sbmt-btn {
  margin: 1rem 0;
  background: var(--primary-color);
  font-size: calc(14px + 0.3rem);
  color: #fff;
}
.google-map {
  border: 2px solid #bbb;
  box-shadow: var(--card-shadows);
}
.map-container {
  /* box-shadow: var(--card-shadows); */
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  display: flex;
  justify-content: center;
  padding: 3vw;
  margin-bottom: 5rem;
  background: ghostwhite;
}
.our-address {
  padding: 0 2vw;
}
</style>
