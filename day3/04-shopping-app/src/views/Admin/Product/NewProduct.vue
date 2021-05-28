<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6 offset-3 p-0 card">
        <div class="card-header">Yeni Ürün Ekle</div>
        <div class="card-body">
          <div class="mb-3">
            <label for="productName" class="form-label">Ürünün Adı</label>
            <input v-model="userData.productName" type="text" class="form-control" id="productName" placeholder="ürünün adını giriniz..." />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Ürünün Fiyatı</label>
            <input v-model="userData.price" type="text" class="form-control" id="price" placeholder="ürünün fiyatını giriniz..." />
          </div>
          <div class="mb-3">
            <label for="productCategory" class="form-label">Kategori</label>
            <select v-model="userData.productCategory" class="form-select" id="productCategory">
              <option v-for="item in product_category_options" :key="item.value" :value="item.value">{{ item.text }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="descriptionArea" class="form-label">Açıklama</label>
            <textarea v-model="userData.description" class="form-control" id="descriptionArea" rows="3"></textarea>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <button @click="$router.push({ name: 'ProductList' })" class="btn btn-sm btn-secondary me-1">İptal</button>
            <button @click="onSave" class="btn btn-sm btn-primary">Kaydet</button>
          </div>
        </div>
      </div>

      <pre>
        {{ userData }}
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product_category_options: [
        { value: "mobilya", text: "Mobilya" },
        { value: "elektronik", text: "Elektronik" },
        { value: "Teknoloji", text: "Teknoloji" }
      ],
      userData: {
        productName: "Product 1",
        price: 10,
        productCategory: "mobilya",
        description: "güzel bir mobilya"
      }
    };
  },
  methods: {
    onSave() {
      this.$customAxios.post("/products", this.userData).then(save_response => {
        if (save_response.status === 201) {
          this.$router.push("/product-list");
        }
      });
    }
  }
};
</script>
