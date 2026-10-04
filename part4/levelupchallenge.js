//1
let arr=["green tea","black tea","chai","oolong tea"];
let selectedTea=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]=="chai"){
        break;
        
    }
    selectedTea.push(arr[i]);

}

//2
let arr1=["london","new york", "paris","berlin"];
let visited=[];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]=="paris"){
        continue;

    }
    else{
        visited.push(arr1[i]);
    }
}

//3
let num=[1,2,3,4,5];
let smallnum=[];
for(const num of num){
    if(num==4){
        break;
    }
    smallnum.push(num);
}

//4
let arr3=["green tea","black tea","chai","herbal tea","oolong tea"];
let prefferedtea=[];
for(const tea of arr3){
    if(tea=="herbal tea"){
        continue;
    }
    prefferedtea.push(tea);
}
//5  for in loop
let citiespopulation={
    "london":9000000,
    "new york":8000000,
    "paris":2000000,
    "berlin":3000000
}
let cityNewPopulation={};
for(const city in citiespopulation){
    if(city== "berlin"){
        break;

    }
    cityNewPopulation[city]=citiespopultaion[city];
}

//6
let worldcity={
    "sydney":5000000,
    "tokyo":10000000,
    "cape town":4000000,
    "paris":2000000
}
let largeCities={};

for(const city in worldcity){
    if(workdcity[city]<3000000){
        continue;
    }
    largeCities[city]=worldcity[city];
}

//7
let arr4=["earl tea","green tea", "chai"];
let availableteas=[];

arr4.forEach((element)=>{
    if(element=="chai"){
        return;
    }
    availableteas.push(arr4[i]);

})
// we are not using break here bcs ,"BREAK" is used inside loops 
//and here we are using function ,so we are using return here

//8
//skipping an element in the array using forEach() 
let cities=["berlin","tokyo","sydney","paris"];
let travelledcities=[];
cities.forEach((element)=>{
    if(element=="sydney"){
            return ;
    }
    travelledcities.push(element);
})

