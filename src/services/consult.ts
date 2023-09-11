import type {
    ConsultOrderItem,
    DoctorPage,
    PageParams,
    FollowType,
    KnowledgePage,
    KnowledgeParams,
    TopDep,
    Image,
    ConsultOrderPreData, 
    ConsultOrderPreParams,
    PartialConsult
    
  } from '@/types/consult'
import { request } from '@/utils/request'
export const getKnowledgePage = (params: KnowledgeParams) =>
  request<KnowledgePage>('patient/home/knowledge', 'GET', params)

export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('home/page/doc', 'GET', params)

export const followOrUnfollow = (id: string, type: FollowType = 'doc') =>
  request('like', 'POST', { id, type })
export const getAllDep =() => request<TopDep[]>('dep/all')

export const uploadImage = (file: File) => {
  const fd = new FormData()
  fd.append('file', file)
  return request<Image>('upload', 'POST', fd)
}
// 拉取预支付订单信息
export const getConsultOrderPre = (params: ConsultOrderPreParams) =>
  request<ConsultOrderPreData>('/patient/consult/order/pre', 'GET', params)

export const createConsultOrder = (data: PartialConsult) =>
  request<{ id: string }>('patient/consult/order', 'POST', data)

  export const getConsultOrderPayUrl = (params: {
    paymentMethod: 0 | 1
    orderId: string
    payCallback: string
  }) => request<{ payUrl: string }>('patient/consult/pay', 'POST', params)

  export const getConsultOrderDetail = (orderId: string) =>
  request<ConsultOrderItem>('patient/consult/order/detail', 'GET', { orderId })


