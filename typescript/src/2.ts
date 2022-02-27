
let name10 = '11'

function hello(name:string): void {
    console.log('hello', name)
}
hello('zhufeng')

type GetName = (firstName: string, lastName: string) => string;
let getName: GetName = function(firstName: string, lastName: string): string {
   return firstName + lastName
}

// 可选参数
function print(name: string, age?:number):void {

}
// 默认值
function ajax(url: string, method: string = 'GET') {

}
ajax('/')

// 剩余参数

function sum2(...numbers: number[]) {
  return numbers.reduce((val, item) => val+item, 0)
}
console.log(sum2(1,2,3))

// 函数的重载
function add(a:string,b:string): void
function add(a:number,b:number): void
function add(a: string | number, b: string | number):void {}
add(1,2)
add('xiao','xing')
// add(1,'xing')