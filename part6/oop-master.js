//1
 class Vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        return `${this.model} is car from ${this.make}`;
    }
 }

 class Car extends Vehicle{
    drive(){
        return `${this.make} : this is an inheritance example`;
    }
 }


let mycar=new Car("toyota","landcruiser");
// console.log(mycar.drive());
// console.log(mycar.start());

//encapsulation

class Bankaccount{
    //use # if we want to make it private
    #balance=0;
    deposit(amount){
        this.#balancce+=amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account=new Bankaccount();
//i cannot directly access the balance ,
//bcs it cannot be accessed outside the class,i can only access the getBalance() method

// console.log(account.balance);
// console.log(account.getBalance());

//Abstraction
//hiding the unnecessary data

class Coffee{
    start(){
        return `making the coffee`;
    }
    brewCoffee(){
        return `brewing the coffee`;

    }
    pressStartButton(){
        let msgOne=this.brewCoffee();
        let msgTwo=this.start();

        return `${msgOne}+ ${msgTwo}`;
    }
}

let coff=new Coffee();
// console.log(coff.pressStartButton());


//polymorphism

class Bird{
    fly(){
        return `flying...`
    }
}
class Pemguin extends Bird{
    fly(){
        return ` cannot fly`;
    }
}
let bird=new Bird();
let penguin =new Pemguin();
//when we create a parent class obj ,then parent class methods will be called 
//and similarly for child class
// console.log(bird.fly());
// console.log(penguin.fly());


//Static
//static is a method which can be only called by its class name
//it can be any property or methid of a class
//we cannot access the static data through the obj

class Calculator{
    static add(a,b){
        return a+b;
    }
}

// console.log(Calculator.add(2,3));//output = 5


//getters and Setters

class Employee{
    #salary;
    constructor(name,salary){
        this.name=name;
        this.#salary=salary;
    }
    get salary(){
        return `cannot access the salary`;
    }

    set salary(value){
        if(value<0){
            console.error("invalid salary");
        }else{

            this._salary=value;
        }
    }
}

let emp=new Employee("alice", 5000);
console.log(emp.salary);

//if we want to call getters and setters ,we should not pass the parameters
//emp.salary() ->wrong
//emp.salary  ->right
