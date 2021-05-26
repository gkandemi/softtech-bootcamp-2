const app = Vue.createApp({
  data() {
    return {
      // counter: 0,
      // boxClasses: "red border",
      borderClass: false,
      redClass: false,
      greenClass: false,
      blueClass: false,
      bgColor: "#ca4fd5",

      bgClass: "",
    };
  },
  computed: {
    _boxClasses() {
      return {
        border: this.borderClass,
        green: this.greenClass,
        red: this.redClass,
        blue: this.blueClass,
      };
    },
    boxClasses() {
      return {
        border: this.borderClass,
        "bg-lime-green": this.bgClass === "g",
        red: this.bgClass === "r",
        blue: this.bgClass === "b",
      };
    },
  },
}).mount("#app");
