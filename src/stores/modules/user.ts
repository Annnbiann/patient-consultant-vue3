import type { User } from '@/types/user'
import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 1. state
    const user = ref<User>()
    // 2. set up user
    const setUser = (u: User) => {
      user.value = u
    }
    // 3. delete user
    const delUser = () => {
      user.value = undefined
    }

    const returnUrl = ref('')
    const setReturnUrl = (url: string) => (returnUrl.value = url)

    return { user, setUser, delUser, returnUrl, setReturnUrl }
  },
  {
    persist: true
  }
)
