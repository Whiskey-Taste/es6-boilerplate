// const userInfo = {
//     userName: 'Tim',
//     age: 18,
//     skills: ["Java", "js", "ts"]
// };

// //传统写法
// let str2 = "用户名：" + userInfo.userName + "，年龄：" + userInfo.age + "，技能：" + userInfo.skills.join("，");
// console.log(str2);

// //模板字符串（可以换行并保持换行解构）
// let str3 = `
// 用户名：${userInfo.userName}，
// 年龄：${userInfo.age}，
// 技能：${userInfo.skills.join("，")}`;
// console.log(str3);

//BOM，Browser Object Model，DOM，Document Object Model
// document.body.innerHTML = `
// <p>用户资料</p>
// <div>用户名：${userInfo.userName}</div>
// <div>年龄：${userInfo.age}</div>
// <div>技能：${userInfo.skills.join("，")}</div >
//     `;

//用户列表
let userList = [];
for (let i = 0; i < 100; i++) {
    userList.push({
        userName: `user-${Math.ceil(Math.random() * 10000)}`,
        age: 18,
        skills: ["Java", "js", "ts"]
    });
}

let tempHTML = `
<ul>
${userList.map(userInfo => {
    return `<li>用户名：${userInfo.userName}，
年龄：${userInfo.age}，
技能：${userInfo.skills.join("，")}</li>`
}).join("")
    }
</ul>
`;

document.body.innerHTML = tempHTML;