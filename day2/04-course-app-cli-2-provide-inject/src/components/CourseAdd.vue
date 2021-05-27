<template>
  <div class="input-group mb-3">
    <input v-model="courseName" type="text" class="form-control" placeholder="Kurs Adı" />
    <button class="btn btn-outline-primary" type="button" @click="onSave">Ekle</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courseName: null
    };
  },
  methods: {
    onSave() {
      const courseObject = {
        title: this.courseName,
        completed: false,
        id: new Date().getTime()
      };
      this.courseName = null;
      this.$emit("course-add-event", courseObject);
    }
  }
};
</script>
