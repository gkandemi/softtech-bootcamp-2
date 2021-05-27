<template>
  <div class="col-6 offset-3 border p-2">
    <h1 class="text-primary">Blue Component</h1>
    <input v-model="personalName" type="text" class="form-control" />
    {{ personalName }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      personalName: null
    };
  },
  mounted() {
    console.log("Blue Component Mounted Çalıştı...");
  },
  activated() {
    console.log("Blue Component activated Çalıştı...");
  },
  deactivated() {
    console.log("Blue Component deactivated Çalıştı...");
  }
};
</script>
