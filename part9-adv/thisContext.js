//

const person={
    name:hitesh,
    greet(){
        console.log(`hi, im ${this.name}`)
    }
}

person.greet();//output is "hi ,im hitesh"



let greetFunc=person.greet;
greetFunc();//here the output is :"Hi ,im undefined"


//so we need to BIND this

const boundgreet=person.greet.bind({name:"john"});
boundgreet();


//bind ,call and apply ,
// research about this 
