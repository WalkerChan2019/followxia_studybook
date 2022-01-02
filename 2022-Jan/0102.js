// 力扣题目——29. 两数相除
// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
// 返回被除数 dividend 除以除数 divisor 得到的商。
// 整数除法的结果应当截去（truncate）其小数部分，
// 例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
// 示例1
//输入: dividend = 10, divisor = 3
// 输出: 3
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
// 示例2
// 输入: dividend = 7, divisor = -3
// 输出: -2
// 解释: 7/-3 = truncate(-2.33333..) = -2
// 提示
// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
// 返回被除数 dividend 除以除数 divisor 得到的商。
// 整数除法的结果应当截去（truncate）其小数部分，
// 例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

var divide = function (dividend, divisor) {
  const MAX_VALUE = 2 ** 31 - 1,
    MIN_VALUE = -(2 ** 31);
  if (dividend === MIN_VALUE && divisor === -1) return MAX_VALUE;
  if (dividend === 0) return 0;

  // 判断最终的符号
  const flag = (dividend < 0 ? 1 : 0) ^ (divisor < 0 ? 1 : 0);
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  let sum = divisor;
  let count = 0;
  while (sum <= dividend) {
    sum += divisor;
    count++;
  }
  if (flag) return -count;
  return count;
};
let dividend = 100;
let divisor = -10;
divisor = 20;
let wk = divide(dividend, divisor);
console.log(wk);
