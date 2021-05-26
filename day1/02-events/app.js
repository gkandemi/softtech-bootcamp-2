const app = Vue.createApp({
  data() {
    return {
      coords: "0,0",
      todoList: [],
    };
  },
  methods: {
    showMeAlert(text, event) {
      console.log("event", event);
      alert(text || "Default");
    },
    updateCoords(event) {
      this.coords = `${event.clientX},${event.clientY}`;
    },
    writeMessage(event) {
      console.log(event.target.value);
      this.todoList.push(event.target.value);
      event.target.value = "";
    },
  },
});

app.mount("#app");
