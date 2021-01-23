<template>
  <!-- 滑动组件-未完成 -->
  <div id="scrollView321" class="container" :style="'flex-direction: ' + direction">
    <slot></slot>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ScrollView",
  props: {
    // items: Array,
    orientation: String,
    onRefresh: Function,
    onLoading: Function,
  },
  setup(props) {
    const direction = props.orientation || 'column';
    const interval = 50;

    let statY = 0;
    let endY = 0;
    let isTop = true;
    let isBottom = false;
    let lastY = 0;

    function onPullDown() {
      if (props.onRefresh) {
        props.onRefresh();
      }
      console.log("=======>onPullDown");
    }

    function onLoadUp() {
      if (props.onLoading) {
        props.onLoading();
      }
      console.log("=======>onLoadUp");
    }

    function onStartTouch(e: any) {
      statY = e.touches[0].pageY;
      // console.log(e.touches[0]);
    }

    function onMoveTouch(e: any) {
      endY = e.touches[0].pageY;
      // console.log(e.touches);
    }

    function onEndTouch() {
      if (Math.abs(endY - statY) > interval) {
        if (isTop) {
          onPullDown();
        } else if (isBottom) {
          onLoadUp();
        }
      }
    }

    function moveTo() {

    }

    function onScroll() {
      const body = document.getElementById("scrollView321");
      if (body) {
        body.addEventListener("scroll", () => {
          const topDist = body.scrollTop;
          const divHeight = topDist + body.offsetHeight;
          isTop = topDist === 0;
          isBottom = body.scrollHeight === divHeight;
          if (topDist - lastY > interval) {
            lastY = topDist;
          } else if (lastY - topDist > interval) {
            lastY = topDist;
          }
          // console.log("-------->",body.offsetTop, divHeight, body.scrollHeight);
        });
        body.addEventListener("touchstart", onStartTouch, false);
        body.addEventListener("touchend", onEndTouch, false);
        body.addEventListener("touchmove", onMoveTouch, false);
      }
    }

    onMounted(() => {
      onScroll();
    });
    return {
      direction
    };
  },
});
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
}
</style>