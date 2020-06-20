// 1.邮箱
const isEmail = (s) =>{
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
// 2.手机号码 
const isMobile = (s) => {
    return /^1[0-9]{10}$/.test(s)
}
// 3.电话号码
const isPhone = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}
// 4.是否url地址
const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s)
}


module.exports = {
    isEmail,
    isMobile
}
