<template>
  <div class="quantity-toggle">
    <button @click="decrement()"><span class="material-symbols-outlined">
remove
</span></button>
    <input type="text" :value="quantity" readonly />
    <button @click="increment()"><span class="material-symbols-outlined">
add
</span></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 1) {
        alert("Negative quantity not allowed");
      } else {
        this.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.quantity-toggle {
  display: flex;
}

input {
  border: none;
  color: #00BD7E;
  width: 2.5rem;
  text-align: center;
  line-height: 0;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  background: #fff;
}

button {
  border: 1px solid #bdbdbd;
  border-radius: 0px;
  padding: 0.5rem;
  background: #e7e7e7;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
  margin: 0;
  line-height: 0;
}
</style>
