/*
 * @Author: your name
 * @Date: 2021-01-05 17:06:05
 * @LastEditTime: 2021-01-05 17:09:23
 * @LastEditors: Please set LastEditors
 * @Description: 类
 * @FilePath: \TypeScript\class.js
 */

// 类
//  Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字。 
// 派生类通常被称作 子类，基类通常被称作 超类。
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
