<template>
  <div>
    <h2 class="text-center">Dynamic Components</h2>
    <div class="row mt-5 text-center">
      <div class="col-6 offset-3">
        <button @click="activeComponent = 'red'" class="btn btn-danger btn me-1">Red</button>
        <button @click="activeComponent = 'green'" class="btn btn-success btn me-1">Green</button>
        <button @click="activeComponent = 'blue'" class="btn btn-primary btn">Blue</button>
      </div>
    </div>
    <div class="row mt-3">
      <!-- <Red v-if="activeComponent === 'red'" />
      <Green v-if="activeComponent === 'green'" />
      <Blue v-if="activeComponent === 'blue'" /> -->
      <keep-alive>
        <component :is="activeComponent" text="Component Props" />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Red from "@/components/Red";
import Green from "@/components/Green";
import Blue from "@/components/Blue";
export default {
  components: {
    Red,
    Green,
    Blue
  },
  data() {
    return {
      activeComponent: "red"
    };
  }
};
</script>
