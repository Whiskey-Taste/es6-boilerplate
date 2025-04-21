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

export default Animal;