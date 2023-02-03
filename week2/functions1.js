
// function add2numbers(a,b){
//     var c=a+b;
//     console.log(c);
// }
// add2numbers(3,5);


/* FUNCTION TO PRINT AN ARRAY */

/* var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
function printarray(arr){
for (var i=0;i<arr.length;i++){
    console.log(i+1,arr[i]);
}
}
printarray(colors) */


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
letterFinder("test","t");

