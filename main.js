class Animal{
    constructor(name){
        this.name = name;

    }
    speak(){
        return `${this.name} is speaking`;
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    call(){
        return console.log(`${super.speak()}: Gâu gâu`);
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    call(){
        return console.log(`${super.speak()}: Meo meo`);
    }
}
let dog= new Dog(`dog`)
let cat= new Cat(`cat`)
dog.call();
cat.call();