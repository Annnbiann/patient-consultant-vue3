import type {
    DoctorPage,
    PageParams,
    FollowType,
    KnowledgePage,
    KnowledgeParams,
    TopDep
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