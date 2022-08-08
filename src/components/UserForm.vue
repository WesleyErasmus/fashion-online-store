<template>
  <form class="user-form">
    <div class="user-row">
      <div class="form-floating mb-3 col">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="First Name"
        />
        <label for="floatingInput">First Name</label>
      </div>
      <div class="form-floating mb-3 col">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Last Name"
        />
        <label for="floatingInput">Last Name</label>
      </div>
    </div>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
  </form>
</template>

<style scoped>
.user-form {
    max-width: 750px;
}
.user-row {
  display: flex;
}
#floatingInput label {
    font-size: 8px !important;
}
</style>
