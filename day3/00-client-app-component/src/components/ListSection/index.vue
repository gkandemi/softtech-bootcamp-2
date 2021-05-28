<template>
  <div class="row mt-5">
    <div class="col-6 offset-3 border p-2">
      <table v-if="clientList.length > 0" class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ad Soyad</th>
            <th scope="col">Telefon</th>
            <th scope="col">E-mail</th>
            <th scope="col">Müşteri Tipi</th>
            <th scope="col">Açıklama</th>
            <th scope="col">Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="clientItem in clientList" :key="clientItem.id">
            <th scope="row">{{ clientItem.id }}</th>
            <td>{{ clientItem.clientName }}</td>
            <td>{{ clientItem.phone }}</td>
            <td>{{ clientItem.email }}</td>
            <td>{{ clientItem.clientType }}</td>
            <td>{{ clientItem.description }}</td>
            <td>
              <button @click="deleteItem(clientItem)" class="btn btn-sm btn-danger">Sil</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["clientList", "deleteItem"],
  mounted() {
    console.log("Gelen Client", this.clientList);
    // ..
  }
};
</script>
