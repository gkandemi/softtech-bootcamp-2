<template>
  <h1>HOME PAGE</h1>
  <button @click="aboutPage">About</button>
  <br />
  <input @keydown.enter="clientDetail" type="text" placeholder="clientID press [enter]" />
</template>
<script>
export default {
  methods: {
    aboutPage() {
      // this.$router.push("/about");
      this.$router.push({ name: "About" });
    },
    clientDetail(event) {
      //! Route Parametresi Göndermek..
      this.$router.push(`/client/${event.target.value}`);
      // this.$router.push({ name: "Client", params: { clientId: event.target.value } });

      //! Query Parametresi Göndermek..
      // this.$router.push(`/client/${event.target.value}?search=text&name=gokhan`);
      // this.$router.push({
      //   name: "Client",
      //   params: { clientId: event.target.value },
      //   query: {
      //     search: "text",
      //     name: "gokhan"
      //   }
      // });
    }
  }
};
</script>
