<template>
  <div class="quantity-toggle">
    <button @click="decrement()">&mdash;</button>
    <input type="text" :value="quantity" readonly />
    <button @click="increment()">&#xff0b;</button>
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
}

button {
  border: 1px solid #bdbdbd;
  border-radius: 0px;
  padding: 0.5rem;
  background: #f5f5f5;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
  margin: 0;
}
</style>
