<!--
 * @Author: your name
 * @Date: 2021-01-05 15:58:32
 * @LastEditTime: 2021-01-06 13:52:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TypeScript\typescript.md
-->

### 基础类型

- 布尔值 let isDone: boolean = false
- 数字 let count: number = 6
- 字符串 let name: string = "bob"
- 数组 let list: number[] = [1, 2, 3];
  let list: Array<number> = [1, 2, 3];
- 元组 Tuple

### readonly vs const

### 枚举

    enum类型是对JavaScript标准数据类型的一个补充
    enum Color {Red, Green, Blue}'
    let c: Color = Color.Green;

### 接口

    interface，仅定义结构，不需要实现
    implements

    - 定义一个参数
    - 定义一个函数
    - 可索引的类型
    - 继承接口
    - 混合类型
    - 类类型

    ```
    interface Person {
     firstName: string;
     lastName: string;
     sayHello(): string; // 要求实现⽅法
     [propName: string]: any;
     ages?: number
    }
    // 实现接⼝
    class Greeter implements Person {
      constructor(public firstName='', public lastName=''){}
      sayHello(){
        return 'Hello, ' + this.firstName + ' ' + this.lastName;
      }
    }
    // ⾯向接⼝编程
    function greeting(person: Person) {
      return person.sayHello();
    }
    // const user = {firstName: 'Jane', lastName: 'User'};
    const user = new Greeter('Jane', 'User'); // 创建对象实例
    console.log(user);
    console.log(greeting(user));

    ```

### 类

- 派生类通常被称作 子类，基类通常被称作 超类
- 修饰符
  public 公共
  private 私有 vs protected 受保护
  protected 修饰符与 private 修饰符的行为很相似，但有一点不同， protected 成员在派生类中仍然可以访问
  readonly 只读
- 存取器 set get
- 静态属性 static
- 抽象类 abstract

### 函数

- 函数类型包含两部分：参数类型 arguments 和返回值类型
- 推断类型： 按上下文归类
- 可选参数？| 默认参数 undefined | 必选参数
- 剩余参数 ...restOfName: string[]
- this 和箭头函数
- this 参数在对象字面量
- this 参数在回调函数里
- 重载

### 泛型

- 泛型函数loggingIdentity
- 泛型接口
- 泛型类
- 泛型约束

### 枚举 enum

- 数字枚举
- 字符串枚举
- 异构枚举 Heterogeneous enums
- 反向映射
- const枚举
- 外部枚举 declare

### 类型推论
- 按上下文归类

### 模块


### 装饰器
装饰器实际上是⼯⼚函数，传⼊⼀个对象，输出处理后的新对象。
装饰器实际上是⼀个函数，通过定义劫持，能够对类及其⽅法、属性提供额外的扩展功能。
```
function log(target: Function) {
  // target是构造函数
  console.log(target === Foo); // true
  target.prototype.log = function() {
    console.log(this.bar);
  }
  // 如果类装饰器返回⼀个值，它会使⽤提供的构造函数来替换类的声明。
}
// ⽅法装饰器
function dong(target: any, name: string, descriptor: any) {
  // target是原型或构造函数，name是⽅法名，descriptor是属性描述符，
  // ⽅法的定义⽅式：Object.defineProperty(target, name, descriptor)
  console.log(target[name] === descriptor.value);

  // 这⾥通过修改descriptor.value扩展了bar⽅法
  const baz = descriptor.value; // 之前的⽅法
  descriptor.value = function(val: string) {
    console.log('dong~~');
    baz.call(this, val);
  }
  return descriptor;
}
// 属性装饰器
function mua(target, name) {
  // target是原型或构造函数，name是属性名
  console.log(target === Foo.prototype);
  target[name] = 'mua~~~'
}

@log
class Foo {
  bar = 'bar'
  @mua ns!:string;
  @dong
  baz(val: string) {
    this.bar = val
  }
}
const foo2 = new Foo();
// @ts-ignore
foo2.log();
console.log(foo2.ns);
foo2.baz('lalala')
```


### [TypeScript 中提升幸福感的 10 个高级技巧](https://segmentfault.com/a/1190000039030887)


### Typescript 中的 interface 和 type

- 相同点
  ```
    interface Name {
      name: string
    }

    interface User extends Name {
      age: number
    }


    
    interface SetUser {
      (name: string, age: number): void;
    }

    type Name {
      name: string
    }

    type User = Name & (age: number)

    type SetUser = (name: string, age: number) : void

  ```

- 不同点-

  ```
  // 可以声明基本类型别名，联合类型，元组等类型
    type Name = string
    interface Dog {
     wong();
    }
    interface Cat {
      miao();
    }
    type Pet = Dog | Cat
    type PetList = [Dog, Pet]
  // 当你想获取一个变量的类型时，使用 typeof
    let div = document.createElement('div');
    type B = typeof div
  // 其他骚操作
    type StringOrNumber = string | number; 
    type Text = string | { text: string }; 
    type NameLookup = Dictionary<string, Person>; 
    type Callback<T> = (data: T) => void; 
    type Pair<T> = [T, T]; 
    type Coordinates = Pair<number>; 
    type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
  ```
