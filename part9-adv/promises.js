//
//new Promise() --->create promise
//it takes a callback as a prarameter,
//2 parameters ,resolve & reject
//either out promise is going to be resolved or rejected

function fetchData(){
    return new Promise((resolve ,reject )=>{
        setTimeout(()=>{
                let success=true;
                if(success){
                    resolve("Data fetched successfully");
                }
                else{
                    reject("error fetching the data");
                }
        },3000);
    })
}

//this below wont give me any response bcs it is in the pending state
// let res=fetchData();
// console.log(res);

//we can use .then() & .catch()

fetchData()
    .then((data)=>  console.log(data) )
    .catch((error)=> console.error(error))

