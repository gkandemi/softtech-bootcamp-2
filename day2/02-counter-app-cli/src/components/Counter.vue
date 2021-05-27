<template>
  <div class="mt-3 d-flex justify-content-center flex-column align-items-center">
    <h1>{{ counter }}</h1>
    <div>
      <button @click="increase" class="btn btn-sm btn-success me-1">+</button>
      <button @click="decrease" class="btn btn-sm btn-danger">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    }
  }
};
</script>
