function multiply (a,b){
    if (b==undefined){
        b=2;
    }
    console.log(a*b)
}
multiply(2,3);
multiply(2);

//default parameters thapa y.t se samjha
console.log('*****************')

function multiply1 (a=3,b=1){
   
    console.log(a*b)
}
multiply1(2,3);
multiply1(2);
multiply1();