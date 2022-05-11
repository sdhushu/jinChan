<script setup lang="ts">
import {ref} from 'vue';

const active = ref(0);
const icon = {
  active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
  inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png',
};

</script>

<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item badge="3">
        <span @click="()=> {$router.push('/index')}">做任务</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" alt="img" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search" @click="()=> {$router.push('/task')}">发任务</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<style scoped lang="less">
.footer {
  height: 10%;
}
</style>