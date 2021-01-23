/*
奖⾦计算，绩效为 S 的⼈年 终奖有 4 倍⼯资，绩效为 A 的⼈年终奖有 3 倍⼯资，⽽绩效为 B 的⼈年终
奖是 2 倍⼯资
*/

// eg
var calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
        return salary * 4;
    }
    if (performanceLevel === 'A') {
        return salary * 3;
    }
    if (performanceLevel === 'B') {
        return salary * 2;
    }
};
calculateBonus('B', 20000); // 输出:40000
calculateBonus('S', 6000); // 输出:24000

// 策略模式

var strategies = {
    "S" (salary) {
      return salary * 4
    },
    "A" (salary) {
      return salary * 3
    },
    "B" (salary) {
      return salary * 2
    }
}

var calculateBonus = function (level, salary) {
  return strategies[level](salary);
}

console.log(calculateBonus('B', 20000));
console.log(calculateBonus('S', 6000));


