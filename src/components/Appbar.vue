<template>
<!-- 导航栏 -->
  <div>
    <div class="container row">
      <div class="logo" />
      <div class="flex" />
      <div class="item" @click="click(0)">首页</div>
      <div class="item" style="color: coral" @click="click(1)">市场</div>
      <div class="item" @click="click(2)">产品</div>
      <div class="item" @click="click(3)">评测</div>
      <div class="item" @click="click(4)">关于</div>
      <div class="user-icon" onClick="{props.onLogin}">
        <img class="user-icon" />
      </div>
    </div>
    <div class="barsize" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Appbar extends Vue {
  msg!: string;
}
</script>>
<style scoped>
/* 样式 */
.container {
  top: 0;
  z-index: 1;
  min-width: 720px;
  width: 100vw;
  height: 56px;
  color: white;
  position: fixed;
  background-color: black;
  /* 参数1右边阴影宽度参数/2下边参数/3模糊半径 */
  box-shadow: 0 4px 8px #00000090;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.barsize {
  height: 56px;
}

.flex {
  flex: 1;
}

.logo {
  width: 32px;
  height: 32px;
  margin-left: 16px;
  margin-right: 24px;
  border-radius: 50%;
  background-color: coral;
}

.user-icon {
  width: 24px;
  height: 24px;
  margin-right: 16px;
  margin-left: 48px;
  border-radius: 50%;
  cursor: pointer;
  background-color: coral;
}

.item {
  padding: 6px 16px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  /* background-color: #FFFFFF10; */

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.item:hover {
  opacity: 0.8;
  /* transform: scale(0.97, 0.97); */
  /* background-color: #FAFAFA; */
}
.item:active {
  top: 1px;
  opacity: 0.9;
  position: relative;
  /* background-color: #F8F8F8; */
}
</style>