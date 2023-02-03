
// function add2numbers(a,b){
//     var c=a+b;
//     console.log(c);
// }
// add2numbers(3,5);


/* FUNCTION TO PRINT AN ARRAY */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
function printarray(arr){
for (var i=0;i<arr.length;i++){
    console.log(i+1,arr[i]);
}
}
//printarray(colors)


function letterFinder(word, match){
    
    // let arr=word.split("");
    // for (var i=0;i<arr.length;i++){
    //     if (arr[i]==match){console.log("found the ",match,"at",i)}
    //     else {console.log("no match found at", i)}
    // }
    for (var i=0;i<word.length;i++){
        if (word[i]==match){console.log("found the ",match,"at",i)}
         else {console.log("no match found at", i)}
    }
}
//letterFinder("test","t");

/* OBJECTS 
THEY ARE a way of storing info wherethe information  are related to one thing , in the form of property and property value....
*/
//Object literals and the brackets notation
var house={}
house.doors=3;
house.bathroom=4;
house["floors"]=2;
console.log(house)


//In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.
var random=Math.random()*10;
console.log(random);
console.log(Math.ceil(random)-1);