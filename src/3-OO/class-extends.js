//ES6: class extends
//ECMA4: prototype

//达尔文的进化论，从猴子变到人
//抽象，物理世界，或者是具体的业务需求--->OO代码
//继承链
//面向对象的3个关键特征：封装、继承、多态

class Animal {

    //默认的property
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`动物吃东西>${this.name}`);
    }

    run() {
        console.log(`动物运动>${this.name}`);
    }
}

class Monkey extends Animal {
    constructor(name, age) {
        super(name, age);
    }
}

class Human extends Monkey {
    constructor(name, age) {
        super(name, age);
    }

    //重写，overwrite
    eat() {
        console.log(`人类吃东西>${this.name}`);
    }

    run() {
        console.log(`人类直立行走>${this.name}`);
    }

    coding() {
        console.log(`人类会写代码`);
    }
}

let animal1 = new Animal("动物1", 1);
animal1.eat();
animal1.run();
// animal1.coding();

let human = new Human("Tim",18);
console.log(human.name);
console.log(human.age);
human.eat();
human.run();
human.coding();
