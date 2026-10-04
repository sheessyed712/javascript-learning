//types of data types

//Primitives 
// String, Number, Boolean, Null, Undefined, Symbol

//Non-Primitives
// Objects, Arrays, Functions

let balance=120;
let anotherBalance=new Number(120);

// console.log(typeof balance)
// console.log(typeof anotherBalance)
//every primitive can be converted into NOn-Primitives using new keyword

//boolean
let isActive= true
let isReallyActive =new Boolean(true);//not recommended 

//null and undefined
let firstName=null;
let lastName;
// console.log(firstName);
// console.log(lastName);

let myString="hello";
let username='helo'
let greetMessage= `${username} syed !`;//string interpolation
// console.log(greetMessage);
 
//Symbol
let sm1=Symbol();
let sm2=Symbol();

console.log(sm1 == sm2);//false because every symbol is unique

let sm3=Symbol("syed")
let sm4=Symbol("syed");

console.log(sm3 == sm4);//false because every symbol is unique even if they have same description