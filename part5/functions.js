//1
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder=makeTea("lemon tea");

//2
function orderTea(teaType){
    function confirmOrder(){
        return "order confirm for chai";
    }
    return confirmOrder();
}
let orderConfirmation =orderTea("chai");
// console.log(orderConfirmation);

//2
//arrow function
let calculateTotal=(price,quantity)=>{
    return price*quantity;
}
let totalCost=calculateTotal(2,5);

//3
let processteaorder=()=>{

}


//4


let createteamaker=(name)=>{
    return function(teaType){
        return `making green tea ${teaType} ${name}`;
    }
}
let teamaker=createteamaker("hitesh");
let result=teamaker("green tea");