import Monkey from "./Monkey";

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

export default Human;