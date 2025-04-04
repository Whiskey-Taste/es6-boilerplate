// //1.数组的解构赋值
// // let a = 1;
// // let b = 2;
// // let c = 3;
// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// //pattern，只要模式匹配就能结构成功
// let [f, [g]] = [4, [5, 6, 7]];
// console.log(f, g);

// //默认值
// let [x, y = 2] = [1, 3];
// console.log(x, y);

//解构赋值中的多种数据类型
// let account = { id: 110, mount: 10000 };//对象字面值， JSON 结构， 本质是Map
// let [userName, age, acct, addr = "Chaoyang, Beijing"] = ["Tim", 18, account];
// console.log(userName, age, addr);
// console.log(acct);

//交换两个变量的值
//传统写法
// let x = 1;
// let y = 2;
// console.log(`x=${x}`, `y=${y}`);
// let temp = x;
// x = y;
// y = temp;
// console.log(`x=${x}`, `y=${y}`);

//解构赋值写法
// let [x, y] = [1, 2];
// [x, y] = [y, x];
// console.log(`x=${x}`, `y=${y}`);

//数组解构赋值实用场景-2
// function getData() {
//     return [1, 2];
// }
// let result = getData();
// let x = result[0];
// let y = result[1];
// let [x, y] = getData();
// console.log(`x=${x}`, `y=${y}`);


/* 
2.对象的解构赋值
 */
//KV 解构， key-value
// let { age, userName, addr = "Chaoyang, Beijing" } = { userName: "Tim", age: 18 };
// console.log(userName, age, addr);

// let { job: myJob, year: workYear } = { job: 'developer', year: 17 };
// console.log(myJob, workYear);
// console.log(job, year);

// let { toString: str } = 123;
// console.log(str);

/* 
3.字符串也可以解构
 */
const [var1] = "hello";
console.log(var1);

/* 
4.函数参数的解构
 */
function sum({ a = 0, b = 0 }) {
    //...
    // if (!b) return a;
    //...
    return a + b;
}
const result = sum({ a: 1, b: 2 });
console.log(result);

//(props)={}