const tools = require('./tool');

B.prototype = tools.inherit(A.prototype);
B.prototype.constructor = B;


// 定义子类 9.11
// superclass 父类的构造函数
// constructor 新子类的构造函数
// methods 实例方法：复制至原型
// statics 类属性：复制至构造函数中
function defineSubClass(superclass,constructor,methods,statics){
    // 建立子类的原型对象
    constructor.prototype = tools.inherit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    // 相对常规类一样复制方法和类属性
    if(methods) tools.extend(constructor.prototype,methods);
    if(statics) tools.extend(constructor,statics);
    return constructor;
}

// 也可以通过父类的构造函数的方法实现
Function.prototype.extend = function(constructor,methods,static){
    return defineSubClass(this,constructor,methods,static)
}


// 手动实现简单的子类 9-12
// 构造函数
function SingletsonSet(member){
    this.member = member;
}
// 创建一个原型对象，这个原型对象继承自Set的原型
SingletsonSet.prototype = tools.inherit(Set.prototype);
// 给原型中添加属性 
// 如果有同名的属性就覆盖Set.prototype
tools.extend(SingletsonSet.prototype,{
    constructor:SingletsonSet,
    add: function(){throw "read-only set"; },
    remove: function(){ throw "read-only set";},
    size: function(){ return 1;},
    foreach: function(f,context){ f.call(context,this.member);},
    contains: function(x){ return x === this.member;}
})

// 9-13 在子类中调用父类的构造函数和方法
/**
 * NonNullSet 是 Set 的子类，它的成员不能是null 和 undefined
 * 
 */
function NonNullSet(){
    Set.apply(this,arguments);
}

NonNullSet.prototype = tools.inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet

// 为了排除null 和 undefined 必须重写add
NonNullSet.prototype.add = function(){
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]==null){
            throw new Error("Can't add null or undefined to a NonNullSet");
        }
        return Set.prototype.add.apply(this,arguments);
    }    
}








