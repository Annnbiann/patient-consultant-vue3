import type { ConsultType, IllnessTime, OrderType } from '@/enums'
import type { Patient } from './user'


export type PageParams = {
    current: number
    pageSize: number
  }
  export type KnowledgeParams = PageParams & {
    type: KnowledgeType
  }  

// 医生卡片对象
export type Doctor = {
    /** 医生ID */
    id: string
    /** 医生名称 */
    name: string
    /** 头像 */
    avatar: string
    /** 医院名称 */
    hospitalName: string
    /** 医院等级 */
    gradeName: string
    /** 科室 */
    depName: string
    /** 职称 */
    positionalTitles: string
    /** 是否关注，0 未关注 1 已关注 */
    likeFlag: 0 | 1
    /** 接诊服务费 */
    serviceFee: number
    /** 接诊人数 */
    consultationNum: number
    /** 评分 */
    score: number
    /** 主攻方向 */
    major: string
  }
  
  // 医生列表
  export type DoctorList = Doctor[]
  
  // 医生分页
  export type DoctorPage = {
    pageTotal: number
    total: number
    rows: DoctorList
  }

  // 关注的目标类型：topic百科话题,knowledge百科文章,doc医生,disease疾病
export type FollowType = 'topic' | 'knowledge' | 'doc' | 'disease'