export {};

class Person1 {
  name: string | undefined = "shaohua";
  getName(): void {}
}

let p1 = new Person1();
p1.name = "shaohau";
p1.getName();

// 编译结果
// "use strict";
// exports.__esModule = true;
// var Person = /** @class */ (function () {
//     function Person() {
//         this.name = 'shaohua';
//     }
//     Person.prototype.getName = function () {
//     };
//     return Person;
// }());
// var p = new Person();
// p.name = 'shaohau';
// p.getName();

// 2 - 定义存取器

class User {
  myName: string | undefined;
  constructor(myName: string) {
    this.myName = myName;
  }
  get name() {
    return this.myName;
  }
  set name(value) {
    this.myName = value;
  }
}
let user = new User("shaohua");
user.name = "web";
console.log(user.name, user.myName);

let passcode = "secret passcode";

class Employee {
  private _fullName!: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}

// 3 - 修饰符-public

class User2 {
  constructor(public myName: string) {}
  get name() {
    return this.myName;
  }
  set name(value) {
    this.myName = value;
  }
}
let user2 = new User2("shaohua");
user2.name = "web";
console.log(user2.name, user2.myName);

// 4 - 可读的 readonly

class User4 {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  changeName(name: string) {
    // this.name = name;
    // Cannot assign to 'name' because it is a read-only property
  }
}

// 5 - 继承




// 7 - 静态属性



// 8 - 编译结果测试
class Test {
  static name1: string = 'name1'
  name2: string = 'Test-name2'
  log() {

  }
  
}
class Log extends Test {
  name2: string = 'Log-name2'
  log2 () {

  }
}



// 抽象类

// abstract class Animal{
//     name: string | undefined;
//     abstract speak(): void
// }
// class Cat extends Animal {
//     speak(): void {
//         console.log('miao')
//     }
// }

//
