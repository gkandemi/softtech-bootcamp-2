<template>
  <div>
    <app-header></app-header>
    <FormSection :onSave="onSave" />
    <ListSection v-if="clientListLoaded" :clientList="clientList" :deleteItem="deleteItem" />
  </div>
</template>
<script>
import axios from "axios";
import ListSection from "@/components/ListSection";
import FormSection from "@/components/FormSection";
export default {
  components: {
    ListSection,
    FormSection
  },
  data() {
    return {
      clientList: [],
      clientListLoaded: false
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/customers")
      .then(list_response => {
        this.clientList = list_response.data;
      })
      .finally(() => {
        this.clientListLoaded = true;
      });
  },
  methods: {
    onSave(userData) {
      axios.post("http://localhost:3000/customers", userData).then(save_response => {
        this.clientList.push(save_response.data);
      });
    },
    deleteItem(item) {
      axios.delete(`http://localhost:3000/customers/${item.id}`).then(() => {
        this.clientList = this.clientList.filter(c => c.id !== item.id);
      });
    }
  }
};
</script>
