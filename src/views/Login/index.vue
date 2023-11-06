<script setup lang="ts">
import { ref } from 'vue';
// import { useMobileCode } from '@/composables'
import { loginByMobile, loginByPassword } from '@/services/user'
import { codeRules, mobileRules, passwordRules } from '@/utils/rules'
import { showSuccessToast, showToast } from 'vant'
import { useUserStore } from '@/stores';
import { useRoute, useRouter } from 'vue-router'
// import router from '@/router';
const mobile = ref('')
const password = ref('')
const agree = ref(false)
const store = useUserStore()
const router = useRouter()
const route = useRoute()

const onSubmit = async () =>{
  if (!agree.value) return showToast('Please read and tick the agreement')
  //log in
  try{const res = await loginByPassword(mobile.value, password.value)
  store.setUser(res.data)
  showSuccessToast('Log in succussfully')
  router.replace((route.query.returnUrl as string) || '/user')}
  catch (error) {
    // Handle login error, e.g., display wrong password message
    showToast('Incorrect password. Please try again.');}
}

//password visible
const isShow = ref(false)
</script>

<template>
  <div class="login-page">
    <!-- <cp-nav-bar
      right-text="register"
      @click-right="$router.push('/register')"
    ></cp-nav-bar> -->
    <!-- 头部 -->
    <div class="login-head">
      <h3>Kia ora</h3>
      <a href="javascript:;">
        
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- 表单 -->
    <van-form autocomplete="off" @submit="onSubmit">
      <van-field v-model="mobile" 
      :rules="mobileRules"
      placeholder="account number" type="tel"></van-field>
      <van-field v-model="password" 
      :rules="passwordRules"
      placeholder="password" 
      
      :type="isShow ? 'text' : 'password'">
      <template #button>
        <cp-icon 
        :name="`login-eye-${isShow? 'on': 'off'}`"
        @click="isShow = !isShow" 
        style="margin-right: 10px;"></cp-icon>
      </template>
    </van-field>
      <div class="cp-cell">
        <van-checkbox v-model="agree">
          <span>I agree on</span>
          <a href="javascript:;">user agreement</a>
          <span>and</span>
          <a href="javascript:;">privacy policy</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button native-type="submit" block round type="primary">log in</van-button>
      </div>
      <div class="cp-cell">
        <a href="javascript:;">forgot password？</a>
      </div>
    </van-form>

    
    <!-- 底部 -->
    <!-- <div class="login-other">
      <van-divider>第三方登录</van-divider>
      <div class="icon">
        <img src="@/assets/qq.svg" alt="" />
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.login {
  &-page {
    padding-top: 46px;
  }
  &-head {
    display: flex;
    padding: 30px 30px 50px;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;
    h3 {
      font-weight: normal;
      font-size: 24px;
    }
    a {
      font-size: 15px;
    }
  }
  &-other {
    margin-top: 60px;
    padding: 0 30px;
    .icon {
      display: flex;
      justify-content: center;
      img {
        width: 36px;
        height: 36px;
        padding: 4px;
      }
    }
  }
}
.van-form {
  padding: 0 14px;
  .cp-cell {
    height: 52px;
    line-height: 24px;
    padding: 14px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .van-checkbox {
      a {
        color: var(--cp-primary);
        padding: 0 5px;
      }
    }
  }
  .btn-send {
    color: var(--cp-primary);
    &.active {
      color: rgba(22,194,163,0.5);
    }
  }
}
</style>
