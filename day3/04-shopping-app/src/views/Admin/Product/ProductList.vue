<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6 offset-3 p-0">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>Ürün Listesi</span>
            <router-link class="btn btn-primary btn-sm" to="/new-product">Yeni Ürün Ekle</router-link>
          </div>
          <div class="card-body">
            <table v-if="productList.length > 0" class="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ürün Adı</th>
                  <th scope="col">Kategori</th>
                  <th scope="col">Fiyat</th>
                  <th scope="col">Açıklama</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="productItem in productList" :key="productItem.id">
                  <th scope="row">{{ productItem.id }}</th>
                  <td>{{ productItem.productName }}</td>
                  <td>{{ productItem.productCategory }}</td>
                  <td>{{ productItem.price }}</td>
                  <td>{{ productItem.description }}</td>
                  <td>
                    <button @click="deleteItem(productItem)" class="btn btn-sm btn-danger">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else class="alert alert-warning">
              Herhangi eklenmiş bir kayıt bulunmamaktadır.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.$customAxios.get("/products").then(product_response => {
        console.log("product_response :>> ", product_response);
        this.productList = product_response.data || [];
      });
    },
    deleteItem(item) {
      this.$customAxios.delete(`/products/${item.id}`).then(deleteResponse => {
        if (deleteResponse.status === 200) {
          // this.fetchProducts();
          this.productList = this.productList.filter(p => p.id !== item.id);
        }
      });
    }
  }
};
</script>
