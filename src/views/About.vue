<template>
  <div class="about">
    <header>
      <h6 class="centered-text">Meet</h6>
      <h1>The Team</h1>
    </header>

    <!-- Team members -->
    <div v-if="team.length" class="team-members row">
      <div
        class="card col-lg-2 col-md-3 col-sm-4 col-6 mb-4 mt-4"
        v-for="member in team"
        :key="member"
      >
        <img
          :src="member.portrait"
          class="card-img-top-meet-team"
          alt="Team Member"
        />
        <div class="card-body">
          <h5 class="card-title">{{ member.name }}</h5>
          <p class="card-text">
            {{ member.job_title }}
          </p>
          <p class="card-text">
            <small class="text-muted">{{ member.bio }}</small>
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "/src/components/Spinner.vue";
export default {
  components: { Spinner },
  data() {
    return {
      team: [],
    };
  },
  mounted() {
    // Fetch team members data from local json data file
    fetch("../src/data/team.json")
      .then((res) => res.json())
      .then((data) => (this.team = data.team))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
header {
  display: inline-block;
  max-width: auto;
}
.centered-text {
  text-align: center;
}
.card {
  width: 33.3333333%;
}
.card-img-top-meet-team {
  aspect-ratio: 2 / 3;
  border-radius: 0;
}
</style>
