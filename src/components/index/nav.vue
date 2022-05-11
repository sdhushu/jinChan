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
  </div>
</template>


<style scoped lang="less">
.title {
  height: 20%;
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
}
</style>