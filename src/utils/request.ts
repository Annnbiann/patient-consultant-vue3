import router from '@/router'
import { useUserStore } from '@/stores'
import axios, { AxiosError, type Method } from 'axios'
import { showToast } from 'vant'

export const baseURL = 'https://consult-api.itheima.net/'
const instance = axios.create({
  // 1. base url
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    // 2. token
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // 3. fail
    if (res.data.code !== 10000) {
      // msg
      showToast(res.data.message || 'fail')
      // promise
      return Promise.reject(res.data)
      // 
    }
    // 4. get data 
    return res.data
  },
  (err: AxiosError) => {
    // 5. handle 401
    if (err.response?.status === 401) {
      // clear locol info
      const store = useUserStore()
      store.delUser()
      // log in page，携带当前访问页面的地址（包含参数的）
      router.push({
        path: '/login',
        query: { returnUrl: router.currentRoute.value.fullPath }
      })
    }
    return Promise.reject(err)
  }
)

export default instance

type Data<T> = {
  code: number
  message: string
  data: T
}

export const request = <T>(
  url: string,
  method: Method = 'GET',
  submitData?: object
) => {
  // 参数：地址，请求方式，提交的数据
  // 返回：promise
  return instance.request<any, Data<T>>({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
