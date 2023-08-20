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
  
  // family record--patient
  export type Patient = {
    /** ID */
    id?: string
    /** name */
    name: string
    /** id */
    idCard: string
    /** 0    1 default */
    defaultFlag: 0 | 1
    /** 0 female  1 male */
    gender: 0 | 1
    /** gender */
    genderValue?: string
    /** age */
    age?: number
  }
  
  // patient list
  export type PatientList = Patient[]
  