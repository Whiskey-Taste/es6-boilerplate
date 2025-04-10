//新增构造方式
// const userInfo = {
//     userName: 'Tim',
//     age: 18,
//     skills: ["Java", "js", "ts"]
// };

const userName = 'Tim';
const age = 18;
const skills = ["Java", "js", "ts"];

//传统写法
// const userInfo = {
//     userName: userName,
//     age: age,
//     skills: skills
// }

//ES6
const userInfo = {
    userName,
    age,
    skills
}

console.log(userInfo);

console.log(Object.is(NaN, NaN));//is()既进行类型判断，又进行值判断
//true
console.log(NaN == NaN);
//false

const t1 = { a: 1 };
const t2 = { b: 2 };
const t3 = Object.assign(t1, t2);
console.log(t1 === t3);//true
const t4 = { ...t1, ...t2 };
console.log(t1 === t4);//true