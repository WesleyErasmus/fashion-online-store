<template>
  <div id="main" class="contact-page">
    <!-- Contact page header -->
    <header class="contact-page-header">
      <div class="contact-page-header">
        <!-- Heading and subheading -->
        <h1>We'd Love To Hear From YOU</h1>
        <p class="centered-text-sm">Connect with us on social media</p>
        <!-- Social media links -->
      </div>
      <div class="sm-links">
        <a class="sm-icon-item" href=""><i class="fa-brands fa-facebook"></i></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-twitter"></i></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-instagram"></i></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-linkedin"></i></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-tiktok"></i></a>
        <a class="sm-icon-item" href=""><i class="fa-brands fa-youtube"></i></a>
      </div>
    </header>

    <!-- Contact page message-us form -->
    <ContactUsForm />

    <!-- Contact page Google Maps location -->
    <GoogleMaps />

    <!-- Company help services number and email address -->
    <div class="need-help-container">
      <h1 class="need-help">Need help?</h1>
      <p>

        Contact our help team on our WhatsApp line
        <a class="help-line-number">{{ HelpLine }}</a> or email <a href="mailto:help@atlas.co.za?">{{ HelpEmail }}</a>.
      </p>
    </div>
  </div>
</template>

<script>
import ContactUsForm from "./ContactUsForm.vue"
import GoogleMaps from "./GoogleMaps.vue"
export default {
  components: { ContactUsForm, GoogleMaps },
  name: "Contact",
  data() {
    return {
      // Help services info
      HelpLine: "084 123 1234",
      HelpEmail: "help@atlas.co.za",
    };
  },
};
</script>

<style scoped>
/* Page Header */
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

/* Social media header icons */
.centered-text-sm {
  text-align: center;
  color: var(--primary-color);
  font-size: calc(12px + 0.3rem);
  font-weight: bold;
}

/* Social media header icons */
.sm-links {
  padding-top: 1rem;
}

/* Social media header icons */
.sm-icon-item {
  padding: var(--card-padding);
}

/* Social media header icons styling */
.fa-brands {
  font-size: calc(12px + 0.5rem);
  color: #fff;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

/* Social media header icons hover */
.fa-brands:hover {
  transform: scale(1.5);
  background: none;
  color: var(--primary-color);
}

/* Help services container */
.need-help-container {
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 2vw;
  background: rgb(230, 230, 230);
}

</style>
