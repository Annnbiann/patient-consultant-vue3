//validation requirements
import type{ FieldRule } from 'vant'
const mobileRules = [ { required:  true, message: 'account number'}, 
{pattern:/^1[3-9]\d{9}$/,message:'wrong number'}]

const passwordRules: FieldRule[] = [
    {required: true, message: 'password'},
    {pattern:/^\w{8,24}/, message:'password between 8 to 24 digits'}

]

const codeRules: FieldRule[] = [
    { required: true, message: '请输入短信验证码' },
    { pattern: /^\d{6}$/, message: '验证码是6个数字' }
  ]
  
  const nameRules: FieldRule[] = [
    { required: true, message: 'Please insert name' },
    { pattern: /^[A-Za-z\s]{2,20}$/, message: '2 to 20 alphabetic characters'}
  ]
  
  const idCardRules: FieldRule[] = [
    { required: true, message: 'ID' },
    {
      pattern: /^[1-9]\d{17}$/,
      message: 'ID should contain 18 digits'
    }
  ]
  
export { mobileRules, passwordRules, codeRules, nameRules, idCardRules }
