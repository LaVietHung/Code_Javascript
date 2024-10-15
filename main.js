class Animal{
    constructor(name,age,call,color){
        this.name = name
        this.age = age
        this.color = color
        this.call =  call
    }
    speak(){
        return console.log(`con nay la: ${this.name}, nó khoảng: ${this.age}, nó có màu: ${this.color}, nó kêu: ${this.call}`);       
    }
}
const dog = new Animal('Dog', 22, 'gâu gâu', 'đen');
const cat = new Animal('Cat', 20, 'meo meo', 'vàng');
const duck = new Animal('Duck', 11, 'cạp cạp', 'trắng');
dog.speak()
cat.speak()
duck.speak()