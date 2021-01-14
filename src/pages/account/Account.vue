<template>
  <!-- 404 -->
  <div>
    
  </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Account extends Vue {
  msg!: string;
}
</script>>
<style scoped>

</style>