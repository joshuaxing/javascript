// 1. 元组 tuple

let student: [string, number] = ["xiaoxing", 10];

// 2. 普通枚举
enum Gender {
  BOY,
  GIRL,
}

console.log(Gender["BOY"], Gender[1]); // 0 , BOY

// 3. 常量枚举

const enum Colors {
  Red,
  Green,
  Blue,
}
let myColor = [Colors.Red, Colors.Green, Colors.Blue];

// 4. any
// let root:any = document.getElementById('root')
// root.style.color = 'red'
// let element: (HTMLElement | null) = document.getElementById('root')
// 非空断言
// element!.style.color = 'green'
// null undefined

let x: number;
x = 1;
// x = undefined;
// x = null

let y: number | null | undefined;
y = 1;
y = undefined;
y = null;

// 5. never
function error(msg: string): never {
  throw new Error(msg);
}
function loop(): never {
  while (true) {}
}

function fn(x: number | string) {
  if (typeof x === "number") {
    console.log(x.toFixed(2));
  } else if (typeof x === "string") {
    console.log(x.charAt(0));
  } else {
    console.log(x); // never
  }
}

// 6. void 代表没有任何类型
// 函数没有返回值
// void可以被赋值为null undefined

function greeting(): void {
  return undefined;
}

// 7. Symbol
const s1 = Symbol("key");
const s2 = Symbol("key");
// console.log(s1 === s2)

// 8. BigInt

// const max = Number.MAX_SAFE_INTEGER // 2**53-1
// console.log(max+1  === max +2 )

const max = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(max+1  === max+2 )
console.log(max + BigInt(1) === max + BigInt(2));
// "target": "ESNext"
// console.log(max+1n === max+2n)

// 9. 类型推导
let str = "ddddd";

// 10. 包装对象 wrapper object

let name2 = "zhufeng";
// 内部会自动包装成对象类型
console.log(name2.toUpperCase());
console.log(new String(name2).toUpperCase());

let isOk1: boolean = true;
let isOk2: boolean = Boolean(1);
// 不能把对象类型赋值给基本类型
// let isOk3: boolean = new Boolean(1) // 报错

// 11. 联合类型
let name3: string | number;
console.log(name3!.toString());
name3 = 3;
console.log(name3.toFixed(2));
name3 = "zhufeng";
console.log(name3!.length);

// 12. 类型断言
let name4: string | number;
console.log((name4! as number).toFixed(2));
console.log((name4! as string).length);
// 双重断言
console.log((name4! as any) as boolean);

// 13. 字符串字面量类型

const up: "Up" = "Up";
const down: "Down" = "Down";
type Direction = "Up" | "Down";
function move(direction: Direction) {}
move("Down");

// 14. 类型字面量
type Person = {
  name: string;
  age: number;
};
let p: Person = {
  name: "zhufeng",
  age: 10,
};
