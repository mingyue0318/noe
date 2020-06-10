/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-08 10:35:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-09 14:06:14
 */


/*  TypeScript 基础类型
    11种
*/
const v: string = 'typescript';
console.log(v);


// 

let isDone: Boolean = true;

let count: number = 10;
// let name: string = 'kaer'


let list: number[] = [1, 23, 4];
let list1: Array<number> = [1, 2, 3, 4];

// Enum类型
// 数字枚举

enum Direction {
    NORTH,
    SOUTH,
    EAST,
    WEST,
}

let dir: Direction = Direction.NORTH;
console.log(dir);

// 字符串枚举

enum Direction {
    NORTH1 = "NORTH",
    SOUTH1 = "SOUTH",
    EAST1 = "EAST",
    WEST1 = "WEST",
}
let dir1: Direction = Direction.NORTH1
console.log(dir1)


//   异构枚举   数字和字符串混用
enum Enum {
    A,
    B,
    C = "C",
    D = "D",
    E = 8,
    F,
}
let dir2: Enum = Enum.E
console.log(dir2);


// any
let value: any;
value = '123'
let value1: unknown = value;
let value2: number = value;

console.log(value2);
// unknown
let va: unknown;

let va1: any = va;
// let va2: number = va; 


// Tuple
let tuple: [boolean, string];

tuple = [true, '123']
tuple = [false, 'acc']

// void : 不存在返回的函数


// Null Undefined

// Never never 类型表示的是那些永不存在的值的类型 利用 never 类型的特性来实现全面性检查
// 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。

type Foo = number | string;
// type Foo= number | string| boolean ;


function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo === 'number') {

    } else if (typeof foo === 'string') {

    } else {
        const check: never = foo;
    }
}


// TypeScript 断言
// 1.尖括号
let something: any = 'this is string';
let strLength: number = (<string>something).length;
// as语法
let someValue: any = 'this is value';
let someLenght: number = (someValue as string).length



/*******
 * 
 * 
 *  TypeScirpt 类型守卫
 *   in 关键字
 * typeof 关键字
 * instanceof 关键字-
 * 
 * *******/
interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

let padder: Padder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
}

// 自定义类型保护的类型谓词
function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}


/*
*联合类型和类型别名
*
*/
// 联合类型
const sayHello = (name: string | undefined) => {

}

// 可辨识联合
// 可辨识、联合类型和类型守卫
// 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。

enum CarTransmission {
    Automatic = 200,
    Manual = 300
}
interface Motorcycle {
    vType: "motorcycle"; // discriminant
    make: number; // year
}
interface Car {
    vType: "car"; // discriminant
    transmission: CarTransmission
}
interface Truck {
    vType: "truck"; // discriminant
    capacity: number; // in tons
}
// 联合类型
type Vehicle = Motorcycle | Car | Truck;

const EVALUATION_FACTOR = Math.PI;
// function evaluatePrice(vehicle: Vehicle) {
//   return vehicle.capacity * EVALUATION_FACTOR;
// }
function evaluatePrice(vehicle: Vehicle) {
    switch (vehicle.vType) {
        case 'car':
            return vehicle.transmission * EVALUATION_FACTOR;
            break;
        case 'truck':
            return vehicle.capacity * EVALUATION_FACTOR;
            break;
        case 'motorcycle':
            return vehicle.make * EVALUATION_FACTOR;
            break;

        // default:
        //     break;
    }
}

const myTruck: Truck = { vType: "truck", capacity: 9.5 };
evaluatePrice(myTruck);
// 5.3 类型别名
type Message = string | string[];
let greet = (message: Message) => {

}

// 六、交叉类型
interface IPerson {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string
}

type IStaff = IPerson & IWorker;
const iStaff: IStaff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
}

/*
 * TypeScript 函数
 * 区别
 * TypeScript	JavaScript
 * 含有类型	 无类型
 * 箭头函数	 箭头函数（ES2015）
 * 函数类型	 无函数类型
 * 必填和可选参数	 所有参数都是可选的
 * 默认参数	 默认参数
 * 剩余参数	 剩余参数
 * 函数重载	 无函数重载
 * */
// 箭头函数
/*
myBooks.forEach(() => console.log('reading'));

myBooks.forEach(title => console.log(title));

myBooks.forEach((title, idx, arr) =>
    console.log(idx + '-' + title);
);

myBooks.forEach((title, idx, arr) => {
    console.log(idx + '-' + title);
});
*/

// 参数类型 和  函数返回值类型
function createUserId1(name: string, id: number): string {
    return name + id;
}

// 函数类型
let IdGenerator: (chars: string, nums: number) => string;

function createUserId(name: string, id: number): string {
    return name + id;
}

IdGenerator = createUserId;

// 可选参数
function createUserId2(name: string, id: number, age?: number): string {
    return name + id;
}

// 默认参数
function createUserId3(
    name: string = "Semlinker",
    id: number,
    age?: number
): string {
    return name + id;
}

// 剩余参数
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

// 函数重载

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable) {
//     if (typeof a === "string" || typeof b === "string") {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }


// class Calculator {
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
//     add(a: string, b: number): string;
//     add(a: number, b: string): string;
//     add(a: Combinable, b: Combinable) {
//         if (typeof a === "string" || typeof b === "string") {
//             return a.toString() + b.toString();
//         }
//         return a + b;
//     }
// }

// const calculator = new Calculator();
// const result = calculator.add("Semlinker", " Kakuqo");

/*
*   TypeScript 数组
*   1 数组解构
*   2 数组展开运算符
*   3 数组遍历
*/

// 1
let x: number; let y: number; let z: number;
let five_array = [0, 1, 2, 3, 4];
[x, y, z] = five_array;
// 2
let two_array = [0, 1];
let five_array1 = [...two_array, 2, 3, 4];
// 3
let colors: string[] = ["red", "green", "blue"];
for (let i of colors) {
    console.log(i);
}
/*
*   TypeScript 对象
*    对象解构
*    对象展开运算符
*
*/
// 1
let person = {
    name: "Semlinker",
    gender: "Male",
};

let { name, gender } = person;
// 2
let person1 = {
    names: "Semlinker",
    gender: "Male",
    address: "Xiamen",
};

// 组装对象
let personWithAge = { ...person, age: 33 };

// 获取除了某些项外的其它项
let { names, ...rest } = person1;

/*
* TypeScript 接口
* ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
****/

// 对象的形状
interface Person {
    name: string;
    age: number;
}

let Semlinker: Person = {
    name: "Semlinker",
    age: 33,
};

// 可选 | 只读属性
interface Person1 {
    readonly name: string;
    age?: number;
}

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!


/*
*   TypeScript 类
*   描述了所创建的对象共同的属性和方法。
***/

class Greeter {
    // 静态属性
    static cname: string = "Greeter";
    // 成员属性
    greeting: string;

    // 构造函数 - 执行初始化操作
    constructor(message: string) {
        this.greeting = message;
    }

    // 静态方法
    static getClassName() {
        return "Class name is Greeter";
    }

    // 成员方法
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter1 = new Greeter("world");
"use strict";
var Greeter1 = /** @class */ (function () {
    // 构造函数 - 执行初始化操作
    function Greeter(message) {
        this.greeting = message;
    }
    // 静态方法
    Greeter.getClassName = function () {
        return "Class name is Greeter";
    };
    // 成员方法
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    // 静态属性
    Greeter.cname = "Greeter";
    return Greeter;
}());
var greeter = new Greeter1("world");


// 访问器
let passcode = "Hello TypeScript";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "Hello TypeScript") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
    console.log(employee.fullName);
}

/*  类的继承
*   extends
*   私有字段
*   
*    
*
*/

// 1
class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
sam.move();

// 2

class Person {
    #name:string;
    private _age:number;
    constructor(name:string){
        this.#name = name;
    }
    greet(){
        console.log(`Hello,my name is ${this.#name}!` );
    }
}

let semlinker = new Person("Semlinker");

// semlinker.#name



export { }