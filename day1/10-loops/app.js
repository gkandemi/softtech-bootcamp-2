const app = Vue.createApp({
  data() {
    return {
      courseName: "",
      courseList: [{ title: "Vue", completed: false, id: 1 }],
    };
  },
  methods: {
    onSave() {
      this.courseList.push({
        title: this.courseName,
        completed: false,
        id: new Date().getTime(),
      });
      this.courseName = "";
    },
    deleteItem(courseItem) {
      this.courseList = this.courseList.filter((c) => c !== courseItem);
    },
  },
  computed: {
    completedCount() {
      return this.courseList.filter((c) => c.completed).length;
    },
    unCompletedCount() {
      return this.courseList.filter((c) => !c.completed).length;
    },
  },
}).mount("#app");
