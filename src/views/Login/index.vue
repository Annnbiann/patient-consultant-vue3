<script setup lang="ts">
// import { useMobileCode } from '@/composables'
// import { loginByMobile, loginByPassword } from '@/services/user'
// import { useUserStore } from '@/stores'
// import { codeRules, mobileRules, passwordRules } from '@/utils/rules'
// import { showSuccessToast, showToast } from 'vant'
// import { ref } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

// const mobile = ref('')
// const password = ref('')
// const agree = ref(false)

// const store = useUserStore()
// const router = useRouter()
// const route = useRoute()
// const onSubmit = async () => {
//   if (!agree.value) return showToast('请勾选协议')
//   // 进行登录(合并短信登录)
//   const res = isPass.value
//     ? await loginByPassword(mobile.value, password.value)
//     : await loginByMobile(mobile.value, code.value)
//   store.setUser(res.data)
//   showSuccessToast('登录成功')
//   router.replace((route.query.returnUrl as string) || '/user')
// }

// // 短信登录界面切换
// const isPass = ref(true)
// const code = ref('')

// // 发送短信验证码
// const { onSend, time, form } = useMobileCode(mobile)

// // 密码的可见与不可见
// const isShow = ref(false)

// // http%3A%2F%2Fconsult-patients.itheima.net%2Flogin%2Fcallback

// const url =
//   'https://graph.qq.com/oauth2.0/authorize?client_id=102015968&response_type=token&scope=all&redirect_uri=' +
//   encodeURIComponent(import.meta.env.VITE_APP_CALLBACK + '/login/callback')
</script>

<template>
  
  <cp-nav-bar></cp-nav-bar>
  <div class="login-page">Login</div>
</template>

<style lang="scss" scoped>
// @import '@/styles/login.scss';
</style>
