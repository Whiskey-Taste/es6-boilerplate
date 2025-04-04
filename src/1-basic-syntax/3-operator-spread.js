/**
 * 1.展开数组
 */
// const arr = [1, 2, 3];
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// console.log(...arr);

//数组的复制
// const a1 = [1, 2];
// const a2 = [...a1];
// console.log(a1);
// console.log(a2);
// console.log(a1 == a2);

// //合并
// const arr1 = ["h", "e"];
// const arr2 = ["l"];
// const arr3 = ["l", "o"];
// const result = [...arr1, ...arr2, ...arr3];
// console.log(result);
// console.log(result.join(""));

/**
 * 2.字符串展开
 */
const greet = "Hello World!";
const result = [...greet];
console.log(result);
console.log(result instanceof Array);

/**
 * 3.Set 的展开
 * 就是数学概念上的集合
 */
let mySet = new Set([1, 2, 3, 4, 5]);
console.log(...mySet);

//spread的底层机制， Iterator

console.log(Math.max(...[1, 2, 3, 4, 5]));