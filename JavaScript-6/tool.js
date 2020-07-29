/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-07-09 11:56:38 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-07-19 22:58:51
 */
/**
 * @param {} p:通过原型创建一个对象 
 */
const inherit = function(p){
    if(p===null) throw TypeError();
    if(Object.create)
        return Object.create(p);
    let t = typeof p;
    if(t!=="object" && t !== "function") throw TypeError();
    function f(){}
    f.prototype  = p;
    return new f();
}
// 用来枚举属性的对象工具函数
/**
 * 把p中的可枚举属性复制到o中，并返回o
 * 如果有同名则覆盖
 * 不处理getting setting 以及复制属性
 */  
const extend = function(o,p){
    for(prop in p){
        o[prop] = p[prop]
    }
    return o
}


module.exports = {
    inherit,
    extend
}