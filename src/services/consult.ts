import type {
    DoctorPage,
    PageParams,
    FollowType,
    KnowledgePage,
    KnowledgeParams,
  } from '@/types/consult'
import { request } from '@/utils/request'
export const getKnowledgePage = (params: KnowledgeParams) =>
  request<KnowledgePage>('patient/home/knowledge', 'GET', params)

export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('home/page/doc', 'GET', params)

  export const followOrUnfollow = (id: string, type: FollowType = 'doc') =>
  request('like', 'POST', { id, type })