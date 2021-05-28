<template>
  <div class="container">
    <app-product-list :itemList="productList" />
  </div>
</template>
<script>
import appProductList from "@/components/appShared/appProduct/appProductList";
import { mapGetters } from "vuex";
export default {
  components: {
    appProductList
  },
  computed: {
    ...mapGetters({
      productList: "_userCart"
    })
  }
};
</script>
