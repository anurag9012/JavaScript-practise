/* class Car {
    constructor (name,colour){
        this.name_property=name;
        this.colour_property=colour;
    }
    start(){
        console.log("the car is starting")
    }
}
var car1= new Car("wagonr","red");
console.log(car1);
car1.start();
 */


/* var car2=Object.create(Car);
car2.name_property="blue";
console.log(car2);
car2.start();
 */
/* ********************************* */
// class Animal { /* ...class code here... */ }
// var myDog = Object.create(Animal)
// console.log (Animal)
// console.log(myDog)

/* ********************************* */

// class Animal { /* ...class code here... */ }
// var myDog = new Animal()
// console.log (Animal)
// console.log(myDog)

/* class Bird {
    useWings() {
        console.log("Flying! super class mein hain abhi")
    }
}
class Eagle extends Bird {
    useWingss() {
       super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    // useWings() {
    //     console.log("Diving!")
    // }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
baldEagle.useWingss(); // "Flying! Barely flapping!"
//kingPenguin.useWings(); // "Diving!"
 */

/* class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
 */
var string1=new String("apple");
var string2=new String("apple");
console.log(string1.toUpperCase());

console.log(string1===string2)

var string3="apple"
var string4="apple"
console.log(string3===string4)
let apple = new String("apple");
