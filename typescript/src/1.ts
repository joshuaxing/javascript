
// 元组 tuple

let student: [string, number] = ['xiaoxing', 10]

// 枚举
enum Color {
    Red, 
    Green, 
    Blue
}
console.log(Color['Red'], Color[0])

// any

// null bealon

// never
function error (msg: string): never {
    throw new Error(msg)
}
function loop():never {
    while(true) {}
}

// void 代表没有任何类型
// 函数没有返回值
// void可以被赋值为null undefined never不能包括任何类型

// Symbol

// BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER)
console.log(max+BigInt(1) + max+BigInt(2))


// 对象类型

// 联合类型

// 断言
let name4: string | number
console.log((name4! as number).toFixed(2))
// 
console.log((name4! as any as boolean))

// 字面量类型
const up:'Up' = 'Up'
type Direction = 'Up' | 'Down'
function move(direction: Direction) {

}
move('Down')
// 类型字面量
type Person = {
    name: string,
    age: number
}
let p1: Person


let div:HTMLDivElement = document.createElement('div');