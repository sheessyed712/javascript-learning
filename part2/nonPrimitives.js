 const username={
    name:"syed shees ",
    isLoggenIn : true,
 }//even if it is declared as const we can change the properties of object but we cannot reassign the object to a new value

 username.name="ahamed"
 username.lastName="shees"// we can also inject the values
//  console.log(username);
//  console.log(username.name);
//  console.log(typeof username);

 const name={
    "first Name":"syed",
    lastName:"shees",
    age:22,
 }
//  console.log(name["first Name"]);//we can access the properties of object using bracket notation also

//Array

let anotherUser=["syed",true];
// console.log(anotherUser[0]);


//type conversion

let isVal=true;
console.log(isVal + 1);//true is converted to 1 and false is converted to 0
let isValue="2abc"
console.log(typeof Number(isValue));//removes the white spaces from the start and end of the string

console.log(Number(null));
console.log(Number(undefined));