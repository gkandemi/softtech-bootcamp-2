<template>
  <div class="container">
    <app-product-list :itemList="filteredProductList" />
  </div>
</template>
<script>
import appProductList from "@/components/appShared/appProduct/appProductList";
import { mapGetters } from "vuex";
export default {
  components: {
    appProductList
  },
  data() {
    return {
      productList: []
    };
  },
  mounted() {
    this.$customAxios.get("/products").then(product_response => {
      this.productList = product_response.data || [];
    });
  },
  computed: {
    ...mapGetters(["_userCart"]),
    filteredProductList() {
      return this.productList.filter(p => !this._userCart.find(uc => uc.id === p.id));
    }
  }
};
</script>
