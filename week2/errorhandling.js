/* try{console.log(a+5)
   // throw new ReferenceError()
}
catch(err){
    console.log(err);
    console.log("there was some error")
}
console.log("program is working with errors")
 */
// catch block mein tabhi gusse gey jab try block mein error hoga

function addTwoNums(a,b) {
    try {
//excersize question 
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5,"e")

