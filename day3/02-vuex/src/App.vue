<template>
  <div class="container">
    <h3 class="text-center">Vuex</h3>
    <ul class="list-group">
      <li v-for="(item, i) in $store.state.productList" :key="i" class="list-group-item">
        <strong>#{{ i }} </strong> - {{ item }}
      </li>
    </ul>
    <!-- {{ $store.state.theme }} -->
    {{ currentUser }}
    <h3>
      {{ myTheme }}
    </h3>

    <input type="text" class="form-control" v-model="activeTheme" />
    <button @click="setTheme(activeTheme)" class="mt-1 me-1  btn btn-sm btn-danger">Set Theme</button>
    <button @click="setUser({ name: 'handan', lname: 'kandemir' })" class="mt-1 me-1 btn btn-sm btn-primary">Set My User</button>
    <button @click="setMyUser" class="mt-1 btn btn-sm btn-success">Set My User</button>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  mounted() {
    console.log(this.$store);
    console.log(this.$store.getters._currentUser);
  },
  data() {
    return {
      activeTheme: null
    };
  },
  methods: {
    ...mapMutations(["setTheme"]),
    ...mapActions(["setUser"]),
    setMyUser() {
      this.$store.dispatch("setUser", { name: "defne", lname: "Kandemir" });
    }
    // setTheme() {
    //   // this.$store.state.theme = this.activeTheme;
    //   this.$store.commit("setTheme", this.activeTheme);
    // },
  },
  computed: {
    // ...mapGetters(["_currentUser", "_activeTheme"]),
    ...mapGetters({
      currentUser: "_currentUser",
      myTheme: "_activeTheme"
    })
  }
};
</script>
