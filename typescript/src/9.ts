export {}

// 推荐类型

// 从右向左流动
let foo = 1;

// 通过return 关键字推荐返回的类型
// 低部流出
function add (a: number, b: number) {
    return a + b
}
let c =  add(1, 3)

// 从左向右流动
type Sum = (a:number, b: number) => number
let sum: Sum = (a, b) => {
    return a +b
}