//example of undefined
/* var anu;
console.log(anu);
anu="student";
console.log(anu);
//console.log(anuu);//refernce error -- anuu not defined

console.log(anu.match(/a/))// gives the output NULL
 */

/*  recursive function*/

/* let counter=3;

function example(){
    console.log(counter);
    counter=counter-1;
    if (counter===0)return;
    example();

}
example();
 */
/* 
The functional programming paradigm */
//example one
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
//virtualPet.nap()
console.log(virtualPet.sleepy) // false

// example 2

/* let counter=3;
let abc=function example(){
    console.log(counter);
    counter=counter-1;
    if (counter===0)return;
    example();

}
abc()
 */

//example3 

/* function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = false;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}
addTwoNums(getNumber(), getNumber())
console.log(typeof(getNumber))
 */

//example3


