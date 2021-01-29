<template>
  <!-- 首页 -->
  <div class="container">
    <div class="backdrop" />

    <div class="box">
      <h1>大翻领设计阿里开机速度快</h1>
      <h1>大翻领设计阿里开机速度快</h1>
      <div id="trading_58b5d" />
      <h1>大翻领设计阿里开机速度快</h1>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { klineView } from "@/lib/trading/index";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const backdrop = ref("");

    function palyBackdrop(): void {
      //
      klineView();
    }

    onMounted(() => {
      const timer = setTimeout(() => {
        palyBackdrop();
      }, 10000);
    });

    return {
      backdrop,
    };
  },
});
</script>
<style scoped>
.container {
  height: 100vh;
  overflow: scroll;
  position: relative;
}
.backd {
  z-index: 1;
  min-height: 100vh;
  background-color: #ffffff10;
}
.box {
  z-index: 1;
}
.backdrop {
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  background-size: cover;
  background-image: url(http://echars.com/banner/banner3.jpg);
  /* 
  http://echars.com/banner/banner3.jpg
  https://cn.bing.com//th?id=OHR.BolivianSummer_ZH-CN0179997340_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4
https://cn.bing.com//th?id=OHR.GoldenDragon_ZH-CN9908231664_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4
https://cn.bing.com//th?id=OHR.FoucaultsPendulum_ZH-CN9435794626_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4 */
}
</style>