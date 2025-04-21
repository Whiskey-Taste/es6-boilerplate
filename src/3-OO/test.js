import Animal from "./Animal";
import Human from "./Human";

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

//import("");
//import函数