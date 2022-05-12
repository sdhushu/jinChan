<script setup lang="ts">
import Nav from "../components/index/nav.vue"
import Footer from "../components/index/footer.vue"
import Covert from "../static/my/convert.png"
import Covert2 from "../static/my/convert02.png"
import Money1 from "../static/my/money01.png"
import Money2 from "../static/my/money02.png"
import Money3 from "../static/my/money03.png"

</script>

<template>
  <Nav>
    <div class="title">
      <div>全面服务, 不止任务</div>
    </div>

  </Nav>
  <div class="content">
    <div class="money">
      <div class="text">我的资产</div>
      <div class="price">213.00</div>
        <van-notice-bar color="white" background="#000" left-icon="hot-o">
          受疫情影响,结算稍有延迟,16点后提交的订单将于次日结算
        </van-notice-bar>

    </div>

    <div class="function">
      <div class="block">
        <div class="convert">
          <div>
            <van-image
              round
              width="3rem"
              height="3rem"
              :src="Covert2"
            />
          </div>
          <div>100分=10元</div>
        </div>
        <div>快速提现</div>
        <div>任务积分极速提取</div>
      </div>
      <div class="block">
        <div class="convert">
          <div>
            <van-image
                round
                width="3rem"
                height="3rem"
                :src="Covert"
            />
          </div>
          <div>100分=10元</div>
        </div>
        <div>快速充值</div>
        <div>积分充值秒到账</div>
      </div>
    </div>

    <div class="money flex">
      <div class="process">
        <div>
          <van-image
              round
              width="4rem"
              height="4rem"
              :src="Money1"
          />
        </div>
        <div>待结算</div>
      </div>
      <div class="process">
        <div>
          <van-image
                round
                width="4rem"
                height="4rem"
                :src="Money2"
          />
        </div>
        <div>进行中</div>
      </div>
      <div class="process">
        <div>
          <van-image
              round
              width="4rem"
              height="4rem"
              :src="Money3"
          />
        </div>
        <div>待评价</div>
      </div>
    </div>

    <div class="item">
      <div class="guide">
        <van-icon name="fire-o" />
        <div>新人必看指引</div>
        <van-icon name="arrow" />
      </div>
      <div class="guide">
        <van-icon name="fire-o" />
        <div>联系我们</div>
        <van-icon name="arrow" />
      </div>
      <div class="guide">
        <van-icon name="fire-o" />
        <div>关注我们</div>
        <van-icon name="arrow" />
      </div>
      <div class="guide">
        <van-icon name="good-job-o" />
        <div>商务合作</div>
        <van-icon name="arrow" />
      </div>
      <div class="guide">
        <van-icon name="fire-o" />
        <div>来自开发者的一封信</div>
        <van-icon name="arrow" />
      </div>
    </div>

  </div>
  <Footer />
</template>


<style scoped lang="less">
.title {
  //flex-wrap: wrap;
  text-align: center;
  font-size: 20px;
  width: 100vw;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: #000000;
}
.content {
  width: 100%;
  height: 75%;
  overflow: hidden;
  font-weight: bold;
  font-family: Adobe Heiti Std;
  .money {
    width: 90%;
    height: 20%;
    border-radius: 10px;
    background: #FFFFFF;
    margin: 10px auto;
    .text {
      font-size: 14px;
      padding-top: 10px;
      padding-left: 10px;
    }
    .price {
      font-size: 40px;
      text-align: center;
    }
    .process {
      font-size: 15px;
      text-align: center;
    }
  }
  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .function {
    width: 90%;
    height: 20%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    .block {
      width: 48%;
      height: 100%;
      background: #FFFFFF;
      border-radius: 10px;
      :nth-child(2) {
        font-size: 16px;
        margin-left: 5px;
      }
      :nth-child(3) {
        font-size: 12px;
        margin-left: 5px;
        color: gray;
      }
      .convert {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        font-family: Adobe Heiti Std;
        margin-top: 10px;
      }

    }
  }
  .item {
    width: 90%;
    height: 40%;
    margin: 10px auto;
    .guide {
      width: 100%;
      height: 14%;
      margin-bottom: 5px;
      background: #FFFFFF;
      border-radius: 10px;
      display: flex;
      align-items: center;
      font-size: 14px;
      :nth-child(1) {
        margin-left: 10%;
        margin-right: 10px;
      }
      :nth-child(3) {
        position: absolute;
        right: 30px;
      }
    }
  }
}

:root {
  .van-notice-bar{
    height: 20px;
  }
}
</style>