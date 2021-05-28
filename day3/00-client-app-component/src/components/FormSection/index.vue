<template>
  <div class="row mt-5">
    <div class="col-6 offset-3 border p-2 ">
      <!-- <form action="" @submit="method"></form> -->
      <div class="mb-3">
        <label for="clientName" class="form-label">Müşteri Adı ve Soyadı</label>
        <input v-model="userData.clientName" type="text" class="form-control" id="clientName" placeholder="müşteri adı.." />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Telefon</label>
        <input v-model="userData.phone" type="text" class="form-control" id="phone" placeholder="telefon numarası.." />
      </div>

      <div class="mb-3">
        <label for="emailAddress" class="form-label">Email Adresi</label>
        <input v-model="userData.email" type="email" class="form-control" id="emailAddress" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="clientType" class="form-label">Müşteri Tipi</label>
        <select v-model="userData.clientType" class="form-select" id="clientType" aria-label="Müşteri Tipi">
          <option value="supplier">Satıcı</option>
          <option value="customer">Müşteri</option>
          <option value="both">İkisi Birden</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="descriptionArea" class="form-label">Açıklama</label>
        <textarea v-model="userData.description" class="form-control" id="descriptionArea" rows="3"></textarea>
      </div>
      <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-sm btn-secondary me-1">İptal</button>
        <button @click="onSave(userData)" class="btn btn-sm btn-primary">Kaydet</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onSave: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      userData: {
        clientName: null,
        phone: null,
        email: null,
        clientType: null,
        description: null
      }
    };
  }
};
</script>
