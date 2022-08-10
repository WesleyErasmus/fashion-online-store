<template>
  <div id="main" class="about">
    <!-- About company -->
    <div class="about-company">
      <h1 class="about-company-heading">Who We Are</h1>
      <p class="company-bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        aspernatur cumque maxime quibusdam amet repellendus consequuntur. Atque,
        ut velit quas incidunt aperiam repellendus expedita? Repellendus cumque
        itaque laudantium quod odio quidem suscipit, adipisci nobis tempore
        animi eveniet cum ipsam facere quis iure eos quisquam accusantium
        aliquid numquam enim sed fuga.
      </p>
      <p class="company-bio company-bio-end">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ut
        optio. Ullam deserunt suscipit nulla dolores tempore qui beatae
        perferendis molestias laudantium incidunt consequuntur tenetur sit
        debitis architecto optio in impedit quisquam quos, quae ducimus quas
        odio rem. Vel, alias!
      </p>
    </div>

    <!-- Team members -->
    <header class="centered-text meet-the-team">
      <h6>Meet</h6>
      <h1>The Team</h1>
    </header>
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

    <!-- Endorsements -->
    <div class="endorsements-container">
      <h1 class="centered-text">Endorsements</h1>

      <span class="material-symbols-outlined"> workspace_premium </span>

      <!-- <span class="material-symbols-outlined"> thumb_up_off </span> -->

      <!-- <span class="material-symbols-outlined verified-icon"> verified </span> -->
  <div class="customer-endorsements"></div>
      <p>
        "It's just amazing. Fashion has got everything I need. The service was
        excellent. I'd be lost without fashion." <span class="endorser"> - Aub P.</span>
      </p>

      <p>
        "It's just amazing. We can't understand how we've been living without
        you." <span class="endorser"> - Lurline C.</span>
      </p>

      <p>
        "I can't say enough about your store. It really saves me time and
        effort. Your store is exactly what I have been looking for. I love your
        store." <span class="endorser"> - Shanie E.</span>
      </p>

      <p>
        "Great job, I will definitely be ordering again! Your company is truly
        upstanding and is behind its products 100%." <span class="endorser"> - Ruby Z.</span>
      </p>
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
.about-company {
  padding: 5rem 0;
  text-align: center;
}
.about-company-heading {
  margin-bottom: 3rem;
}
.company-bio, .customer-endorsements {
  margin-bottom: 2rem;
  font-size: calc(14px + 0.3rem);
}
.company-bio-end {
   margin-bottom: 5rem;
}
.endorsements-container {
  text-align: center;
  padding: 5rem 0;
   font-size: calc(13px + 0.3rem);
    margin-bottom: 5rem;
}
.endorser {
  color: var(--primary-color);
  font-weight: bold;
  font-size: calc(12px + 0.3rem);
}
.centered-text {
  text-align: center;
}
.card-text {
  font-size: calc(10px + 0.4rem);
}
.verified-icon {
  position: relative;
  bottom: -4px;
  margin-right: 13px;
}
.material-symbols-outlined {
  font-size: 32px;
  margin-left: 9px;
}
/* Meet the team */
header {
  display: inline-block;
  max-width: auto;
}
.team-members {
  margin-bottom: 5rem;
}
.meet-the-team {
  display: block;
  margin: 0 auto;
}
.card {
  width: 33.3333333%;
}
.card-img-top-meet-team {
  aspect-ratio: 2 / 3;
  border-radius: 0;
}
</style>
