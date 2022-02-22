//

// 类数组
function sum() {
  let args: IArguments = arguments;
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

// sum(12, 3);

// 泛型类
class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value);
  }
  getMax(): T {
    return this.list[0];
  }
}

let array = new MyArray<number>();
array.add(0);
array.add(1);

// 与new
function factory<T>(type: { new (): T }): T {
  return new type();
}
class Student {}
let stu = factory<Student>(Student);

// 泛型接口
interface Calculate<T> {
  (a: T, b: T): T;
}

let total: Calculate<number> = function <T>(a: number, b: number): number {
  return a + b;
};
total(1, 2);

interface Calculate2 {
  <T>(a: T, b: T): T;
}

let total2: Calculate2 = function <T>(a: T, b: T): T {
  //   return a + b;
  return a;
};
total2<number>(1, 2);

interface Calculate3<T> {
  <U>(a: T, b: T): U;
}

let total3: Calculate3<number> = function <U>(a: number, b: number): U {
  return a as any;
};
total3<number>(1, 2);

// 泛型可以写多个
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]];
}

// 默认泛型
interface T2<T = string> {}
type T22 = T2<number>;

// 泛型约束
// function logger<T>(val: T) {
//   console.log(val.length);
// }

interface LengthWise {
  length: number;
}

function logger2<T extends LengthWise>(val: T) {
  console.log(val.length);
}
let obj = {
  length: 10,
};
type Obj = typeof obj;
logger2<Obj>(obj);

// 类型别名
type Cart<T> = {list: T[]} | T[]
let c1:Cart<string> = {list: ['1']}
let c2:Cart<number> = [1,3]