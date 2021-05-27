const app = Vue.createApp({
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
});

app.component("counter-app", {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  computed: {},
  watch: {},
  template: `
    <div class="mt-3 d-flex justify-content-center flex-column align-items-center">
      <h1>{{ counter }}</h1>
      <div>
        <button @click="increase" class="btn btn-sm btn-success me-1">+</button>
        <button @click="decrease" class="btn btn-sm btn-danger">-</button>
      </div>
    </div>
  `,
});

app.component("app-header", {
  template: `
  <h1>Counter App</h1>
  `,
});

app.mount("#app");
