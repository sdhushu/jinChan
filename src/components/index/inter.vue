

<script setup lang="ts">
</script>

<template>
  <div class="integral">
    <div class="block">
      <div>200</div>
      <div>可提现积分</div>
    </div>
    <div class="line"></div>

    <div class="block">
      <div>200</div>
      <div>可提现积分</div>
    </div>
    <div class="line"></div>

    <div class="block">
      <div>200</div>
      <div>可提现积分</div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .integral {
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .block {
      text-align: center;
      :nth-child(1) {
        font-size: 20px;
        font-weight: 600;
      }
      :nth-child(2) {
        font-size: 12px;
        font-weight: 400;
      }
    }
    .line {
      width: 1px;
      height: 80%;
      background: #000;
    }
  }
</style>