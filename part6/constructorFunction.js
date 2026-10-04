//functional constructor
function Car(make,model){
    this.make=make;
    this.model=model;
}
//obj
let mycar=new Car("Toyota","camry");
// console.log(mycar);

function Animal(species){
    this.species=species;
}
//adding property to Animal class 
Animal.ptototype.sound=function(){
    return `${this.species} makes sound`;
}

let dog=new Animal("Dog");