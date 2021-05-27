<template>
  <small class="mt-1 d-flex justify-content-end text-secondary"
    >{{ label }} <span class="fw-bold mx-1"> {{ value }} </span> adet kursunuz bulunmaktadır..</small
  >
</template>
<script>
export default {
  props: ["label", "value"]
};
</script>
