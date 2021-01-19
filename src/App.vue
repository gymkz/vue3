<template>
  <!-- 项目根视图 -->
  <div class="container">
    <Appbar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import Appbar from "./components/Appbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Appbar,
  },
  setup() {
    onMounted(() => {
      console.log('---');
    });
    onUnmounted(() => {
      console.log('---');
    });
  }
});
</script>
<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
