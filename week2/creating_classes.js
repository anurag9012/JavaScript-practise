 /* class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
let train1=new Train("blue",true);
let train2=new Train("blue",true); */


// console.log(train1.color===train2.color)
//train1.getSelf();// this is different from below 
/* var obj={a:1,b:"fdfdfd",fx:function(){
    console.log(this)
}}
obj.fx(); */
// train1.lightsStatus();
// train1.toggleLights();
// train1.lightsStatus();


/* train1.getPrototype();
var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
 */

// class Bird {
//     constructor(noofwings){
//         this.wings=noofwings;
//     }
//     useWings() {
//         console.log("Flying!")
//     }
//     getprototype(){
//         console.log(this.getprototype())
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!")
//     }
// }
// var baldEagle = new Eagle();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// var kingPenguin = new Penguin();
// kingPenguin.useWings(); // "Diving!"
// class sparrow extends Bird{
//     constructor(region){
//         super();
//         this.country=region;
//     }
//     location (){
//         console.log(`my location is ${this.country}`)
//     }
// }
// var chidiya =new sparrow("india");
// chidiya.location();
// chidiya.useWings();

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
//console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}