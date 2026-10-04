
//asynchronous ->having a pause
//all the languages require some kind of pause behaviour 
//but js don't have it ,we need to inject it 


console.log("chaicode");

function sayHello(){
    console.log("I would like to say Hello");
}
//js doesnt have the capability to run the timer function etc..
//so it gives node or other environment to run this 
//this is the reason it takes time 


//this will make the code execute after some time 
setTimeout(()=>{
    sayHello();
},5000)

for(let i=0;i<5;i++){
    console.log(i);
}