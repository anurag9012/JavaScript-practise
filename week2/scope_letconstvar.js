console.log(car);
var car="maruti";//undefined

// console.log(bike);
// let bike="rx100";//ReferenceError: Cannot access 'bike' before initialization

/*
//let and const have block scope , 

let bike="rx100";
console.log(bike);
bike="pulsar"
console.log(bike);

{

    let bike="bajaj";
   console.log(bike);
}
console.log(bike+"####"); */

let count=0;
for (let index = 0; index < 5; index++) {
    console.log(count);
    count++;
    console.log(index)
    
}
//console.log(index);//ReferenceError: index is not defined
console.log(count)