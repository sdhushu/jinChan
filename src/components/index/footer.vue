<script setup lang="ts">
import {ref} from 'vue';
import Create from "../../static/footer/create.png"
import Make from "../../static/footer/make.png"
import My from "../../static/footer/my.png"

const active = ref(0);
const icon = {
  active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
  inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png',
};

</script>

<template>
  <div class="footer">
    <van-tabbar v-model="active" style="height: 10%">
      <van-tabbar-item badge="3" :icon="Make" to="/index" @click="()=> {$router.push('/index')}">
       做任务
      </van-tabbar-item>
      <van-tabbar-item :icon="Create" @click="()=> {
        $router.push('/task')}">发任务</van-tabbar-item>
      <van-tabbar-item :icon="My" @click="()=> {$router.push('/my')}">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<style scoped lang="less">
.footer {
  height: 15%;
}
</style>