// 元组 tuple
var student = ['xiaoxing', 10];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color['Red'], Color[0]);

let div:HTMLDivElement = document.createElement('div');
