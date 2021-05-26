const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {},
  beforeCreate() {
    console.log("beforeCreate Çalıştı");
  },
  created() {
    console.log("created Çalıştı");
  },
  beforeMount() {
    console.log("beforeMount Çalıştı");
  },
  mounted() {
    console.log("mounted Çalıştı");
    setTimeout(() => {
      this.counter++;
    }, 2000);
  },
  beforeUpdate() {
    console.log("beforeUpdate Çalıştı");
  },
  updated() {
    console.log("updated Çalıştı");
  },
}).mount("#app");
