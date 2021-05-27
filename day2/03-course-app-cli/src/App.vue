<template>
  <div class="row mt-5">
    <div class="col-4 offset-4 border p-3">
      <course-add @course-add-event="newCourseItem = $event" />
      <course-list :newItem="newCourseItem" />
    </div>
  </div>
</template>
<script>
import CourseAdd from "@/components/CourseAdd";
import CourseList from "@/components/CourseList";
export default {
  components: {
    CourseAdd,
    CourseList
  },
  data() {
    return {
      newCourseItem: null
    };
  },
  methods: {
    //   onSave() {
    //     this.courseList.push({
    //       title: this.courseName,
    //       completed: false,
    //       id: new Date().getTime()
    //     });
    //     this.courseName = "";
    //   }
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
