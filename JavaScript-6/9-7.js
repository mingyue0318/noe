const tools = require('./tool');

B.prototype = tools.inherit(A.prototype);
B.prototype.constructor = B;


// 定义子类 9.11
// superclass 父类的构造函数
// constructor 新子类的构造函数
// methods 实例方法：复制至原型
// statics 类属性：复制至构造函数中
function defineSubClass(superclass, constructor, methods, statics) {
    // 建立子类的原型对象
    constructor.prototype = tools.inherit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    // 相对常规类一样复制方法和类属性
    if (methods) tools.extend(constructor.prototype, methods);
    if (statics) tools.extend(constructor, statics);
    return constructor;
}

// 也可以通过父类的构造函数的方法实现
Function.prototype.extend = function (constructor, methods, static) {
    return defineSubClass(this, constructor, methods, static)
}


// 手动实现简单的子类 9-12
// 构造函数
function SingletsonSet(member) {
    this.member = member;
}
// 创建一个原型对象，这个原型对象继承自Set的原型
SingletsonSet.prototype = tools.inherit(Set.prototype);
// 给原型中添加属性 
// 如果有同名的属性就覆盖Set.prototype
tools.extend(SingletsonSet.prototype, {
    constructor: SingletsonSet,
    add: function () {
        throw "read-only set";
    },
    remove: function () {
        throw "read-only set";
    },
    size: function () {
        return 1;
    },
    foreach: function (f, context) {
        f.call(context, this.member);
    },
    contains: function (x) {
        return x === this.member;
    }
})

// 9-13 在子类中调用父类的构造函数和方法
/**
 * NonNullSet 是 Set 的子类，它的成员不能是null 和 undefined
 * 
 */
function NonNullSet() {
    Set.apply(this, arguments);
}

NonNullSet.prototype = tools.inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet

// 为了排除null 和 undefined 必须重写add
NonNullSet.prototype.add = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == null) {
            throw new Error("Can't add null or undefined to a NonNullSet");
        }
        return Set.prototype.add.apply(this, arguments);
    }
}

// 定义一个只能保存字符串的集合
var StringSet = filteredSetSubclass(Set, function (x) {
    return typeof x === 'string';
})

// 这个集合类的成员不能是null 和 undefined 或函数
var mySet = filteredSetSubclass(Set, function (x) {
    return typeof x !== 'function'
})

// 9-14 类工厂和方法链
function filteredSetSubclass(superclass, filter) {
    var constructor = function () { //子类构造函数
        superclass.apply(this, arguments); // 调用父类构造函数
    }
    var proto = constructor.prototype = tools.inherit(superclass.prototype);

    proto.constructor = constructor;
    proto.add = function () {
        // 在添加任何成员之前首先使用过滤器将所有参数进行过滤
        for (let i = 0; i < arguments.length; i++) {
            const v = arguments[i];
            if (!filter(v)) throw ("value" + v + " rejected by filter");
        }
        // 调用父类的add()方法
        superclass.prototype.add.apply(this, arguments);
    }
    return constructor;
}


var NonNullSet = (function () {
    var superclass = Set; //仅指父类
    return superclass.extend(
        function () {
            superclass.apply(this, arguments)
        }, {
            add: function () {
                // 检查参数是否是 null 和 undefined
                for (let i = 0; i < arguments.length; i++) {
                    if (null === arguments[i])
                        throw new Error("Can't add null or undefined");
                    // 调用父类的add方法以执行实际插入操作
                    return superclass.prototype.add.apply(this, arguments);

                }
            }
        }

    )
}())


// 9-15 使用组合代替继承的集合的实现
/**
 * 实现一个FilteredSet，它包装某个指定的“集合”对象
 * 并对传入的add 方法的值应用了某种指定的过滤器
 * “范围”类中其他所有的核心方法延续到包装后的实例中
 */

var FilteredSet = Set.extend(
    function FilteredSet(set, filter) {
        this.set = set;
        this.filter = filter;
    }, { //实例方法
        add: function () {
            // 如果已有过滤器，直接使用它
            for (let i = 0; i < arguments.length; i++) {
                const v = arguments[i];
                if (!filter(v))
                    throw new Error('FilteredSet: value' + v + " rejected by filter");
            }
            // 调用set中的addfangfa
            this.set.add.apply(this.set, arguments);
            return this;
        },
        // 剩下的方法保持不变
        remove: function () {
            this.set.remove.apply(this.set, arguments);
            return this;
        },
        contains: function (v) {
            return this.set.apply.contains(v)
        },
        size: function () {
            return this.set.size()
        },
        foreach: function (f, c) {
            this.set.foreach(f, c)
        }

    }
)

//9-16 抽象类和非抽象Set类的层次机构


function abstractmethod() {
    throw new Error("abstract method")
}
/**
 * AbstractSet 类定义了一个抽象的方法： contains（）
 */

function AbstractSet() {
    throw new Error("Can't instantiate abstract classes");
}

AbstractSet.prototype.contains = abstractmethod;

/**
 * NotSet 是 AbstractSet的非抽象子类
 * 所有不再其他集合中的成员都在这个集合中
 * 因为它是在其他集合是不可写，的条件下定义的
 * 同事由于它的成员是无限个，因此它是不可枚举的
 * 我们只能用它来检测元素成员的归属情况
 * 注意，我们使用了Function.prototype.extend()方法来定义这个子类
 */

var NotSet = AbstractSet.extend(
    function NotSet(set) {
        this.set = set
    }, {
        contains: function (x) {
            return !this.set.contains(x)
        },
        toString: function (x) {
            return "~" + this.set.toString();
        },
        equals: function (that) {
            return that instanceof NotSet && this.set.equals(that.set)
        }
    }
);

/**
 * AbstractEnumerableSet 是 AbstractSet的一个抽象类
 * 它定义了抽象方法size() 和 foreach()
 * 然后实现了非抽象方法 isEmpty()、toArray()、to[Locale]String()和equals()
 * 子类实现了 contains()、size()、foreach() 这三个方法可以轻易地调用这5个非抽象方法
 */


var AbstractEnumerableSet = AbstractSet.extend(
    function () {
        throw new Error("Can't instanceof abstract classes");
    }, {
        size: abstractmethod,
        foreach: abstractmethod,
        isEmpty: function () {
            return this.size() == 0;
        },
        toString: function () {
            var s = "{",
                i = 0;
            this.foreach(function (v) {
                if (i++ > 0) {
                    s += ", "
                }
                s += v
            })
            return s + "}"
        },
        toLocaleString: function(){
            var s = "{",
                i = 0;
            this.foreach(function(v){
                            if(i++>0) s+=", "
                            if(v == null) s+=v
                        else s += v.toLocaleString()
            })
            return s+="}"
        },
        toArray:function(){
            var a = [];
            this.foreach(function(v){
                a.push(v);
            })
            return a;
        },
        equals:function (that) {
            if(!(that instanceof AbstractEnumerableSet)) return false;
            // 如果他们的大小不同，则他们不相等
            if(this.size()!=that.size()) return false;
            // 检查每个元素是否也在that中
            try{
                this.foreach(function(v){
                    if(!that.contains(v)) throw false;
                    return true;
                })
            }catch(x){
                if(x === false) return false;
                throw x;
            }
        }
    }
)

