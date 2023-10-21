// questions on left, answers on right as comments

"" + 1 + 0 // 10 ; + concatenates
"" - 1 + 0 // -1 
true + false // 1 
!true // false
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"   -9   " + 5 //  -9 5
"   -9   " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
undefined == null // true
undefined === null // false
" \t \n" - 2 // -2

let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four // 34; incorrect; + concatenates strings. we should use numbers instead of strings
let multiplication = three * four // 12; correct; *, /, and - automatically convert strings to numbers
let division = three / four // .75; correct
let subtraction = three - four // -1; correct

let lessThan1 = three < four // true; correct
let lessThan2 = thirty < four /* true; incorrect; JS compares strings character by character, so it compares the 
     3 from "30" and the 4 from "4" and sees that 3 < 4 = true. to fix this, we need to use numbers instead of strings */
     let lessThan3 = 30 < 4

// if (0) console.log('#1 zero is true') // will not print; 0 is false
// if ("0") console.log('#2 zero is true') // will print; non-empty strings are true
// if (null) console.log('null is true') // will not print; null is false
// if (-1) console.log('negative is true') // will print; numbers that are not 0 are true
// if (1) console.log('positive is true') // will print; 1 is not 0

let a = 4, b = 7;
let result = `${a} + ${b} is `;

// if (a + b < 10) {
//     result += 'less than 10';
// } else {
//     result += 'greater than 10';
// }

a + b < 10 ? result += 'less than 10' : result += 'greater than 10'
// console.log(result) // += adds a string to an existing string and creates a new string

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }
// console.log(getGreeting("Emma"))

// const sayHello = function(name) {
//     console.log(`Hello ${name}!`);
// }
// sayHello("Emma")

// const greetingArrow = (name) => console.log(`Hello ${name}!`)
// greetingArrow("Emma")

// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }

// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya', 
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     // getCatchPhrase(person) {
//     //     if (person.numFingers === 6){
//     //         return "You killed my father. Prepare to die."
//     //     }
//     //     return 'Nice to meet you.'
//     // }
//     getCatchPhrase: (person) => person.numFingers === 6 ? 'You killed my father. Prapare to die' : 'Nice to meet you.'
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)

// const basketballGame = {
//     score: 0,
//     freeThrow() {
//         this.score++;
//         return this;
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.score);
//         console.log('Halftime fouls: '+this.fouls);
//     },
//     fullTime() {
//         console.log('Final score is '+this.score);
//         console.log('Total fouls: '+this.fouls);
//     },
//     fouls: 0,
//     foul() {
//         this.fouls ++;
//         return this;
//     }
// }

// basketballGame.basket().freeThrow().foul().freeThrow().basket().threePointer().foul().threePointer().halfTime()
// basketballGame.foul().basket().freeThrow().threePointer().foul().basket().foul().freeThrow().fullTime()

const Sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

function info(city) {
    for (let key in city) {
        console.log(key + ': ' + city[key])
    }
}

// info(Sydney)

const Lafayette = {
    name: 'Lafayette',
    population: 121_771,
    state: 'LA',
    founded: '1821',
    timezone: 'Central'
}

// info(Lafayette)

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = teamSports;

let moreSports = [];
for (let key in teamSports) { // shallow copy
    moreSports[key] = teamSports[key];
}
moreSports.push('Soccer')
moreSports.unshift('Baseball')

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Rex'

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = cat1;
let cat2 = {...cat1}; // shallow copy with object spread
cat2.name = 'Snowball'

console.log(teamSports) // teamSports has changed because objects are stored by reference; an array is a type of object
console.log(moreSports)
console.log(dog1) // dog1 is not changed because it is a primitive value, not an object
console.log(dog2)
console.log(cat1) // cat1 changes because it is an object, and is stored by reference
console.log(cat2)