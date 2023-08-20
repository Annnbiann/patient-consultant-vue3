<script setup lang="ts">
import { useFollow } from '@/composables'
import type { Knowledge } from '@/types/consult'

defineProps<{
  item: Knowledge
}>()

const { loading, follow } = useFollow('knowledge')
</script>

<template>
    <div class="knowledge-card van-hairline--bottom">
      <div class="head">
        <van-image
          round
          class="avatar"
          src="https://yanxuan-item.nosdn.127.net/9ad83e8d9670b10a19b30596327cfd14.png"
        ></van-image>
        <div class="info">
          <p class="name">GP: Jim</p>
          <p class="dep van-ellipsis">work at Auckland Hospital</p>
        </div>
        <van-button class="btn" size="small" round>+ follow</van-button>
      </div>
      <div class="body">
        <h3 class="title van-ellipsis"></h3>
        <p class="tag">
          <span># health</span>
          <span># food</span>
        </p>
        <p class="intro van-multi-ellipsis--l2">
            Eating healthy starts with choosing whole, nutrient-rich foods and creating balanced meals. Focus on incorporating a variety of fresh vegetables, fruits, lean proteins, whole grains, and healthy fats into your diet. Aim for balanced portions that provide a mix of macronutrients (carbohydrates, proteins, and fats) to support your energy levels and overall well-being. Avoid highly processed and sugary foods, and opt for homemade meals whenever possible. Remember, small, sustainable changes in your eating habits can make a big difference over time.
        </p>
        <div class="imgs">
          <van-image
            src="https://yanxuan-item.nosdn.127.net/c1cdf62c5908659a9e4c8c2f9df218fd.png"
          />
          <van-image
            src="https://yanxuan-item.nosdn.127.net/c1cdf62c5908659a9e4c8c2f9df218fd.png"
          />
          <van-image
            src="https://yanxuan-item.nosdn.127.net/c1cdf62c5908659a9e4c8c2f9df218fd.png"
          />
        </div>
        <p class="logs">
          <span>10 like</span>
          <span>50 comment</span>
        </p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.knowledge-card {
  padding: 20px 0 16px;
  .head {
    display: flex;
    align-items: center;
    .avatar {
      width: 38px;
      height: 38px;
      margin-right: 10px;
    }
    .info {
      width: 200px;
      padding-right: 10px;
      .name {
        color: var(--cp-text2);
      }
      .dep {
        color: var(--cp-tip);
        font-size: 12px;
      }
    }
    .btn {
      padding: 0 12px;
      border-color: var(--cp-primary);
      color: var(--cp-primary);
      height: 28px;
      width: 72px;
    }
  }
  .body {
    .title {
      font-size: 16px;
      margin-top: 8px;
      font-weight: normal;
    }
    .tag {
      margin-top: 6px;
      > span {
        color: var(--cp-primary);
        margin-right: 20px;
        font-size: 12px;
      }
    }
    .intro {
      margin-top: 7px;
      line-height: 2;
      color: var(--cp-text3);
    }
    .imgs {
      margin-top: 7px;
      display: flex;
      .van-image {
        width: 106px;
        height: 106px;
        margin-right: 12px;
        border-radius: 12px;
        overflow: hidden;
        &:last-child {
          margin-right: 0;
        }
      }
      &.large {
        .van-image {
          width: 185px;
          height: 125px;
        }
      }
    }
    .logs {
      margin-top: 10px;
      > span {
        color: var(--cp-tip);
        margin-right: 16px;
        font-size: 12px;
      }
    }
  }
}
</style>
