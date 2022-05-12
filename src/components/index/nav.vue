<script setup lang="ts">
  import {ref} from "vue";

  const keyword = ref();
</script>

<template>
  <div class="title">

    <div class="logo">
      <span>金禅</span>
      <van-search
          v-model="keyword"
          placeholder="输入任务编号"
          input-align="left"
          background="none"
          shape="round"
          left-icon=""
      />
      <van-image
          round
          width="2rem"
          height="2rem"
          src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    </div>

    <slot ></slot>
  </div>
</template>


<style scoped lang="less">
.title {
  height: 15%;
  .logo {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
      font-size: 26px;
      font-weight: 800;
      //margin-left: 24px;
    }
  }
}
</style>