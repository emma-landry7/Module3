// Question 1:
function makeCounter(startsFrom, incrementBy) {
  let currentCount = startsFrom;

  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

// let counter1 = makeCounter(0, 1);

// counter1()
// counter1()

// let counter2 = makeCounter(5, 5)
// counter2()
// counter2()
// counter2()
// counter2()
// counter1()

// Question 2:
// a) they will print in this order: #4, #3, #2, #1

// function delayMsg(msg) {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }
const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms')
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms')
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms')
// delayMsg('#4: Not delayed at all')

// let canceledMsg = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds')
// clearTimeout(canceledMsg)

// Question 3:
// let msg = 'default'
// function printMe() {
//     console.log(`printing debounced message: ${msg}`)
// }

// console.log('Go!')
// printMe = debounce(printMe, 2000, 'hello')
// function debounce(func, ms, message) {
//     let timer;
//     msg = message
//     return function() {
//         clearTimeout(timer);
//         timer = setTimeout(() => {func()}, ms);
//     }
// }

// setTimeout(printMe, 100)
// setTimeout(printMe, 200)
// setTimeout(printMe, 300)

// Question 4:
// function fibonacci() { // function without interval timer
//     let a = 1;
//     let b = 1;
//     let c;
//     for (let i = 0; i < 10; i++) {
//         console.log(a);
//         c = a + b;
//         a = b;
//         b = c
//     }
// }
// fibonacci()

// function printFibonacci() {
//     let a = 1;
//     let b = 1;
//     let c;
//     let timer = setInterval(function fibonacci(){
//         for (let i = 0; i == 0 ; i++) {
//             console.log(a);
//             c = a + b;
//             a = b;
//             b = c;
//         }
//     }, 1000);
//     setTimeout(() => clearInterval(timer), 10*1000)
// }
// printFibonacci()

// function printFibonacciTimeouts(delay, limit) {
//     let counter = 1;
//     let a = 1;
//     let b = 1;
//     let c;
//     setTimeout(function fibonacci(current) {
//         for (let i = 0; i == 0; i++){
//             console.log(a);
//             c = a + b;
//             a = b;
//             b = c;
//         };
//         if (current < limit) setTimeout(fibonacci, delay, current+1);
//     }, delay, counter)
// }
// printFibonacciTimeouts(1000, 5)

// Question 5:
// calling car.description within setTimeout fails because the function is passed as a reference and loses the context of "this"

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

// car.description()

// setTimeout(() => car.description(), 1000)

const carClone = { ...car, year: 1972 };
// setTimeout(() => carClone.description(), 1500)

// c) the clone's delayed description() uses the new value from b)
const carBound = car.description.bind(car);
// const carCloneBound = carClone.description.bind(carClone)
// setTimeout(carBound, 2000)
// setTimeout(carCloneBound, 2500)

const myCar = { ...car, make: "Kia" };
// setTimeout(carBound, 2000)
const myCarBound = myCar.description.bind(myCar);
// setTimeout(myCarBound, 300)

// Question 6:

function delay(func, ms) {
  setTimeout(func, ms);
  // console.log(this)
}

function multiply(a, b, c, d) {
  // let a = 5
  // let b = 5
  let result = a * b * c * d;
  console.log(result);
  // return result
}

// Function.prototype = delay
Function.prototype.delay = function (delayMs) {
  // setTimeout(this, ms)
  // console.log(this)
  return (...args) => {
    setTimeout(() => {
      this.apply(null, args);
      // this(...args)
    }, delayMs);
  };
};

// console.log('go')
// multiply.delay(2000)(5, 5, 1, 9)

// Question 7:
// let person = ""
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
Person.prototype.toString = function toString() {
  return (
    "Name: " +
    this.name +
    ", " +
    "Age: " +
    this.age +
    ", " +
    "Gender: " +
    this.gender
  );
};
const person1 = new Person("James Brown", 73, "male");
// person1.toString()

const person2 = new Person("Karen Smith", 42, "female");
const person3 = new Person("Kendal Taylor", 22, "female");
// console.log(person1.toString())
// console.log(person2.toString())
// console.log(person3.toString())

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}
Student.prototype.toString = function toString() {
  return (
    "Name: " +
    this.name +
    ", " +
    "Age: " +
    this.age +
    ", " +
    "Gender: " +
    this.gender +
    ", " +
    "Cohort: " +
    this.cohort
  );
};

const student1 = new Student("Clara", 24, "female", "Alpha Beta Theta");
const student2 = new Student("Jason", 40, "male", "doctors");
// console.log(student2.toString())
// console.log(student1.toString())
// console.log(person2.toString())
// console.log(`${person1}`);

// Question 8:

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    return this
  }
}
const myClock = new DigitalClock("my clock:");
// myClock.start()

class PrecisionClock extends DigitalClock {
    constructor(prefix = "clock:", precision = 1000) {
        super(prefix);
        this.precision = precision
    };
    start() {
        // super.start();
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
        return this
      }
}
const precisionClock = new PrecisionClock("my precision clock:", 60 * 1000)
// precisionClock.start()

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime
    }
    display() {
        super.display()
        let date = new Date();
        let [hours, mins] = [
            date.getHours(),
            date.getMinutes()
        ];
        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        const currentTime = `${hours}:${mins}`
        if (currentTime == this.wakeupTime) {
            console.log("Wake Up");
            this.stop()
        }
    }
}
const alarmClock = new AlarmClock("my alarm clock:", '19:25')
alarmClock.start()