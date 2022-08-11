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
    <div class="message-container">
      <div class="message-heading">Let's Start a Conversation</div>
      <p class="message-subheading">
        Send us a message and let us know about your experience
      </p>
    

            <!-- User form wrapper -->
      <div class="form-wrapper">

<!-- Input field error messages -->
          <p v-show="errors.length">
          <ul>
            <li class="error-message" v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
          </p>

        <form @submit.prevent="saveMessage(e)" class="message-form">
        
          <div class="name-email-input-container">
          <div class="form-floating mb-3">
            <!-- Username input -->
            <input type="text" v-model="storedUserMessage.name" class="form-control user-input username-input"
              id="floatingInput name"
              name="name"
              placeholder="Full Name"
              />
            <label for="floatingInput">Full Name</label>
          </div>


          <!-- User email input -->
          <div class="form-floating mb-3">
            <input v-model="storedUserMessage.email" type="text" class="form-control user-input email-input"
              id="floatingPassword email"
              placeholder="Email address"
              name="email" />
            <label for="floatingPassword">Email address</label>
          </div>
          <!-- End of name an input container -->
        </div>


        <!-- User message us input -->
        <div class="form-floating">
          <textarea v-model="storedUserMessage.message" class="form-control message-text-area"
            placeholder="Leave a comment here"
            id="floatingTextarea message"
            name="message"></textarea>
          <label for="floatingTextarea">Message</label>
        </div>
        <div>
          <!-- Submit button -->
          <span><button class="sbmt-btn" type="submit">
              Send Message
          </button></span>
        </div>
        </form>
      </div>
    </div>

    <!-- Contact page Google Maps location -->
    <div class="map-container">
      <div class="google-map">
        <!-- Google maps plugin -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13245.459500179782!2d18.41507526406142!3d-33.90600759267591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6750cf9544a5%3A0x1dc3860578bb4780!2sV%26A%20Waterfront!5e0!3m2!1sen!2sza!4v1659857418654!5m2!1sen!2sza"
          class="google-maps" width="500" height="350" style="border: 0" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <!-- Company address information from data component-->
      <div class="our-address">
        <h1 class="our-address-title">Where to find us</h1>

        <h4 class="our-address-subtitle">Physical Address:</h4>

        <div class="our-address-company-name">
          {{ BuildingName }}
        </div>

        <div class="our-address-details">
          <span class="material-symbols-outlined primary-color"> location_on </span>
          {{ StreetAddress }}
        </div>

        <div class="our-address-contact-number">
          <span class="material-symbols-outlined primary-color"> call </span>Call us: 
          <span>{{ ContactNumber }}</span>
        </div>

        <div class="our-address-email-address">
          <span class="material-symbols-outlined primary-color"> mail </span>Email us: 
          <a href="mailto:help@atlas.co.za?">{{ EmailAddress }}</a>
        </div>
      </div>
    </div>
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
export default {
  name: "Contact",
  data() {
    return {
      // User message info
      customerMessages: [],

      // User info and message object class
      storedUserMessage: {
        name: null,
        email: null,
        message: null,
      },

      // Message form input field error messages
      errors: [],

      // Company address details
      BuildingName: "Atlas Online Fashion | Create Your Look",
      StreetAddress: "V&A Waterfront 19 Dock Rd, Cape Town, 8001",
      ContactNumber: "021 123 1234",
      EmailAddress: "info@atlas.co.za",

      // Help services info
      HelpLine: "084 123 1234",
      HelpEmail: "help@atlas.co.za",
    };
  },
  mounted() {
    if (localStorage.getItem("customerMessages")) {
      try {
        this.customerMessages = JSON.parse(
          localStorage.getItem("customerMessages")
        );
      } catch (e) {
        localStorage.removeItem("customerMessages");
      }
    }
  },
  methods: {
    validEmail() {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.storedUserMessage.email);
    },

    // Saves customer messages from form inputs
    saveMessage(e) {
      // ensure they actually typed something
      if (!this.storedUserMessage) {
        return;
      }

      // Form validations

      // Empty error message array
      this.errors = [];
       console.log(this.errors);

      // Name input field validation
      if (!this.storedUserMessage.name) {
        this.errors.push("Please enter your full name");
        return;
      }

      // email input field validation
      if (!this.storedUserMessage.email) {
        this.errors.push("Please enter your email address");
        return;
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Please enter a valid email address (e.g. johndoe@mail.com)");
        return;
      }

      // Message input field validation
      if (!this.storedUserMessage.message) {
        this.errors.push("Please fill in the message field");
        return;
      }


      // Push the storedUserMessage object class to local storage
      this.customerMessages.push(this.storedUserMessage);
      this.saveSubscriber();

      // Clears input fields after submit
      this.storedUserMessage.name = null;
      this.storedUserMessage.email = null;
      this.storedUserMessage.message = null;

      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
    saveSubscriber() {
      const parsed = JSON.stringify(this.customerMessages);
      localStorage.setItem("customerMessages", parsed);
    },
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

/* Message us form */
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  background: rgb(230, 230, 230);
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: var(--card-padding);
  background: #2f3131;
}

.message-heading {
  font-size: calc(25px + 0.5rem);
  color: #fff;
  color: var(--secondary-grey);
}

.message-subheading {
  color: var(--primary-color);
  font-weight: bold;
  font-size: calc(12px + 0.3rem);
}

/* Message us form wrapper */
.error-message {
  color: red;
  list-style-type: none;
}
.form-wrapper {
  padding: var(--card-padding);
}

.name-email-input-container {
  display: flex;
}
/* Username input field */
.username-input {
  margin-right: 7px;
}

/* User email input field */
.email-input {
  margin-left: 7px;
}
/* User message input field */
.message-text-area {
}
/* Message us form submit button */
.sbmt-btn {
  margin: 1rem 0;
  background: var(--primary-color);
  font-size: calc(14px + 0.3rem);
  color: #fff;
}

/* Company Address section */
/* Google maps plugin container */
.map-container {
  background: rgb(230, 230, 230);
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  display: flex;
  justify-content: center;
  padding: 3vw;
  margin-bottom: 5rem;
}

/* Google Maps plugin */
.google-map {
  border: 2px solid #bbb;
  box-shadow: var(--card-shadows);
}

/* Company address details */
.our-address {
  padding: 0 2vw;
}

.our-address-title,
.our-address-subtitle,
.our-address-company-name,
.our-address-details,
.our-address-contact-number,
.our-address-email-address {
  padding: 0 0 0.4vw 0.4vw;
  color: rgb(98, 98, 98);
}

.our-address-title {
  color: #000;
}

.our-address-subtitle {
  padding-top: 2vw;
}

.our-address-company-name {
  font-size: calc(11px + 0.35rem);
  color: #000;
  font-weight: bold;
}

/* Google fonts icons */
.material-symbols-outlined {
  margin-right: 6px;
  position: relative;
  bottom: -5px;
}

/* Help services container */
.need-help-container {
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 2vw;
  background: rgb(230, 230, 230);
}

.help-line-number, .primary-color {
  color: var(--primary-color);
}
</style>
