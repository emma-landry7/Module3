// Question 1:
function ucFirstLetters(string) {
    let separate = string.split(' ');
    for (let i = 0; i < separate.length; i++) {
        separate[i] = separate[i].charAt(0).toUpperCase() +
        separate[i].substring(1);
    };
    return separate.join(' ');
}

// console.log(ucFirstLetters("los angeles")) //Los Angeles

// Question 2:
// function truncate(str, max) {
//     if (str.length <= max) {
//         return str;
//     };
//     return str.slice(0, max) + '...'
// }

const truncate = function(str, max) {
    if (str.length <= max) {
        return str;
    };
    return str.slice(0, max) + "..."
}

// console.log(truncate('This text will be truncated if it is too long', 25)) //This text will be truncat...
// console.log(truncate("This is a test of my declaration function", 15))
// console.log(truncate('Test 2 of my declaration function', 50))

// Question 3:
const animals = ['Tiger', 'Giraffe']
animals.push('Bear')
animals.push('Hippo')
animals.unshift('Lion')
animals.unshift('Monkey')
animals.push('Alligator')
animals.sort()

function replaceMiddleAnimal(newValue) {
    animals.splice(3, 1, newValue);
    return animals;
}

// console.log(animals)
// console.log(replaceMiddleAnimal('Bat'))

// let beginsWith = animals.filter(start => start.startsWith('B')) // this line works by itself (not in function)

// function findMatchingAnimals(beginsWith){
//     animals.startsWith(beginsWith)
//     return findMatchingAnimals()
// }

// console.log(beginsWith)
// console.log(findMatchingAnimals('B'))

function findMatchingAnimals(beginsWith){
    let animalBegins = [] // create new array with animals that begin with ""
    for (animal of animals){ // loop over each animal in animals array. will return true or false
        // console.log(animal)
        if (animal.startsWith(beginsWith)){ // if there are animals that start with beginsWith parameter, do this function
            animalBegins.push(animal) // add animal to new array
        }
    } 
    return animalBegins; // return new array (don't use bracksts)
    // console.log(findMatchingAnimals())
}

// console.log(findMatchingAnimals('B'))
// console.log(findMatchingAnimals('M'))

// Pseudo code:
// create a function
// take in paremeter beginsWith
// loop over the animals array
// if startsWith returns true, add animal to new array
// return new array

// Question 4:
// pseudo code:
// create a function camelCase
// take in parameter cssProp
// separate string at "-" with split()
// capitalize each word after the first word (start at array i=1)
// join words with no spaces

// function camelCase(cssProp) {
//     let separate = cssProp.split("-");
//     for (i = 1; i < separate.length; i++) {
//         separate[i] = separate[i].slice(0, 1).toUpperCase() +
//         separate[i].substr(1);
//     };
//     return separate.join("")
// }

// const camelCase = (cssProp) => {
//     let separate = cssProp.split('-'); for (i = 1; i < separate.length; i++) {
//         separate[i] = separate[i].charAt(0).toUpperCase() + separate[i].substr(1);
//     }; return separate.join('')
// }

// function camelCase(cssProp) {
//     let separate = cssProp.split('-');
//     for (let word in separate) {
//         // console.log(separate[word]);
//         if (separate.length != 1){
//             separate[1] = separate[1].slice(0, 1).toUpperCase() + separate[1].substr(1);
//         return separate.join('')
//         };
//         return separate.join('')
//     }
// }

// console.log(camelCase('margin-left'))
// console.log(camelCase('background-image'))
// console.log(camelCase('display'))

// Question 5:
let twentyCents = 0.20
let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2)
let fixedTen = tenCents.toFixed(2)

// console.log(fixedTwenty + fixedTen) // this does not work because JavaScript sees these as strings and concatenates them, instead of treating them like numbers and adding them

// function currencyAddition(float1, float2) {
//     let num1 = Number.parseFloat(float1);
//     let num2 = Number.parseFloat(float2);
//     let result = num1 + num2;
//     return result.toFixed(2)
// }

// console.log(currencyAddition(.10, .20))

function currencyOperation(float1, float2, operation, numDecimals) {
    let num1 = Number.parseFloat(float1);
    let num2 = Number.parseFloat(float2);
    // let expr = operation
    switch (operation) {
        case '+':
            const add = num1 + num2;
            return add.toFixed(2);
        case '-':
            const subtract = num1 - num2;
            return subtract.toFixed(2);
        case '/':
            const divide = num1 / num2;
            return divide.toFixed(2);
        case '*':
            const multiply = num1 * num2;
            return multiply.toFixed(2)
    }
}

// console.log(currencyOperation(8.23, 2.71, '-'))
// console.log(currencyOperation(0.10, 0.20, '+')) 
// console.log(currencyOperation(9.97, 3.32, '/'))
// console.log(currencyOperation(2.34, 6.45, '*'))

// Question 6:
function unique(duplicatesArray) {
    const uniqueArray = new Set([...duplicatesArray]);
    return uniqueArray
}

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const pets = ['dog', 'cat', 'hamster', 'dog', 'snake', 'cat', 'rabbit', 'dog']

// console.log(unique(colors))
// console.log(unique(testScores))
// console.log(unique(pets))

// Question 7:

const books = [
    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
    {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
    {id: 3, title: '1984', author: 'George Orwell', year: 1949},
    {id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932},
    {id: 5, title: 'The Catcher in the Rye', author: 'J.D.Salinger', year: 1951},
];

// create function getBookTitle
// take in parameter bookId
// use find function to find book with matching bookId
// return book title


function getBookTitle(bookId) {
    const bookTitle = books.find(book => book.id === bookId);
    return bookTitle.title
}

console.log(getBookTitle(4))
console.log(getBookTitle(2))

function getOldBooks() {
    const oldBooks = books.filter(book => book.year < 1950);
    return oldBooks
}

// console.log(getOldBooks())

function addGenre(genre) {
    const genres = books.map(book => ({...book, genre: genre}))
    return genres
}

console.log(addGenre('Classic'))