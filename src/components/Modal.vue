<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="product-modal">
      <!-- Message that will display if slot is not passed in -->
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <slot>Content not found</slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.product-modal {
  display: block !important;
  width: 50vw;
  height: auto;
  padding: var(--card-padding);
  margin: 0 auto;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.backdrop {
  z-index: 9999;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.product-modal .actions {
  float: right;
  
}
</style>
