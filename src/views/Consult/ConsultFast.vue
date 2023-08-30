<script setup lang="ts">
import { useConsultStore } from '@/stores'

const store = useConsultStore()
</script>

<template>
  <div class="consult-fast-page">
    <cp-nav-bar
      title="Express consultation"
      right-text="History"
      @click-right="$router.push('/user/consult')"
    ></cp-nav-bar>
    <div class="fast-logo">
      <img class="img" src="@/assets/consult-fast.png" alt="" />
      <p class="text">Reply withtin<span> 60s</span> </p>
    </div>
    <div class="fast-type">
      <router-link
        to="/consult/dep"
        class="item"
        @click="store.setIllnessType(1)"
      >
        <cp-icon class="pic" name="consult-doctor"></cp-icon>
        <div class="info">
          <p>Doctor</p>
          <p></p>
        </div>
        <van-icon name="arrow"></van-icon>
      </router-link>
      <router-link
        to="/consult/dep"
        class="item"
        @click="store.setIllnessType(0)"
      >
        <cp-icon class="pic" name="consult-message"></cp-icon>
        <div class="info">
          <p>Nurse</p>
          <p></p>
        </div>
        <van-icon name="arrow"></van-icon>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.consult-fast-page {
  padding-top: 46px;
  .fast-logo {
    padding: 30px 0;
    text-align: center;
    .img {
      width: 240px;
    }
    .text {
      font-size: 16px;
      margin-top: 10px;
      > span {
        color: var(--cp-primary);
      }
    }
  }
  .fast-type {
    padding: 15px;
    .item {
      display: flex;
      padding: 16px;
      border-radius: 4px;
      align-items: center;
      margin-bottom: 16px;
      border: 0.5px solid var(--cp-line);
    }
    .pic {
      width: 40px;
      height: 40px;
    }
    .info {
      margin-left: 12px;
      flex: 1;
      > p:first-child {
        font-size: 16px;
        color: var(--cp-text1);
        margin-bottom: 4px;
      }
      > p:last-child {
        font-size: 13px;
        color: var(--cp-tag);
      }
    }
    .van-icon {
      color: var(--cp-tip);
    }
  }
}
</style>
