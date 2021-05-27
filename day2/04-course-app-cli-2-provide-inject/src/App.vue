<template>
  <div class="row mt-5">
    <div class="col-4 offset-4 border p-3">
      <course-add @course-add-event="onSave" />
      <list-section :courseList="provideData.courseList" @delete-event="deleteItem" />
    </div>
  </div>
</template>
<script>
import CourseAdd from "@/components/CourseAdd";
import ListSection from "@/components/ListSection";
export default {
  components: {
    CourseAdd,
    ListSection
  },
  data() {
    return {
      provideData: {
        courseList: [
          { title: "Vue2", completed: false, id: 1 },
          { title: "Vue3", completed: false, id: 2 }
        ]
      }
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      // courseList: this.courseList,
      deleteItem: this.deleteItem
    };
  },
  methods: {
    onSave(newCourseItem) {
      this.provideData.courseList.push(newCourseItem);
    },
    deleteItem(courseItem) {
      this.provideData.courseList = this.provideData.courseList.filter(c => c !== courseItem);
      this.$forceUpdate();
    }
  }
};
</script>
<style>
.uncompleted-item {
  background-color: #fc838f40;
}
.completed-item {
  background-color: #1987543b;
}
</style>
