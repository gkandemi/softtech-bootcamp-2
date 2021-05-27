<template>
  <div class="col-6 offset-3 border p-2">
    <h1 class="text-danger">{{ text }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: "Red Component"
    }
  }
};
</script>
