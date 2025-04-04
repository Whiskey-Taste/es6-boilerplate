
// function sum(a, b) {
//     console.log(b);
//     return a + b;
// }
// console.log(sum(1));

//可变长参数， rest
function sum(...args) {
    let result = 0;
    for (let i of args) {
        result += i;
    }
    return result;
}
let result1 = sum(1, 2);
let result2 = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result1);
console.log(result2);

//rest 的工作和 spread 刚好相反