/*
 * @Author: your name
 * @Date: 2021-01-05 16:00:31
 * @LastEditTime: 2021-01-06 09:25:18
 * @LastEditors: Please set LastEditors
 * @Description: 接口
 * @FilePath: \TypeScript\greeter.ts
 */

// 定义一个参数
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.clor) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ colour: "red", width: 100 });

// 定义一个函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

// 可索引的类型
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// 类类型
// ClockConstructor为构造函数所用
// ClockInterface为实例方法所用

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// 继承接口
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;