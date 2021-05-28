<template>
  <div v-if="clientLoaded">
    <h3>{{ client.clientName }}</h3>
    <p>{{ client.phone }}</p>
    <p>{{ client.email }}</p>
    <p>{{ client.description }}</p>
    <input type="checkbox" v-model="confirm" />
    Kullanıcı Onaylansın mı?
  </div>
  <!-- <pre> {{ $route.query.search }} </pre> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      client: null,
      confirm: false,
      user_permission: false
      // clientLoaded : false
    };
  },
  mounted() {
    // this.$router
    // this.$route
    // $route.params.clientId
    this.fetchClient();
  },
  methods: {
    fetchClient() {
      axios
        .get(`http://localhost:3000/customers/${this.$route.params.clientId}`)
        .then(client_response => {
          console.log("client_response :>> ", client_response);
          this.client = client_response.data;
        })
        .catch(() => {
          this.$router.go(-1);
        });
    }
  },
  computed: {
    clientLoaded() {
      return this.client !== null;
    }
  },
  beforeCreate() {
    console.log("BeforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforeRouteUpdate() {
    this.fetchClient();
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to, from);
    console.log("BeforeRouteEnter");
    next(vm => {
      console.log(vm.user_permission);
      if (vm.user_permission) {
        next(true);
      } else {
        next(false);
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.confirm) {
      next(true);
    } else {
      alert("Kullanıcı Onayını Yapmalısınız!!!");
      next(false);
    }
  }
};
</script>
