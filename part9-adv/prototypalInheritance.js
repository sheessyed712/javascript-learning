

//prototypal inheritance

function Person(name){
    this.name=name;
}

Person.prototype.greet=function(){
    console.log(`Hello ,my name is ${this.name}`);
}

let syed=new Person("syed");

syed.greet();

