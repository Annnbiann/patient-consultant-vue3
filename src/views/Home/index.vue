<script setup lang="ts">
import { ref } from 'vue'
// import KnowledgeList from './components/KnowledgeList.vue'
// import FollowDoctor from './components/FollowDoctor.vue'
// import { useConsultStore } from '@/stores'
// import { ConsultType } from '@/enums'

const active = ref(1)

// const store = useConsultStore()
</script>

<template>
  <div class="home-page">
    <!-- 头部 -->
    <div class="home-header">
      <div class="con">
        <h1>HealthLink</h1>
        <div class="search">
          <cp-icon name="home-search" /> search：symptom/doctor/tip
        </div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="home-navs">
      <van-row>
        <van-col span="8">
          <router-link to="/" class="nav">
            <cp-icon name="home-doctor"></cp-icon>
            <p class="title">Ask Doctor</p>
            <p class="desc">search by department</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link
            to="/consult/fast"
            class="nav"
           
          >
            <cp-icon name="home-graphic"></cp-icon>
            <p class="title">Consultation</p>
            <p class="desc">Doctor quick response</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/" class="nav">
            <cp-icon name="home-prescribe"></cp-icon>
            <p class="title">Medcine</p>
            <p class="desc">Online pharmacy</p>
          </router-link>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-order"></cp-icon>
            <p class="title">Med order</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-docs"></cp-icon>
            <p class="title">Health history</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-rp"></cp-icon>
            <p class="title">Prescription</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-find"></cp-icon>
            <p class="title">Search</p>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <!-- png -->
    <div class="home-banner">
      <van-swipe indicator-color="#fff">
        <van-swipe-item>
          <img src="@/assets/homep.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/homep.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- TAB -->
    <van-tabs shrink sticky v-model:active="active">
      <van-tab title="Follow">
        <follow-doctor></follow-doctor>
        <knowledge-list type="like" />
      </van-tab>
      <van-tab title="Recommend">
        <knowledge-list type="recommend" />
      </van-tab>
      <van-tab title="Weight loss">
        <knowledge-list type="fatReduction" />
      </van-tab>
      <van-tab title="Food">
        <knowledge-list type="food" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding-bottom: 50px;
}
.home-header {
  height: 100px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 90px;
    background: linear-gradient(180deg, rgba(62, 206, 197, 0.85), #26bcc6);
    border-bottom-left-radius: 150px 20px;
    border-bottom-right-radius: 150px 20px;
  }
  .con {
    position: relative;
    padding: 0 15px;
    > h1 {
      font-size: 24px;
      color: #fff;
      font-weight: normal;
      padding: 20px 0;
      line-height: 1;
      padding-left: 5px;
    }
    .search {
      height: 40px;
      border-radius: 20px;
      box-shadow: 0px 15px 22px -7px rgba(224, 236, 250, 0.8);
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 20px;
      color: var(--cp-dark);
      font-size: 13px;
      .cp-icon {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
}
.home-navs {
  padding: 10px 15px 0 15px;
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    .cp-icon {
      font-size: 48px;
    }
    .title {
      font-weight: 500;
      margin-top: 5px;
      margin-bottom: 10px;
      color: var(--cp-text1);
    }
    .desc {
      font-size: 11px;
      color: var(--cp-tag);
      margin-top: 2px;
    }
    &.min {
      .cp-icon {
        font-size: 35px;
      }
      .title {
        font-size: 13px;
        color: var(--cp-text2);
        font-weight: normal;
      }
    }
  }
}
.home-banner {
  padding: 10px 15px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
