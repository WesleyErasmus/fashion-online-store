<template>
  <div class="form-component">
    <h1>Customer Sign Up Form</h1>
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
      <button class="submit-btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form-component {
  text-align: center;
}
.form-component h1 {
  margin-bottom: 3rem;
}
.user-form {
  max-width: 650px;
  display: block;
  margin: 0 auto;
}
.user-row {
  display: flex;
}
.submit-btn {
  margin: 1rem 0;
  padding: 1rem 0.75rem;
  width: 100%;
  color: hsla(160, 100%, 37%, 1);
  background: #e7e7e7;
  border: 1px solid #ced4da;
  transition: 0.4s;
}

.submit-btn:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
