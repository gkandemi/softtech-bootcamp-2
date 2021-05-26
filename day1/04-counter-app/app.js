const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
      message: "inital text",
    };
  },
  methods: {
    getCounterResult() {
      console.log("Counter 1 Kontrolü Çalıştı");
      return this.counter <= 10 ? "KÜÇÜK" : "BÜYÜK";
    },
    getCounter2Result() {
      console.log("Counter 2 Kontrolü Çalıştı");
      return this.counter2 <= 10 ? "KÜÇÜK" : "BÜYÜK";
    },
  },
}).mount("#app");
