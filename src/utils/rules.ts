//validation requirements
import type{ FieldRule } from 'vant'
const mobileRules = [ { required:  true, message: 'account number'}, 
{pattern:/^1[3-9]\d{9}$/,message:'wrong number'}]

const passwordRules: FieldRule[] = [
    {required: true, message: 'password'},
    {pattern:/^\w{8,24}/, message:'password between 8 to 24 digits'}

]
export{ mobileRules,passwordRules }