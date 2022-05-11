<script setup lang="ts">
import Nav from '../components/index/nav.vue'
import Footer from "../components/index/footer.vue";
import Icon1 from "../static/task/icon01.png";
import Icon2 from "../static/task/icon02.png";
import Icon3 from "../static/task/icon03.png";
import Bg from "../static/task/bg.png";

</script>

<template>
  <Nav />
  <div class="content">
    <div style="height: 10%;padding: 20px">
      <div class="title">发需求</div>
      <div class="desc">自由职业平台开创者,全心全意为您服务</div>
    </div>

    <div style="height: 40%;position: relative">
      <van-notice-bar left-icon="volume-o" :scrollable="false"  background="#ffe057">
        <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
        >
          <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
          <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
          <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
        </van-swipe>
      </van-notice-bar>

      <VanImage
          width="80%"
          height="75%"
          style="padding-left: 20px"
          :src="Bg" />
    </div>

    <div class="order">
      <div class="release">
        <VanImage
            width="50"
            height="50"
            :src="Icon1" />
        <div>
          <div class="find">我有需求找人帮忙</div>
          <div class="message">省心发布 需求匹配 等人接单</div>
        </div>

        <VanIcon :name="Icon3"/>
      </div>
      <div class="release">
        <VanImage
            width="50"
            height="50"
            :src="Icon2" />
        <div>
          <div class="find">我有能力, 接单赚钱</div>
          <div class="message">技能展示 技能匹配 找你帮忙</div>
        </div>

        <VanIcon :name="Icon3"/>
      </div>
    </div>

  </div>
  <Footer />
</template>


<style scoped lang="less">
.content {
  width: 100%;
  height: 75%;
  overflow: hidden;
  font-family: Microsoft YaHei;
  .title {
    font-size: 28px;
    font-weight: bold;
  }
  .desc {
    font-size: 14px;
    font-weight: 400;
  }
  .order {
    height: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .release {
      width: 85%;
      height: 40%;
      background: #FFFFFF;
      border-radius: 8px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .find {
        font-size: 18px;
        font-weight: 800;
      }
      .message {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>