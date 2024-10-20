class Animal{
    constructor(name,age){
        this.name=name;
     

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
let dog=new Dog('Dog');
let cat=new Cat('Cat');
dog.call()
cat.call()