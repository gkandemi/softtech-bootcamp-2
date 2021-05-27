<template>
  <ul class="list-group">
    <course-list-item v-for="courseItem in provideData.courseList" :key="courseItem" :item="courseItem" />
  </ul>
</template>

<script>
import CourseListItem from "@/components/CourseListItem";
export default {
  //   props: ["courseList"],
  inject: ["provideData"],
  components: {
    CourseListItem
  }
};
</script>
