const app = Vue.createApp({
  data() {
    return {
      count: 10,
      message: "data üzerinden gelen bir mesaj bilgisidir...",
    };
  },
  methods: {
    formatter(textValue) {
      return `###-${textValue}-###`;
    },
    getMessage(textValue) {
      return this.formatter(textValue);
    },
  },
}).mount("#app");
