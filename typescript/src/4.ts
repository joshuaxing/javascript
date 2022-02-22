// 类装饰器
function log(target: Function) {
  // target是构造函数
  console.log(target === Foo); // true
  target.prototype.log = function () {
    console.log(this.bar);
  };
  // 如果类装饰器返回⼀个值，它会使⽤提供的构造函数来替换类的声明。
}

// ⽅法装饰器
function dong(target: any, name: string, descriptor: PropertyDescriptor) {
  // target是原型或构造函数，name是⽅法名，descriptor是属性描述符，
  // ⽅法的定义⽅式：Object.defineProperty(target, name, descriptor)
  console.log(target[name] === descriptor.value);

  // 这⾥通过修改descriptor.value扩展了bar⽅法
  const baz = descriptor.value; // 之前的⽅法
  descriptor.value = function (val: string) {
    console.log("dong~~");
    baz.call(this, val);
  };
  return descriptor;
}

// 属性装饰器
function mua(target: any, name: any) {
  // target是原型或构造函数，name是属性名
  console.log(target === Foo.prototype);
  target[name] = "mua~~~";
  target.other = "aaa";
}

@log
class Foo {
  bar = "bar";
  @mua ns!: string;
  @dong
  baz(val: string) {
    this.bar = val;
  }
}
// const foo2 = new Foo();
// // @ts-ignore
// foo2.log();
// console.log(foo2.ns);
// foo2.baz("lalala");
// // @ts-ignore
// foo2.log();


// 参数装饰器
function required(target: any, propertyKey: string | symbol, parameterIndex: number) {
    // target是原型或构造函数，name是属性方法
    target.greeting = 'kkk'
}
class Greeter {
  greeting!:string
  greet(@required name: string) {
    return "Hello " + name + ", " + this.greeting;
  }
}
const a  = new Greeter()
const b = a.greet('aa')
console.log(b)
