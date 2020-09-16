
// 
console.log(123)


// let str:string = Object.prototype.toString.apply(null)
// console.log(str)

// let str1 = <any><string>str

// str1 = [0,1]

{

    var global_num = 12          // 全局变量
    class Numbers { 
    num_val = 13;             // 实例变量
    static sval = 10;         // 静态变量
    
    storeNum():void { 
        var local_num = 14;    // 局部变量
    } 
    } 
    console.log("全局变量为: "+global_num)  
    console.log(Numbers.sval)   // 静态变量
    let obj = new Numbers(); 
    console.log("实例变量: "+obj.num_val)
}
{

    class Car {
        engine:string;
        constructor(engine:string){
            this.engine = engine
        }
        disp():void{
            console.log('发动机型号')
        }
    }

    var obj = new Car('xxxSy1');

    console.log(obj.engine)

    obj.disp()
}

{
    // 继承类的方法重写
    class PrinterClass {
        doPrint():void{
            console.log('父类的doPrint() 方法')
        }
    }

    class stringPrinter extends PrinterClass{
        doPrint():void{
            super.doPrint() //调用父类函数
            console.log('子类的 doPrint()方法')
        }
    }
}

{
    interface ILoan {
        interest: number
    }
    class AgriLoan implements ILoan{
        interest:number
        rebate:number

        constructor(interest:number,rebate:number){
            this.interest = interest
            this.rebate = rebate
        }
    }

    let obj = new AgriLoan(10,1)
    console.log(obj.interest + obj.rebate)
}
{
    interface IPoint {
        x:number,
        y:number
    }
    function addPoint(p1:IPoint,p2:IPoint){
        var x = p1.x + p2.x
        var y = p1.y + p2.y
        return {x,y}
    }

    let newPoint = addPoint({x:3,y:4},{x:5,y:1})
}