//js is a prototipe based not class-Objects based
//it looks like it is class-objects based ,but it is prototipe based

//prototypes is nothing but extra properties and functionalities 
//in every datatypes

let computer={cpu:12};
let lenovo={
    screen:"HD",
    __proto__:computer

};
let hardware={};

// console.log(`computer `,lenovo.__proto__);

 
let genericCar={tyres:4};

let tesla={
    driver:"AI"
};

Object.setPrototypeOf(tesla,genericCar);

console.log(`tesla ` ,Object.getPrototypeOf(tesla));

