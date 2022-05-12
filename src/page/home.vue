<script setup lang="ts">
import {ref} from "vue";
import Nav from '../components/index/nav.vue';
import Footer from '../components/index/footer.vue';
import Inter from "../components/index/inter.vue"

const themeVars = {
  cardBackgroundColor:"white",
  cardFontSize:"15px"
}

</script>

<template>
  <Nav ><Inter /></Nav>

    <div class="content">
      <van-notice-bar
        left-icon="volume-o"
        wrapable
        :scrollable="true"
        text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
      />
      <van-config-provider :theme-vars="themeVars">
        <van-card
          num="240"
          price="10.00"
          origin-price="5"
          title="拼多多帮购物任务"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          tag="诚信认证"
          :centered="true"
          class="card"
        >
        </van-card>

        <van-card
          num="240"
          price="10.00"
          origin-price="5"
          title="拼多多帮购物任务"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          tag="诚信认证"
          :centered="true"
          class="card"
        >
        </van-card>

        <van-card
          num="240"
          price="10.00"
          origin-price="5"
          title="拼多多帮购物任务"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          tag="诚信认证"
          :centered="true"
          class="card"
        >
        </van-card>


        <van-card
          num="240"
          price="10.00"
          origin-price="5"
          title="拼多多帮购物任务"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          tag="诚信认证"
          :centered="true"
          class="card"
        >
        </van-card>


        <van-card
          num="240"
          price="10.00"
          origin-price="5"
          title="拼多多帮购物任务"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          tag="诚信认证"
          :centered="true"
          class="card"
        >
        </van-card>


        <van-card
          num="240"
          price="10.00"
          origin-price="5"
          title="拼多多帮购物任务"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          tag="诚信认证"
          :centered="true"
          class="card"
        >
        </van-card>


        <van-card
          num="240"
          price="10.00"
          origin-price="5"
          title="拼多多帮购物任务"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          tag="诚信认证"
          :centered="true"
          class="card"
        >
        </van-card>
      </van-config-provider>
    </div>

    <Footer />
</template>

<style scoped lang="less">
  .content {
    width: 100%;
    height: 75%;
    overflow-y: scroll;
    .card {
      width: 95%;
      border-radius: 8px;
      margin: 10px auto;
    }
  }
</style>
