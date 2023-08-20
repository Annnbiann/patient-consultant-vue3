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
  
  // get user info
  export const getUserInfo = () => request<UserInfo>('patient/myUser')


  
  
  // get patient list
  export const getPatientList = () => request<PatientList>('patient/mylist')
  
  // 
  export const addPatient = (patient: Patient) =>
    request('patient/add', 'POST', patient)
  
  // 
  export const editPatient = (patient: Patient) =>
    request('patient/update', 'PUT', patient)
  
  // 
  export const delPatient = (id: string) => request(`patient/del/${id}`, 'DELETE')
  
  // 
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
  