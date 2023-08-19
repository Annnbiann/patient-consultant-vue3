export type User = {
    /** token */
    token: string
    /** user ID */
    id: string
    /**  */
    account: string
    /** phone */
    mobile: string
    /** profile img */
    avatar: string
  }
  
  // login register  changeMobile   forgetPassword  ,bindMobile
  export type CodeType =
    | 'login'
    | 'register'
    | 'changeMobile'
    | 'forgetPassword'
    | 'bindMobile'
  
  type OmitUser = Omit<User, 'token'>
  export type UserInfo = OmitUser & {
    /** like */
    likeNumber: number
    /**  */
    collectionNumber: number
    /** point */
    score: number
    /**  */
    couponNumber: number
    orderInfo: {
      /**  */
      paidNumber: number
      /**  */
      receivedNumber: number
      /**  */
      shippedNumber: number
      /**  */
      finishedNumber: number
    }
  }
  
  // Omit Pick TS的内置类型
  // type Person = {
  //   name: string
  //   age: number
  //   gender: 0 | 1
  // }
  // // Omit 是从对象中排出一些属性，得到对象类型
  // type OmitPerson = Omit<Person, 'age' | 'gender'>
  // // Pick 是从对象中摘取一些属性，得到对象类型
  // type PickPerson = Pick<Person, 'gender' | 'age'>
  
  // 家庭档案-患者信息
  export type Patient = {
    /** 患者ID */
    id?: string
    /** 患者名称 */
    name: string
    /** 身份证号 */
    idCard: string
    /** 0不默认  1默认 */
    defaultFlag: 0 | 1
    /** 0 女  1 男 */
    gender: 0 | 1
    /** 性别文字 */
    genderValue?: string
    /** 年龄 */
    age?: number
  }
  
  // 家庭档案-患者信息列表
  export type PatientList = Patient[]
  