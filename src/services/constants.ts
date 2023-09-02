import { IllnessTime } from '@/enums'

// 选项数据
export const timeOptions = [
  { label: 'Within one week', value: IllnessTime.Week },
  { label: 'Within one month', value: IllnessTime.Month },
  { label: 'Within half year', value: IllnessTime.HalfYear },
  { label: 'More than half year', value: IllnessTime.More }
]
export const flagOptions = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 }
]
