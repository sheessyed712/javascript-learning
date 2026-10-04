//generator function ,yields the result ,
//like the first time we call it ,it will return the result 
//the next time we call it ,it will again return the combine new result

//advance topic


function* numberGenerator(){
yield 1;
    yield 2;
    yield 3;

}
let gen=numberGenerator();

let genTwo=numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen.next().value);


console.log(genTwo.next().value);
console.log(genTwo.next().value);




