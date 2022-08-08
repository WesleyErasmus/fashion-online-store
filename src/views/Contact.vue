<template>
<div id="main" class="contact-page">
  <h1>Contact page</h1>
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13245.459500179782!2d18.41507526406142!3d-33.90600759267591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6750cf9544a5%3A0x1dc3860578bb4780!2sV%26A%20Waterfront!5e0!3m2!1sen!2sza!4v1659857418654!5m2!1sen!2sza"
      class="google-maps"
      width="500"
      height="350"
      style=" border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <UserForm/>
  </div>

  </div>
</template>

<script>
import UserForm from '/src/components/UserForm.vue'
export default {
  components: { UserForm },
  data() {
    return {
      userInformation: ""
    }
  },
};
</script>

<style scoped>
.google-maps{
  margin-bottom: 1rem;
}
</style>
