<template>
  <pre>
    {{ $store }}
    {{ $store.state.globalState }}
    {{ $store.state.product.productState }}
  </pre>
</template>
<script>
export default {
  mounted() {
    // setTimeout(() => {
    //   this.$store.commit("setProduct");
    // }, 1000);
    // setTimeout(() => {
    //   this.$store.commit("product/setProduct");
    // }, 2000);
  }
};
</script>
