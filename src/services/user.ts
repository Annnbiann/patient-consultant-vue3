import type {
    CodeType,
    Patient,
    PatientList,
    User,
    UserInfo
  } from '@/types/user'
  import { request } from '@/utils/request'
  
  // log in
  export const loginByPassword = (mobile: string, password: string) =>
    request<User>('login/password', 'POST', { mobile, password })
  
  // msg code
  export const sendMobileCode = (mobile: string, type: CodeType) =>
    request('code', 'GET', { mobile, type })
  
  // msg log in
  export const loginByMobile = (mobile: string, code: string) =>
    request<User>('login', 'POST', { mobile, code })
  
  // 获取用户信息
  export const getUserInfo = () => request<UserInfo>('patient/myUser')
  
  // get user info
  export const getPatientList = () => request<PatientList>('patient/mylist')
  
  // 添加患者
  export const addPatient = (patient: Patient) =>
    request('patient/add', 'POST', patient)
  
  // 编辑患者
  export const editPatient = (patient: Patient) =>
    request('patient/update', 'PUT', patient)
  
  // 删除患者
  export const delPatient = (id: string) => request(`patient/del/${id}`, 'DELETE')
  
  // 患者详情
  export const getPatientDetail = (id: string) =>
    request<Patient>(`patient/info/${id}`)
  
  export const getUnreadMessageCount = () =>
    request<number>('patient/message/unRead/all')
  
  export const loginByQQ = (openId: string) =>
    request<User>('login/thirdparty', 'POST', {
      openId,
      source: 'qq'
    })
  
  export const bindMobile = (data: {
    mobile: string
    code: string
    openId: string
  }) => request<User>('login/binding', 'POST', data)
  