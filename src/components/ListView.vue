<template>
  <!-- 列表组件 -->
  <div id="listView321" class="container">
    <slot></slot>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ListView",
  props: {
    // items: Array,
    onRefresh: Function,
    onLoading: Function,
  },
  setup(props) {
    const interval = 90;
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

    function onScroll() {
      const body = document.getElementById("listView321");
      if (body) {
        body.addEventListener("scroll", () => {
          const topDist = body.scrollTop;
          const divHeight = topDist + body.offsetHeight;
          isTop = topDist === 0;
          isBottom = body.scrollHeight === divHeight;
          // if (topDist - lastY > interval) {
          //   lastY = topDist;
          // } else if (lastY - topDist > interval) {
          //   lastY = topDist;
          // }
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
    // return {};
  },
});
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
</style>