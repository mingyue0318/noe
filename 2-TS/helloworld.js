"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-06-08 10:35:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-08 10:37:20
 */
exports.__esModule = true;
/*  TypeScript 基础类型
    11种
*/
var v = 'typescript';
console.log(v);
// 
var isDone = true;
var count = 10;
var name = 'kaer';
var list = [1, 23, 4];
var list1 = [1, 2, 3, 4];
// Enum类型
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
console.log(dir);
// 字符串枚举
(function (Direction) {
    Direction["NORTH1"] = "NORTH";
    Direction["SOUTH1"] = "SOUTH";
    Direction["EAST1"] = "EAST";
    Direction["WEST1"] = "WEST";
})(Direction || (Direction = {}));
var dir1 = Direction.NORTH1;
console.log(dir1);
//   异构枚举   数字和字符串混用
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
var dir2 = Enum.E;
console.log(dir2);
// any
var value;
value = '123';
var value1 = value;
var value2 = value;
console.log(value2);
// unknown
var va;
var va1 = va;
// let va2: number = va; 
// Tuple
var tuple;
tuple = [true, '123'];
tuple = [false, 'acc'];
// type Foo= number | string| boolean ;
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === 'number') {
    }
    else if (typeof foo === 'string') {
    }
    else {
        var check = foo;
    }
}
// TypeScript 断言
// 1.尖括号
var something = 'this is string';
var strLength = something.length;
// as语法
var someValue = 'this is value';
var someLenght = someValue.length;
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
var padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
}
// 自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
/*
*联合类型和类型别名
*
*/
// 联合类型
var sayHello = function (name) {
};
// 可辨识联合
// 可辨识、联合类型和类型守卫
// 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
