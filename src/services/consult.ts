import type {
    DoctorPage,
    PageParams,
    FollowType
  } from '@/types/consult'
import { request } from '@/utils/request'

export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('home/page/doc', 'GET', params)

  export const followOrUnfollow = (id: string, type: FollowType = 'doc') =>
  request('like', 'POST', { id, type })