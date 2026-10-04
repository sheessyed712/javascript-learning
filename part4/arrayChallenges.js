//challenge 1

let teaFlavour=["green tea","black tea", "oolong tea"];
let firstTea=teaFlavour[0];

// let array=new Array("green tea","black tea", "oolong tea");
// also declare using this

 let citiesVisited= ["mumbai","sydney"];
 citiesVisited.push("berlin");



let Lastcity=citiesVisited.pop();
//5 soft copy of array
let popularTeas=["green tea","oolong tea", "chai"];
let softCopyteas=popularTeas;
//array is a non primitive data type

//6 hard copy of array
let topCities=["berlin","singapure","new york"];
let hardcopy=[...topCities];//spread operator

//7 merge 2 arrays
let eucities=["paris","rome",];
let asiancities=["tokyo","bangkok"];
//take one array and concat with the other array
let mergedarray=eucities.concat(asiancities);

//8check if "London" element is present 
let city=["kyoto","london","cape town","vancouver"];

console.log(city.includes("london"));//true 


