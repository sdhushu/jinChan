<script setup lang="ts">
import {ref} from "vue";
import Chat from "../../static/detail/chat.png"
import Main from "../../static/detail/main.png"
import Back from "../../static/detail/back.png"

const active = ref(0);
</script>

<template>
  <div class="footer">
    <van-tabbar v-model="active" style="height: 10%">
      <van-tabbar-item to="/index" :icon="Chat" @click="()=> {$router.push('/index')}">
        我有疑问
      </van-tabbar-item>
      <van-tabbar-item  @click="()=> {
        $router.push('/task')}">
        <VanImage :src="Main" width="5rem" height="5rem" class="icon" />
        <div class="ling">领</div>
      </van-tabbar-item>
      <van-tabbar-item :icon="Back" @click="()=> {$router.push('/index')}">回到主页</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.footer {
  height: 15%;
  .icon {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .ling {
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    font-weight: 700
  }
}

</style>