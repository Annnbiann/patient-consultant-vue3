<script setup lang="ts">
import { getUserInfo } from '@/services/user'
import { useUserStore } from '@/stores'
import type { UserInfo } from '@/types/user'
import { showConfirmDialog } from 'vant'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const user = ref<UserInfo>()

onMounted(async () => {
  const res = await getUserInfo()
  user.value = res.data
})

// 
const tools = [
  { label: 'Consultations', path: '/user/consult' },
  { label: 'Prescription', path: '/' },
  { label: 'Family records', path: '/user/patient' },
  { label: 'Address', path: '/' },
  { label: 'Review', path: '/' },
  { label: 'Customer service', path: '/' },
  { label: 'Setting', path: '/' }
]
// log out
const store = useUserStore()
const router = useRouter()
const onLogout = async () => {
  await showConfirmDialog({
    title: 'Attention',
    message: 'Are you sure you want to log out？',
  
    confirmButtonText: 'Yes', 
    cancelButtonText: 'No'
  })
  // above button
  
  store.delUser()
  router.push('/login')
}
</script>

<template>
  <div class="user-page">
    <div class="user-page-head">
      <div class="top">
        <van-image round fit="cover" :src="user?.avatar" />
        <div class="name">
          <p>{{ user?.mobile }}</p>
          <p><van-icon name="edit" /></p>
        </div>
      </div>
      <van-row>
        <van-col span="6">
          <p>{{ user?.collectionNumber }}</p>
          <p>Like</p>
        </van-col>
        <van-col span="6">
          <p>{{ user?.likeNumber }}</p>
          <p>Follow</p>
        </van-col>
        <van-col span="6">
          <p>{{ user?.score }}</p>
          <p>Points</p>
        </van-col>
        <van-col span="6">
          <p>{{ user?.couponNumber }}</p>
          <p>Coupons</p>
        </van-col>
      </van-row>
    </div>
    <div class="user-page-order">
      <div class="head">
        <h3>Med order</h3>
        <router-link to="/order"
          >All <van-icon name="arrow"
        /></router-link>
      </div>
      <van-row>
        <van-col span="6">
          <van-badge :content="user?.orderInfo.paidNumber || ''">
            <cp-icon name="user-paid" />
          </van-badge>
          <p>Pending payment</p>
        </van-col>
        <van-col span="6">
          <van-badge :content="user?.orderInfo.receivedNumber || ''">
            <cp-icon name="user-shipped" />
          </van-badge>
          <p>Pending dispatch</p>
        </van-col>
        <van-col span="6">
          <van-badge :content="user?.orderInfo.shippedNumber || ''">
            <cp-icon name="user-received" />
          </van-badge>
          <p>Awaiting delivery</p>
        </van-col>
        <van-col span="6">
          <van-badge :content="user?.orderInfo.finishedNumber || ''">
            <cp-icon name="user-finished" />
          </van-badge>
          <p>Complete order</p>
        </van-col>
      </van-row>
    </div>
    
    <div class="user-page-group">
      <h3>Quick Link</h3>
      <van-cell
        v-for="(item, i) in tools"
        :key="item.label"
        :title="item.label"
        :to="item.path"
        is-link
        :border="false"
      >
        <template #icon><cp-icon :name="`user-tool-0${i + 1}`" /></template>
      </van-cell>
    </div>
    <!-- 退出登录 -->
    <a href="javascript:;" class="logout" @click="onLogout">Log out</a>
  </div>
</template>

<style lang="scss" scoped>
.user-page {
  background-color: var(--cp-bg);
  min-height: calc(100vh - 50px);
  padding: 0 15px 65px;
  // 头部
  &-head {
    height: 200px;
    background: linear-gradient(
      180deg,
      rgba(44, 181, 165, 0.46),
      rgba(44, 181, 165, 0)
    );
    margin: 0 -15px;
    padding: 0 15px;
    .top {
      display: flex;
      padding-top: 50px;
      align-items: center;
      .van-image {
        width: 70px;
        height: 70px;
      }
      .name {
        padding-left: 10px;
        p {
          &:first-child {
            font-size: 18px;
            font-weight: 500;
          }
          &:last-child {
            margin-top: 10px;
            color: var(--cp-primary);
            font-size: 16px;
          }
        }
      }
    }
    .van-row {
      margin: 0 -15px;
      padding-top: 15px;
      p {
        text-align: center;
        &:first-child {
          font-size: 18px;
          font-weight: 500;
        }
        &:last-child {
          color: var(--cp-dark);
          font-size: 12px;
          padding-top: 4px;
        }
      }
    }
  }
  // 订单
  &-order {
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    .head {
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      padding: 0 15px;
      a {
        color: var(--cp-tip);
      }
    }
    .van-col {
      text-align: center;
      .cp-icon {
        font-size: 28px;
      }
      p {
        padding-top: 4px;
        font-size: 12px;
      }
    }
  }
  // 分组
  &-group {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    h3 {
      padding-left: 16px;
      line-height: 44px;
    }
    .van-cell {
      align-items: center;
    }
    .cp-icon {
      font-size: 17px;
      margin-right: 10px;
    }
  }
  .logout {
    display: block;
    margin: 20px auto;
    width: 100px;
    text-align: center;
    color: var(--cp-price);
  }
}
</style>
