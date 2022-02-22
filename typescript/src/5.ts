export = {};

// 描述对象的形状
interface Speakable {
  name: string;
  speak(): void;
}

let speakMan: Speakable = {
  name: "xiaomao",
  speak() {},
};

interface Eatable {
  eat(): void;
}

// 行为的抽象

class Animal implements Speakable, Eatable {
  name: string;
  speak(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

// 任意属性

interface Person {
  readonly id: number;
  name: string;
  [key: string]: any;
}
let p: Person = {
  id: 1,
  name: "xiao",
};

// 接口的继承

// 函数类型接口
interface Discount {
  (price: number): number;
}
const discount: Discount = (price: number): number => {
  return price * 0.2;
};

// 可索引接口
// 对数组和对象进行约束
interface User {
  [index: number]: string;
}
let user: User = {
  0: "1",
  1: "2",
};
let arr: User = ["1", "2"];

// 构造函数
class Tree {
  constructor(public name: string) {}
}
// 修饰普通函数
// new之后就是用来描述类的构造函数
interface WithNameClass {
  new (name: string): any;
}

let wc: WithNameClass = Tree;
// function createClass(clazz: WithNameClass, name: string) {
//   return new clazz(name);
// }

// let ins = createClass(Tree, "zhufeng");
// console.log(ins.name);

namespace a {
  class Component {
    static myName: string = "";
  }
  // Component类名本身表示的是实例的类型
  // ts 一个类型 一个叫值
  let com = Component;
  let c: Component = new Component();
  let f: typeof Component = com;
}

// 函数
interface Type1 {
  (name: string): any;
  age: number;
}
interface Type2 {
  a: (name: string) => any
}

// let t1: Type1 = (name:string) => {}
let t: any = (name: string) => {}
t.age = 10
let t1: Type1 = t

let t2: Type2 = {
  a: t1
}