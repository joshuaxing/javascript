export = {};

// 1 - 描述对象的形状
interface Speakable {
  name: string;
  speak(): void;
}

let speakMan: Speakable = {
  name: "xiaomao",
  speak() {},
};

// 2 - 行为的抽象

interface Speakable {
  speak(): void;
}

interface Eatable {
  eat(): void;
}

class Person implements Speakable, Eatable {
  name!: string;
  speak(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

// 3 - 任意属性类型 
// 3.1 - readonly
interface Person2 {
  readonly id: number;
  name: string;
  [key: string]: any;
}
let p: Person2 = {
  id: 1,
  name: "xiao",
  age: 10,
  11: 11
};
// p.id =3 // Cannot assign to 'id' because it is a read-only property

// 4 - 接口的继承

interface Speakable {
  speak(): void
}

interface SpeakChinese extends Speakable {
  speakChinese(): void
}

class ChineseMan implements SpeakChinese {
  speakChinese(): void {
    throw new Error("Method not implemented.");
  }  
  name!: string;
  speak() {
    throw new Error("Method not implemented.");
  }
}


// 5 - 函数类型
interface Discount {
  (price: number): number;
}
const discount: Discount = (price: number): number => {
  return price * 0.2;
};

// 6 - 可索引类型
// 对数组和对象进行约束
interface User {
  [index: number]: string;
}
let user: User = {
  0: "1",
  1: "2",
};
let arr: User = ["1", "2"];

// 7 - 构造函数类型
class Tree {
  constructor(public name: string) {}
}

// 修饰普通函数
interface WithNameClass2 {
  (name: string): any;
}

let wc2: WithNameClass2 = (name: string) => {};

// new之后就是用来描述类的构造函数
interface WithNameClass {
  new (name: string): any;
}

let wc: WithNameClass = Tree;
function createClass(clazz: WithNameClass, name: string) {
  return new clazz(name);
}

let ins = createClass(Tree, "zhufeng");
console.log(ins.name);

/**
 * 当我们写一个类的时候，会得到2个类型
 * 1. 构造函数类型的函数类型
 * 2. 类的实例类型
 */

namespace a {
  class Component {
    static myName: string = "静态名称属性";
    myName: string = '实例名称属性'
  }
  // Component类名本身表示的是实例的类型
  // ts 一个类型 一个叫值
  // 冒号后面的是类型，放在=后面的是值
  let com = Component;
  let c: Component = new Component();
  let f: typeof Component = com;
}

namespace b {
  function Component (this: any) {
    this.myName= '实例名称属性'
  }
  Component.myName = '静态名称属性'
}

// 8 - 函数类型 vs 对象属性

// 接口描述函数
interface Type1 {
  (name: string): any;
  age: number;
}

// let t1: Type1 = (name:string) => {}


let t: any = (name: string) => {}
t.age = 10

let t1: Type1 = t


// 接口描述对象
interface Type2 {
  a: (name: string) => string,
  speak(): void
}

let t2: Type2 = {
  // a: (name) => name,
  a: function(name) {
    return name
  },
  // speak() {},
  speak: function() {

  }
}

// 7 抽象类 vs 接口区别
abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  abstract speak(): void
}

interface Flying {
  fly: (who:string) => void,
  where(): void
}

class Duck extends Animal implements Flying {
  fly(who:string): void {
    console.log(`${who}-fly`)
  }
  where(): void {
    console.log(`where`)
  }
  speak(): void {
    console.log(`speak`)
  }
}
let duck = new Duck('xiaoxiao')
duck.speak()
duck.where()
duck.fly('chaoren')
