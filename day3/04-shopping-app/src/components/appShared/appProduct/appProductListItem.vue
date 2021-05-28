<template>
  <div class="mb-5 col-3">
    <div class="card" style="width: 18rem">
      <img :src="`https://picsum.photos/200?random=${item.id}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.productName }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <button v-if="addToCartAvailable" class="btn btn-primary" @click="addNewItemToCart(item)">Sepete Ekle</button>
          <button v-else class="btn btn-danger" @click="removeItemFromCart(item)">Sepetten Çıkar</button>
          <h5 class="card-title text-right">{{ itemPrice }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapMutations(["addNewItemToCart", "removeItemFromCart"])
  },
  computed: {
    itemPrice() {
      return `${parseFloat(this.item.price).toFixed(2)}₺`;
    },
    addToCartAvailable() {
      return this.$route.name === "Home";
    }
  }
};
</script>
