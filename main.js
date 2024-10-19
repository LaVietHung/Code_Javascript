class Animal{
    constructor(name,age,call,color){
        this.name=name;
        this.age=age;
        this.call=call;
        this.color=color;
    }
    speak(){
        return console.log(`no la con: ${this.name}, nó khoảng:${this.age}, nó kêu:${this.call}, nó có màu:${this.color}`);
    }
}
const dog=new Animal(`dog`,22,`gau gau`,`đen`);
const cat=new Animal(`cat`,11,`meo meo`,`vang`);
dog.speak();
cat.speak();