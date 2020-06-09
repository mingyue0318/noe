/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-08 10:35:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-08 10:37:20
 */


/*  TypeScript 基础类型
    11种
*/
const v: string = 'typescript';
console.log(v);


// 

let isDone: Boolean = true;

let count: number = 10;
let name: string = 'kaer'


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
function evaluatePrice(vehicle: Vehicle){
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
let greet = (message:Message)=>{

}

// 六、交叉类型
interface IPerson {
    id:string;
    age:number;
}

interface IWorker {
    companyId:string
}

type IStaff = IPerson & IWorker;
const iStaff:IStaff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
}

export { }