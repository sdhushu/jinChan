<script setup lang="ts">

</script>

<template>
  <div class="body">
  <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }

  .body {
    background: linear-gradient(#ffd516, #ffe057, #ffe881, #fffae5);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
