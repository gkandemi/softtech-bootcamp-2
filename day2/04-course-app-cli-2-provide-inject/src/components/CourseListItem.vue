<template>
  <li :class="completeClass" class="list-group-item d-flex justify-content-between align-items-center">
    <span>
      <div class="form-check">
        <input v-model="courseItem.completed" class="form-check-input" type="checkbox" :id="`complete_${courseItem.id}`" />
        <label class="form-check-label" :for="`complete_${courseItem.id}`"> {{ courseItem.title }} </label>
      </div>
    </span>
    <button class="btn btn-sm btn-danger" @click="deleteItem(courseItem)">Sil</button>
  </li>
</template>
<script>
export default {
  props: ["item"],
  inject: ["deleteItem"],
  data() {
    return {
      title: "Deneme",
      courseItem: {}
    };
  },
  mounted() {
    this.courseItem = this.item;
  },
  computed: {
    completeClass() {
      return {
        "uncompleted-item": !this.courseItem.completed,
        "completed-item": this.courseItem.completed
      };
    }
  }
};
</script>
