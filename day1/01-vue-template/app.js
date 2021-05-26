const app = Vue.createApp({
  data() {
    return {
      heading: "Bu Vue tarafından gelmiş bir heading",
      description: "Bu bir açıklamadır...",
      someText: "Bu bir denemedir.",
      link: {
        url: "https://www.google.com",
        text: "Google",
        target: "_blank",
      },
      htmlOutput: `
      <h3>Bu da başlığı...</h3>
      <hr />
      <strong> Burada kalın bir yazı var </strong>
      `,
    };
  },
});

app.mount("#app");
