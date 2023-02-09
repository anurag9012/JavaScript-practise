/* const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(k,i) {
    console.log(k,i);
}); */
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)
//we can push more than one item in one push operation in an array...
//SET data_structure
let arr1=[2,3,4,4,5,1,2,5,7,9,9,10,3,100];
let unique=new Set(arr1);
console.log(unique);
console.log(unique.has(2))
//DESTRUCTURING OF AN OBJECT, THE VARIABLE SHOULD BE A KEY IN THE ORIGNAL OBJECT
let {PI}=Math;
console.log(PI)
PI="anurag";
console.log(PI)
//spread operator: is used to spread the content of an array

let arr2=[23,34,...arr1];
console.log(arr2)