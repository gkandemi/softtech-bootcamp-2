<template>
  <div>
    <ul v-if="courseList.length > 0" class="list-group">
      <course-list-item v-for="courseItem in courseList" :key="courseItem" :item="courseItem" @delete-event="deleteItem" />
    </ul>
    <alert v-else />
    <count-box label="Tamamlanmış" :value="completedCount" />
    <count-box label="Tamamlanmamış" :value="unCompletedCount" />
    <count-box label="Toplam" :value="courseList.length" />
  </div>
</template>
<script>
import CourseListItem from "@/components/CourseListItem";
import Alert from "@/components/Alert";
import CountBox from "@/components/CountBox";
export default {
  props: ["newItem"],
  components: {
    CourseListItem,
    Alert,
    CountBox
  },
  data() {
    return {
      courseList: [
        { title: "Vue2", completed: false, id: 1 },
        { title: "Vue3", completed: false, id: 2 }
      ]
    };
  },
  methods: {
    deleteItem(courseItem) {
      this.courseList = this.courseList.filter(c => c !== courseItem);
    }
  },
  computed: {
    completedCount() {
      return this.courseList.filter(c => c.completed).length;
    },
    unCompletedCount() {
      return this.courseList.filter(c => !c.completed).length;
    }
  },
  watch: {
    newItem(newValue) {
      this.courseList.push(newValue);
    }
    // newItem: {
    //   deep: true,
    //   handler(newValue) {
    //       this.courseList.push(newValue);
    //       //   console.log(oldValue, newValue);
    //   }
    // }
  }
};
</script>
