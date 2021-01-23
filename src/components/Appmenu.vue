<template>
  <!-- 菜单拦 -->
  <div class="container">
    <ul class="ul-box">
      <li class="li-box" v-for="(items, index) in list" v-bind:key="index">
        <span class="ul-span" @click="onChangeTab(index)">{{
          items.label
        }}</span>
        <ul class="ul-box" v-if="items.select">
          <li class="li-box" v-for="item in items.value" v-bind:key="item">
            <span class="li-span" @click="onChangeItem(item)">{{ item }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Appmenu",
  setup() {
    const list = ref([
      { label: "哈哈馆", select: true, value: ["凸透馆", "凹透馆", "U型馆"] },
      { label: "运动馆", select: false, value: ["排球场", "羽毛球", "篮球"] },
      { label: "图书馆", select: false, value: ["技术", "经济", "文学"] },
      { label: "设备馆", select: false, value: ["手机", "电脑", "平板"] },
    ]);
    const menuIndex = ref(0);
    const menuText = ref("凸透馆");

    // 选中的菜单
    function onChangeTab(index: number): void {
      const item = list.value[index];
      list.value[index].select = !item.select;
    }

    // 选中的某一项
    function onChangeItem(e: string): void {
      menuText.value = e;
    }

    return {
      list,
      menuIndex,
      menuText,
      onChangeTab,
      onChangeItem
    };
  },
});
</script>
<style scoped>
.container {
  z-index: 9;
  width: 180px;
  min-height: 88vh;
  margin-top: 16px;
  margin-right: 12px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 4px 4px 8px #00000020;
  background-color: white;
  overflow: scroll;
}
.ul-box {
  list-style: none;
  padding: 0;
  margin: 0;
}
.li-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
}
.ul-span {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
}
.ul-span:hover {
  opacity: 0.87;
  background-color: #ff990020;
}
.ul-span:active {
  top: 1px;
  opacity: 0.9;
  position: relative;
  background-color: #00000010;
}
.li-span {
  font-size: 16px;
  padding: 8px 32px;
}
.li-span2 {
  color: coral;
  font-size: 16px;
  padding: 8px 32px;
  background-color: #ff990030;
}
.li-span:hover {
  opacity: 0.87;
  background-color: #ff990020;
}
.li-span:active {
  top: 1px;
  opacity: 0.9;
  position: relative;
  background-color: #00000010;
}
</style>