<template>
  <div>
    <course-list v-if="courseList.length > 0" />
    <alert v-else />
    <count-box label="Tamamlanmış" :value="completedCount" />
    <count-box label="Tamamlanmamış" :value="unCompletedCount" />
    <count-box label="Toplam" :value="courseList.length" />
  </div>
</template>
<script>
import CourseList from "@/components/CourseList";
import Alert from "@/components/Alert";
import CountBox from "@/components/CountBox";
export default {
  props: ["courseList"],
  components: {
    CourseList,
    Alert,
    CountBox
  },
  computed: {
    completedCount() {
      return this.courseList.filter(c => c.completed).length;
    },
    unCompletedCount() {
      return this.courseList.filter(c => !c.completed).length;
    }
  }
};
</script>
