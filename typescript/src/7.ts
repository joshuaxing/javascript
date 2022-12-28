export {};
// 1. 接口的兼容性
interface Animal {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
  gender: number;
}

function getName(val: Animal): string {
  return val.name;
}

let a: Animal = {
  name: "xiaomao",
  age: 10,
};
getName(a);

let p = {
  name: "xiaoxiao",
  age: 18,
  gender: 1,
};
getName(p);

// 2. 基本数据类型的兼容性
let num: string | number;
let str: string = "xiaoxiao";
num = str;

let num2: {
  toString(): string;
};
let str2: string = "xiaoxiao";
num2 = str2;
// str2 = num2 不能将类型“{ toString(): string; }”分配给类型“string”

// 3. 类的兼容性

namespace ab {
  class Animal {
    name!: string;
  }
  class Bird extends Animal {
    age: number | undefined;
  }
  let a: Animal = new Animal();
  let b: Bird = new Bird();
  a = b;
  //   b = a;
}

// 4. 函数的兼容性
//比较参数
type Func = (a: number, b: number) => void;
let sum: Func;
function f1(a: number, b: number): void {}
sum = f1;
// 参数少一个也可以
function f2(a: number): void {}
sum = f2;
// 少二个参数也可以
function f3(): void {}
sum = f3;
// 多传不可以
function f4(a: number, b: number, c: number): void {}
// sum = f4;

// 比较返回值
type GetPerson = () => { name: string; age: number };

let getPerson: GetPerson;

function g1() {
  return { name: "xiaoxiao", age: 18 };
}
getPerson = g1; // 可以

function g2() {
  return { name: "xiaoxiao", age: 18, gender: 1 };
}
getPerson = g2; // 可以

function g3() {
  return { name: "xiaoxiao" };
}
// getPerson = g3; // 不可以

// 返回值类型是协变的，而参数类型是逆变的
// 返回值类型可以传子类，参数可以传父类
// 参数逆变传父类 返回值协变传子类

namespace cd {
  class Animal {}

  class Dog extends Animal {
    public name: string = "Dog";
  }
  class BlackDog extends Dog {
    public age: number = 10;
  }
  class WhiteDog extends Dog {
    public home: string = "beijing";
  }
  let animal: Animal;
  let dog: Dog;
  let blackDog: BlackDog;
  let whiteDog: WhiteDog;

  type Callback = (dog: Dog) => Dog;

  function exec(callback: Callback): void {
    // callback(animal); n
    callback(dog); // y
    callback(blackDog); // y
    callback(whiteDog); // y
  }

  /**
   * 参数逆变传父类和自己
   * 返回值协变传子类和自己
   * 1. 参数传子类返回值是子类 n
   * 2. 参数是子类返回值是父类 n
   * 3. 参数是父类返回值是父类 n
   * 4. 参数是父类返回值是子类 y
   */

  type ChildToChild = (blackDog: BlackDog) => BlackDog;
  let childToChild: ChildToChild;

  //    exec(childToChild); // n
  // 当strictFunctionTypes = false 参数是双向协变的
  //    exec(childToChild); // y

  type ChildToParent = (blackDog: BlackDog) => Animal;
  let childToParent: ChildToParent;
  //    exec(childToParent); // n

  type ParentToParent = (animal: Animal) => Animal;
  let parentToParent: ParentToParent;
  //    exec(parentToParent) // n

  type ParentToChild = (animal: Animal) => BlackDog;
  let parentToChild: ParentToChild = (animal: Animal) => {
    return new BlackDog();
  };
  exec(parentToChild); // y
}

// 5. 泛型的兼容性

interface Empty<T> {}
let x!: Empty<string>;
let y!: Empty<number>;
x = y; // yes

interface Empty2<T> {
  data: T;
}
let x2!: Empty2<string>; // {data: string}
let y2!: Empty2<number>; // {data: number}
// x2 = y2 no

// 6. 枚举的兼容性
// 数字和枚举是兼容的
enum Colors {Red, Yellow}

let c: Colors
c = Colors.Red
c = 1;
let n: number
n = 1
n = Colors.Red