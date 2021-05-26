const app = Vue.createApp({
  data() {
    return {
      item: null,
      filterText: "",
      itemList: [],
      // itemCount: 0,
    };
  },
  methods: {},
  computed: {
    getItemList() {
      return this.itemList.filter((i) => i.includes(this.filterText));
    },
    itemCount() {
      return `${this.getItemList.length} adet kayıt vardır..`;
    },
  },
  // watch: {
  //   getItemList(value) {
  //     this.itemCount = value.length;
  //   },
  // },
}).mount("#app");
