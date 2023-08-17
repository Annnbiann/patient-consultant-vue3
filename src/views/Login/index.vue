<script setup lang="ts">
// import { useMobileCode } from '@/composables'
// import { loginByMobile, loginByPassword } from '@/services/user'
// import { useUserStore } from '@/stores'
// import { codeRules, mobileRules, passwordRules } from '@/utils/rules'
import { showSuccessToast, showToast } from 'vant'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const mobile = ref('')
const password = ref('')
const agree = ref(false)

const store = useUserStore()
const router = useRouter()
const route = useRoute()
const onSubmit = async () => {
  if (!agree.value) return showToast('Please tick')
  // 进行登录(合并短信登录)
  const res = isPass.value
    ? await loginByPassword(mobile.value, password.value)
    : await loginByMobile(mobile.value, code.value)
  store.setUser(res.data)
  showSuccessToast('Log in succuessfully!')
  router.replace((route.query.returnUrl as string) || '/user')
}

// 短信登录界面切换
const isPass = ref(true)
const code = ref('')

// 发送短信验证码
const { onSend, time, form } = useMobileCode(mobile)

// 密码的可见与不可见
const isShow = ref(false)

// http%3A%2F%2Fconsult-patients.itheima.net%2Flogin%2Fcallback

const url =
  'https://graph.qq.com/oauth2.0/authorize?client_id=102015968&response_type=token&scope=all&redirect_uri=' +
  encodeURIComponent(import.meta.env.VITE_APP_CALLBACK + '/login/callback')
</script>

<template>
  <div class="login-page">
    <cp-nav-bar
      right-text="Register"
      @click-right="$router.push('/register')"
    ></cp-nav-bar>
    <!-- 头部 -->
    <div class="login-head">
      <h3>{{ isPass ? 'Password' : 'Code' }}</h3>
      <a href="javascript:;">
        <span @click="isPass = !isPass">
          {{ isPass ? 'Text Code' : 'Password' }}
        </span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- 表单 -->
    <van-form autocomplete="off" @submit="onSubmit" ref="form">
      <van-field
        name="mobile"
        v-model="mobile"
        :rules="mobileRules"
        placeholder="Phone number"
        type="tel"
      ></van-field>
      <van-field
        v-if="isPass"
        v-model="password"
        :rules="passwordRules"
        placeholder="Password"
        :type="isShow ? 'text' : 'password'"
      >
        <template #button>
          <cp-icon
            :name="`login-eye-${isShow ? 'on' : 'off'}`"
            @click="isShow = !isShow"
            style="margin-right: 10px"
          ></cp-icon>
        </template>
      </van-field>
      <van-field
        v-else
        :rules="codeRules"
        placeholder="Text code"
        v-model="code"
      >
        <template #button>
          <span class="btn-send" :class="{ active: time > 0 }" @click="onSend">
            {{ time > 0 ? `${time}s later` : 'send code' }}
          </span>
        </template>
      </van-field>
      <div class="cp-cell">
        <van-checkbox v-model="agree">
          <span>I agree</span>
          <a href="javascript:;">user agreement</a>
          <span>and</span>
          <a href="javascript:;">privacy policy</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button native-type="submit" block round type="primary">
          Log in
        </van-button>
      </div>
      <div class="cp-cell">
        <a href="javascript:;">Forgot password</a>
      </div>
    </van-form>
    <!-- 底部 -->
    <div class="login-other">
      <van-divider>Third party log in</van-divider>
      <a
        @click="store.setReturnUrl(route.query.returnUrl as string)"
        class="icon"
        :href="url"
      >
        <img src="@/assets/qq.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/login.scss';
</style>
