//1
let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);

//2
let arr=[];
let i=5;
while(i>0){
    arr.push(i);
    i--;
}
console.log(arr);

//3
let teacollection=[];
let tea;

do{
   tea= prompt(`enter the favourite tea (tyoe "stop" to finish)`);
   if(tea!== "stop"){
    teacollection.push(tea);
   }
}
while(tea!=="stop");

//4
let total=0;
let i=1;
do {
    total+=i;
    i++;

}while(i<=3)


//5
let multiplied=[];
let arr1=[2,4,6];
for(let i=0;i<arr1.length;i++){
    multiplied.push(arr1[i]*2);
}

//6
let arr2=["paris","new york","london"];
let cityList=[];
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
    cityList.push(arr2[i]);
}


