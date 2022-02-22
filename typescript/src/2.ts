
// 函数的重载
function add(a:string,b:string): void
function add(a:number,b:number): void
function add(a: string | number, b: string | number):void {}
add(1,2)
add('xiao','xing')
// add(1,'xing')