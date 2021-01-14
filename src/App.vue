<template>
<!-- 项目根视图 -->
  <Appbar />
  <div style="display: flex;">
    <Appmenu />
    <div>sdsd</div>
  </div>
  
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Appbar from "./components/Appbar.vue";
import Appmenu from "./components/Appmenu.vue";

@Options({
  components: {
    Appbar,
    Appmenu
  },
})
export default class App extends Vue {
  mounted() {
    this.$nextTick(function () {
      // 仅在渲染整个视图之后运行的代码
    });
  }
  unmounted() {
    // 卸载组件之后调用
  }
  errorCaptured(err: Error, instance: any, info: string) {
    // 当捕获一个来自子孙组件的错误时被调用。
    // 参数：错误对象,发生错误的组件实例,包含错误来源信息
    // 返回 false 以阻止该错误继续向上传播
    return false;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
input {
  background: none;
  outline: none;
  border: none;
}
input:focus {
  border: none;
}
button {
  border: none;
  outline: none;
  background-color: transparent;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
button:active {
  /* 阴影平移-镂空按钮 */
  /* position: relative;
  top: 2rpx;
  left: 2rpx;
  box-shadow: 0px 0px 16rpx #CCC inset; */
  /* 渐变及缩放 */
  opacity: 0.87;
  transform: scale(0.97, 0.97);
  background-color: #00000010;
}
.button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.button:active {
  /* 阴影平移-镂空按钮 */
  /* position: relative;
  top: 2rpx;
  left: 2rpx;
  box-shadow: 0px 0px 16rpx #CCC inset; */
  /* 渐变及缩放 */
  opacity: 0.87;
  transform: scale(0.97, 0.97);
  background-color: #00000010;
}
</style>
